import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { ENQUIRY_EMAIL, isValidEmail } from "../../../lib/site";
import { sendEnquiryWhatsAppAlerts, type WhatsAppAlertResult } from "../../../lib/whatsapp";
export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  package?: string;
  extras?: string;
  enquiryEmail?: string;
  enquiryWhatsAppNumbers?: string[];
};

type DeliveryResult =
  | { ok: true; delivered: true; provider: "smtp" | "resend"; enquiryEmail: string; whatsapp?: WhatsAppAlertResult }
  | { ok: true; delivered: false; provider: "none"; enquiryEmail: string; reason: string; whatsapp?: WhatsAppAlertResult }
  | { ok: false; error: string; enquiryEmail?: string; whatsapp?: WhatsAppAlertResult };function resolveDestination(requested?: string): string {
  const configured = (process.env.CONTACT_EMAIL || ENQUIRY_EMAIL).trim();
  if (!requested || !isValidEmail(requested)) return configured;
  const allowed = new Set(
    [ENQUIRY_EMAIL, process.env.CONTACT_EMAIL, process.env.NEXT_PUBLIC_ENQUIRY_EMAIL]
      .filter(Boolean)
      .map((value) => value!.trim().toLowerCase()),
  );
  if (allowed.has(requested.trim().toLowerCase())) {
    return requested.trim();
  }
  return configured;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildMessage(data: ContactBody, destination: string) {
  const lines = [
    `Name: ${data.name || ""}`,
    `Email: ${data.email || ""}`,
    `Phone: ${data.phone || ""}`,
    `Business: ${data.business || ""}`,
    `Package: ${data.package || ""}`,
    `Extras: ${data.extras || ""}`,
    `Enquiry inbox: ${destination}`,
  ];
  const text = lines.join("\n");
  const html = `<pre style="font-family:ui-monospace,monospace;font-size:14px;line-height:1.5">${escapeHtml(text)}</pre>`;
  return { text, html, subject: `New SimpleSiteWorks enquiry from ${data.name || "website"}` };
}

async function sendWithResend(data: ContactBody, destination: string): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return {
      ok: true,
      delivered: false,
      provider: "none",
      enquiryEmail: destination,
      reason: "RESEND_API_KEY is not set.",
    };
  }

  const from = process.env.RESEND_FROM?.trim() || process.env.SMTP_FROM || "SimpleSiteWorks <onboarding@resend.dev>";
  const { text, html, subject } = buildMessage(data, destination);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [destination],
      reply_to: data.email,
      subject,
      text,
      html,
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as { id?: string; message?: string; error?: { message?: string } };

  if (!response.ok) {
    const message = payload.error?.message || payload.message || `Resend HTTP ${response.status}`;
    console.error("[contact] Resend delivery failed", { status: response.status, message, destination });
    return { ok: false, error: message, enquiryEmail: destination };
  }

  console.info("[contact] Resend delivery succeeded", { id: payload.id, destination });
  return { ok: true, delivered: true, provider: "resend", enquiryEmail: destination };
}

async function sendWithSmtp(data: ContactBody, destination: string): Promise<DeliveryResult> {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!host || !user || !pass) {
    return {
      ok: true,
      delivered: false,
      provider: "none",
      enquiryEmail: destination,
      reason:
        "SMTP is not configured. Add SMTP_HOST, SMTP_USER, and SMTP_PASS to .env.local (see .env.example).",
    };
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const { text, html, subject } = buildMessage(data, destination);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  try {
    await transporter.verify();
  } catch (err) {
    console.error("[contact] SMTP verify failed", err);
    return {
      ok: false,
      error: `SMTP connection failed: ${err instanceof Error ? err.message : String(err)}`,
      enquiryEmail: destination,
    };
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM?.trim() || user,
      to: destination,
      replyTo: data.email,
      subject,
      text,
      html,
    });
    console.info("[contact] SMTP delivery succeeded", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      destination,
    });
    return { ok: true, delivered: true, provider: "smtp", enquiryEmail: destination };
  } catch (err) {
    console.error("[contact] SMTP send failed", err);
    return {
      ok: false,
      error: `SMTP send failed: ${err instanceof Error ? err.message : String(err)}`,
      enquiryEmail: destination,
    };
  }
}

export async function POST(req: Request) {
  const headers = {
    "Cache-Control": "no-store",
  };

  try {
    let data: ContactBody;
    try {
      data = (await req.json()) as ContactBody;
    } catch {
      console.error("[contact] Invalid JSON body");
      return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400, headers });
    }

    if (!data.name || data.name.trim().length < 2) {
      return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400, headers });
    }

    if (!data.email || !isValidEmail(data.email)) {
      return NextResponse.json(
        { ok: false, error: "A valid customer email address is required." },
        { status: 400, headers },
      );
    }

    if (!data.package) {
      return NextResponse.json({ ok: false, error: "Package is required." }, { status: 400, headers });
    }

    const destination = resolveDestination(data.enquiryEmail);
    console.info("[contact] Enquiry received", {
      name: data.name,
      email: data.email,
      package: data.package,
      destination,
      hasResend: Boolean(process.env.RESEND_API_KEY),
      hasSmtp: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS),
      hasWhatsApp: Boolean(
        process.env.CONTACT_WHATSAPP_NUMBERS &&
          process.env.WHATSAPP_ACCESS_TOKEN &&
          process.env.WHATSAPP_PHONE_NUMBER_ID,
      ),
    });

    const whatsappPromise = sendEnquiryWhatsAppAlerts(data, data.enquiryWhatsAppNumbers);

    let result: DeliveryResult;

    if (process.env.RESEND_API_KEY?.trim()) {
      result = await sendWithResend(data, destination);
    } else {
      result = await sendWithSmtp(data, destination);
    }

    const whatsapp = await whatsappPromise;
    result = { ...result, whatsapp };

    if (whatsapp.skipped) {
      console.info("[contact] WhatsApp alerts skipped", { reason: whatsapp.reason });
    }

    if (!result.ok) {
      return NextResponse.json(result, { status: 502, headers });
    }

    if (!result.delivered) {
      // Soft success: accepted but not emailed — client should surface this clearly
      console.warn("[contact] Enquiry accepted but not delivered", result);
      return NextResponse.json(result, { status: 200, headers });
    }

    return NextResponse.json(result, { status: 200, headers });
  } catch (err) {
    console.error("[contact] Unexpected error", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : String(err) },
      { status: 500, headers },
    );
  }
}
