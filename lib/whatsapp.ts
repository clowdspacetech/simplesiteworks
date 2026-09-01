import { ENQUIRY_WHATSAPP_NUMBERS, parseWhatsAppNumbers } from "./site";

export type EnquiryWhatsAppPayload = {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  package?: string;
};

export type WhatsAppAlertResult =
  | { ok: true; sent: number; skipped: false; numbers: string[] }
  | { ok: true; sent: 0; skipped: true; reason: string };

function normalizeWhatsAppNumber(value: string): string {
  return value.replace(/\D/g, "");
}

export function resolveWhatsAppNumbers(requested?: string[]): string[] {
  const allowed = new Set(
    [...ENQUIRY_WHATSAPP_NUMBERS, ...parseWhatsAppNumbers(process.env.CONTACT_WHATSAPP_NUMBERS)].map(
      normalizeWhatsAppNumber,
    ),
  );

  if (allowed.size === 0) return [];

  if (!requested?.length) {
    return [...allowed];
  }

  const resolved = [...new Set(requested.map(normalizeWhatsAppNumber).filter((value) => allowed.has(value)))];
  return resolved.length ? resolved : [...allowed];
}

export function buildEnquiryWhatsAppMessage(data: EnquiryWhatsAppPayload): string {
  const parts = [
    "New SimpleSiteWorks enquiry",
    data.name ? `Name: ${data.name}` : "",
    data.email ? `Email: ${data.email}` : "",
    data.phone ? `Phone: ${data.phone}` : "",
    data.business ? `Business: ${data.business}` : "",
    data.package ? `Package: ${data.package}` : "",
  ].filter(Boolean);
  return parts.join("\n").slice(0, 4096);
}

async function sendWhatsAppText(to: string, body: string): Promise<{ ok: boolean; message?: string; id?: string }> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN?.trim();
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID?.trim();
  const apiVersion = process.env.WHATSAPP_API_VERSION?.trim() || "v21.0";

  if (!token || !phoneNumberId) {
    return { ok: false, message: "WhatsApp API is not configured." };
  }

  const response = await fetch(`https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body },
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as {
    messages?: { id?: string }[];
    error?: { message?: string };
  };

  if (!response.ok) {
    return { ok: false, message: payload.error?.message || `WhatsApp HTTP ${response.status}` };
  }

  return { ok: true, id: payload.messages?.[0]?.id };
}

async function sendWhatsAppTemplate(to: string, data: EnquiryWhatsAppPayload): Promise<{ ok: boolean; message?: string; id?: string }> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN?.trim();
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID?.trim();
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME?.trim();
  const apiVersion = process.env.WHATSAPP_API_VERSION?.trim() || "v21.0";
  const language = process.env.WHATSAPP_TEMPLATE_LANGUAGE?.trim() || "en";

  if (!token || !phoneNumberId || !templateName) {
    return { ok: false, message: "WhatsApp template is not configured." };
  }

  const response = await fetch(`https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "template",
      template: {
        name: templateName,
        language: { code: language },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: data.name || "—" },
              { type: "text", text: data.email || "—" },
              { type: "text", text: data.phone || "—" },
              { type: "text", text: data.business || "—" },
              { type: "text", text: data.package || "—" },
            ],
          },
        ],
      },
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as {
    messages?: { id?: string }[];
    error?: { message?: string };
  };

  if (!response.ok) {
    return { ok: false, message: payload.error?.message || `WhatsApp HTTP ${response.status}` };
  }

  return { ok: true, id: payload.messages?.[0]?.id };
}

export async function sendEnquiryWhatsAppAlerts(
  data: EnquiryWhatsAppPayload,
  requestedNumbers?: string[],
): Promise<WhatsAppAlertResult> {
  const numbers = resolveWhatsAppNumbers(requestedNumbers);
  if (numbers.length === 0) {
    return { ok: true, sent: 0, skipped: true, reason: "No WhatsApp numbers configured." };
  }

  const useTemplate = Boolean(process.env.WHATSAPP_TEMPLATE_NAME?.trim());
  const body = buildEnquiryWhatsAppMessage(data);

  let sent = 0;
  for (const to of numbers) {
    const result = useTemplate ? await sendWhatsAppTemplate(to, data) : await sendWhatsAppText(to, body);
    if (!result.ok) {
      console.error("[contact] WhatsApp delivery failed", { to, message: result.message });
      continue;
    }

    sent += 1;
    console.info("[contact] WhatsApp delivery succeeded", { to, id: result.id });
  }

  if (sent === 0) {
    return {
      ok: true,
      sent: 0,
      skipped: true,
      reason: useTemplate
        ? "WhatsApp template alerts failed for all configured numbers."
        : "WhatsApp alerts failed for all configured numbers.",
    };
  }

  return { ok: true, sent, skipped: false, numbers };
}
