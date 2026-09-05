import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { ENQUIRY_EMAIL, ENQUIRY_EMAILS, isValidEmail, parseEnquiryEmails } from "../../../lib/site";
import { sendEnquiryWhatsAppAlerts, type WhatsAppAlertResult } from "../../../lib/whatsapp";
export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  package?: string;
  extras?: string;
  enquiryWhatsAppNumbers?: string[];
};

type DeliveryResult =
  | {
      ok: true;
      delivered: true;
      provider: "smtp" | "resend";
      whatsapp?: WhatsAppAlertResult;
    }
  | {
      ok: true;
      delivered: false;
      provider: "none";
      reason: string;
      whatsapp?: WhatsAppAlertResult;
    }
  | {
      ok: false;
      error: string;
      whatsapp?: WhatsAppAlertResult;
    };

function configuredEnquiryEmails(): string[] {
  // Server-only destinations — never rely on client-supplied addresses.
  const fromEnv = [
    ...parseEnquiryEmails(process.env.CONTACT_EMAIL),
    ...parseEnquiryEmails(process.env.CONTACT_EMAILS),
    ...ENQUIRY_EMAILS,
  ];
  const unique = [...new Set(fromEnv.map((email) => email.trim()).filter(Boolean))];
  return unique.length ? unique : [ENQUIRY_EMAIL];
}

function resolveDestinations(): string[] {
  return configuredEnquiryEmails();
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildMessage(data: ContactBody, destinations: string[]) {
  const lines = [
    `Name: ${data.name || ""}`,
    `Email: ${data.email || ""}`,
    `Phone: ${data.phone || ""}`,
    `Business: ${data.business || ""}`,
    `Package: ${data.package || ""}`,
    `Extras: ${data.extras || ""}`,
    `Enquiry inbox: ${destinations.join(", ")}`,
  ];
  const text = lines.join("\n");
  const html = `<pre style="font-family:ui-monospace,monospace;font-size:14px;line-height:1.5">${escapeHtml(text)}</pre>`;
  return { text, html, subject: `New SimpleSiteWorks enquiry from ${data.name || "website"}` };
}

async function sendWithResend(data: ContactBody, destinations: string[]): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return {
      ok: true,
      delivered: false,
      provider: "none",
      reason: "RESEND_API_KEY is not set.",
    };
  }

  const from = process.env.RESEND_FROM?.trim() || process.env.SMTP_FROM || "SimpleSiteWorks <onboarding@resend.dev>";
  const { text, html, subject } = buildMessage(data, destinations);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: destinations,
      reply_to: data.email,
      subject,
      text,
      html,
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as {
    id?: string;
    message?: string;
    error?: { message?: string };
  };

  if (!response.ok) {
    const message = payload.error?.message || payload.message || `Resend HTTP ${response.status}`;
    console.error("[contact] Resend delivery failed", { status: response.status, message, destinations });
    return { ok: false, error: message };
  }

  console.info("[contact] Resend delivery succeeded", { id: payload.id, destinations });
  return {
    ok: true,
    delivered: true,
    provider: "resend",
  };
}

async function sendWithSmtp(data: ContactBody, destinations: string[]): Promise<DeliveryResult> {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!host || !user || !pass) {
    return {
      ok: true,
      delivered: false,
      provider: "none",
      reason:
        "SMTP is not configured. Add SMTP_HOST, SMTP_USER, and SMTP_PASS to .env.local (see .env.example).",
    };
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const { text, html, subject } = buildMessage(data, destinations);

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
    };
  }

  // Gmail is more reliable when each recipient is sent individually,
  // and the From address matches the authenticated SMTP_USER.
  const from = process.env.SMTP_FROM?.trim() || user;
  const accepted: string[] = [];
  const rejected: string[] = [];
  const messageIds: string[] = [];

  try {
    for (const destination of destinations) {
      const info = await transporter.sendMail({
        from,
        to: destination,
        replyTo: data.email,
        subject,
        text,
        html,
        envelope: {
          from: user,
          to: destination,
        },
      });

      const okRecipients = (info.accepted ?? []).map(String);
      const badRecipients = (info.rejected ?? []).map(String);
      accepted.push(...(okRecipients.length ? okRecipients : [destination]));
      rejected.push(...badRecipients);
      if (info.messageId) messageIds.push(info.messageId);

      console.info("[contact] SMTP message accepted", {
        destination,
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
        response: info.response,
      });
    }

    if (!accepted.length) {
      return {
        ok: false,
        error: `SMTP accepted no recipients. Rejected: ${rejected.join(", ") || "unknown"}`,
      };
    }

    console.info("[contact] SMTP delivery succeeded", {
      messageIds,
      accepted,
      rejected,
      destinations,
      tip: `Also check Sent mail in ${user}, plus Spam/Promotions for each destination inbox.`,
    });
    return {
      ok: true,
      delivered: true,
      provider: "smtp",
    };
  } catch (err) {
    console.error("[contact] SMTP send failed", err);
    return {
      ok: false,
      error: `SMTP send failed: ${err instanceof Error ? err.message : String(err)}`,
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

    const destinations = resolveDestinations();
    console.info("[contact] Enquiry received", {
      name: data.name,
      email: data.email,
      package: data.package,
      destinations,
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
      result = await sendWithResend(data, destinations);
    } else {
      result = await sendWithSmtp(data, destinations);
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
