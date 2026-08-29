import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { ENQUIRY_EMAIL, isValidEmail } from "../../../lib/site";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  package?: string;
  extras?: string;
  enquiryEmail?: string;
};

function resolveDestination(requested?: string): string {
  const fallback = process.env.CONTACT_EMAIL || ENQUIRY_EMAIL;
  if (!requested || !isValidEmail(requested)) return fallback;
  // Only allow the configured public enquiry address from the client
  if (requested.trim().toLowerCase() === ENQUIRY_EMAIL.toLowerCase()) {
    return requested.trim();
  }
  return fallback;
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ContactBody;

    if (!data.email || !isValidEmail(data.email)) {
      return NextResponse.json(
        { ok: false, error: "A valid customer email address is required." },
        { status: 400 },
      );
    }

    const destination = resolveDestination(data.enquiryEmail);
    const hasSmtp = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

    if (!hasSmtp) {
      console.info("[contact] SMTP not configured; enquiry accepted locally", {
        ...data,
        enquiryEmail: destination,
      });
      return NextResponse.json({ ok: true, delivered: false, enquiryEmail: destination });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mail = {
      from: process.env.SMTP_FROM || "no-reply@simplesiteworks.example",
      to: destination,
      replyTo: data.email,
      subject: `New contact from ${data.name || "website"}`,
      text: [
        `Name: ${data.name || ""}`,
        `Email: ${data.email || ""}`,
        `Phone: ${data.phone || ""}`,
        `Business: ${data.business || ""}`,
        `Package: ${data.package || ""}`,
        `Extras: ${data.extras || ""}`,
        `Enquiry inbox: ${destination}`,
      ].join("\n"),
      html: `<pre>${[
        `Name: ${data.name || ""}`,
        `Email: ${data.email || ""}`,
        `Phone: ${data.phone || ""}`,
        `Business: ${data.business || ""}`,
        `Package: ${data.package || ""}`,
        `Extras: ${data.extras || ""}`,
        `Enquiry inbox: ${destination}`,
      ].join("\n")}</pre>`,
    };

    await transporter.sendMail(mail);

    return NextResponse.json({ ok: true, delivered: true, enquiryEmail: destination });
  } catch (err) {
    console.error("contact error", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
