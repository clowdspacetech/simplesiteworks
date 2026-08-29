import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const hasSmtp = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

    if (!hasSmtp) {
      console.info("[contact] SMTP not configured; enquiry accepted locally", data);
      return NextResponse.json({ ok: true, delivered: false });
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
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New contact from ${data.name || "website"}`,
      text: JSON.stringify(data, null, 2),
      html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
    };

    await transporter.sendMail(mail);

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("contact error", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
