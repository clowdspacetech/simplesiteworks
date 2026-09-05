"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ENQUIRY_WHATSAPP_NUMBERS,
  isValidEmail,
  resolvePackageId,
  toWhatsAppMeNumber,
  type PackageId,
} from "../lib/site";
import { useCurrency } from "./CurrencyProvider";

type Status = "idle" | "loading" | "done" | "queued" | "whatsapp" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  package?: string;
};

type ContactApiResponse = {
  ok?: boolean;
  delivered?: boolean;
  provider?: string;
  reason?: string;
  error?: string;
};

function validate(values: { name: string; email: string; phone: string; package: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Please enter a valid email address (e.g. you@business.com).";
  }
  if (values.phone.trim() && !/^[\d\s+()-]{7,}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.package) {
    errors.package = "Select a package.";
  }
  return errors;
}

export default function ContactForm({
  selectedPackage,
  businessType,
  extras = [],
  onPackageChange,
  enquiryWhatsAppNumbers = ENQUIRY_WHATSAPP_NUMBERS,
  initialName = "",
  initialEmail = "",
  initialPhone = "",
}: {
  selectedPackage?: string;
  businessType?: string;
  extras?: string[];
  onPackageChange?: (pkg: PackageId) => void;
  /** WhatsApp numbers (E.164). First number is used for the customer chat button. */
  enquiryWhatsAppNumbers?: string[];
  initialName?: string;
  initialEmail?: string;
  initialPhone?: string;
}) {
  const destinationWhatsApp = enquiryWhatsAppNumbers.length ? enquiryWhatsAppNumbers : ENQUIRY_WHATSAPP_NUMBERS;
  const whatsappChatNumber = destinationWhatsApp[0] ?? "";
  const { packages } = useCurrency();
  const initialPackage = resolvePackageId(selectedPackage);
  const [pkg, setPkg] = useState<PackageId>(initialPackage);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [business, setBusiness] = useState(businessType ?? "");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [banner, setBanner] = useState<string | null>(null);
  const [queueReason, setQueueReason] = useState<string | null>(null);

  useEffect(() => {
    const resolved = resolvePackageId(selectedPackage);
    if (resolved !== pkg) {
      setPkg(resolved);
    }
  }, [selectedPackage, pkg]);

  useEffect(() => {
    if (businessType) setBusiness(businessType);
  }, [businessType]);

  useEffect(() => {
    if (initialName) setName(initialName);
  }, [initialName]);

  useEffect(() => {
    if (initialEmail) setEmail(initialEmail);
  }, [initialEmail]);

  useEffect(() => {
    if (initialPhone) setPhone(initialPhone);
  }, [initialPhone]);

  const extrasNote = useMemo(() => (extras.length ? extras.join(", ") : ""), [extras]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate({ name, email, phone, package: pkg });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setBanner("Please fix the highlighted fields.");
      return;
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      business: business.trim(),
      package: pkg,
      extras: extrasNote,
      enquiryWhatsAppNumbers: destinationWhatsApp,
    };

    try {
      setStatus("loading");
      setBanner(null);
      setQueueReason(null);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: ContactApiResponse = {};
      try {
        data = (await res.json()) as ContactApiResponse;
      } catch {
        data = {};
      }

      if (!res.ok || data.ok === false) {
        console.error("[contact-form] Submission failed", { status: res.status, data });
        setStatus("error");
        setBanner(data.error || "We couldn’t send that just now. Try WhatsApp, or try again in a moment.");
        return;
      }

      if (data.delivered) {
        setStatus("done");
        setErrors({});
        setBanner(null);
        return;
      }

      console.warn("[contact-form] Enquiry queued without delivery", data);
      setQueueReason(data.reason || "Email delivery is not configured on the server yet.");
      setStatus("queued");
      setErrors({});
      setBanner(null);
    } catch (err) {
      console.error("[contact-form] Network error", err);
      setStatus("error");
      setBanner("Network error — check your connection and try again, or reach us on WhatsApp.");
    }
  }

  function handleWhatsApp() {
    const nextErrors = validate({ name, email, phone, package: pkg });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setBanner("Fill in the form before opening WhatsApp.");
      return;
    }

    if (!whatsappChatNumber) {
      setBanner("WhatsApp is unavailable right now. Please submit the form instead.");
      return;
    }

    const lines = [
      `Hi SimpleSiteWorks — I'm ${name.trim()}.`,
      `Interested in the ${pkg} package.`,
      business.trim() ? `Business: ${business.trim()}.` : null,
      extrasNote ? `Extras: ${extrasNote}.` : null,
      email.trim() ? `Email: ${email.trim()}` : null,
      phone.trim() ? `Phone: ${phone.trim()}` : null,
    ].filter(Boolean);

    const phoneDigits = toWhatsAppMeNumber(whatsappChatNumber);
    window.open(
      `https://wa.me/${phoneDigits}?text=${encodeURIComponent(lines.join(" "))}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("whatsapp");
    setBanner(null);
  }

  function resetForm() {
    setStatus("idle");
    setBanner(null);
    setQueueReason(null);
    setErrors({});
  }

  if (status === "done" || status === "whatsapp" || status === "queued") {
    return (
      <div className="ssw-card max-w-lg text-center" role="status" aria-live="polite">
        <svg className="success-check" viewBox="0 0 52 52" aria-hidden>
          <circle cx="26" cy="26" r="24" />
          <path d="M14 27.5 22.2 35.2 38 17.8" />
        </svg>
        <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-white">
          {status === "whatsapp" ? "WhatsApp is ready" : status === "queued" ? "Enquiry saved" : "Enquiry sent"}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {status === "whatsapp"
            ? "Your details are prefilled in the chat. Send it when you’re ready — we’ll pick it up from there."
            : status === "queued"
              ? "We received your details, but email delivery isn’t ready yet. Try WhatsApp, or submit again shortly."
              : "Thanks — we’ll get back to you within one working day."}
        </p>
        {status === "queued" && queueReason && (
          <p className="mt-3 rounded-xl border border-amber-400/20 bg-amber-500/10 px-3.5 py-2.5 text-left text-xs text-amber-100">
            {queueReason}
          </p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button type="button" onClick={resetForm} className="btn-secondary w-full sm:w-auto">
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="ssw-card w-full max-w-lg space-y-5" noValidate>
      <p className="text-xs leading-relaxed text-zinc-500">
        Submit the form or WhatsApp us — we typically reply within one working day.
      </p>

      {status === "loading" && (
        <div
          className="flex items-center gap-3 rounded-xl border border-indigo-400/20 bg-indigo-500/10 px-4 py-3 text-sm text-indigo-100"
          role="status"
          aria-live="polite"
        >
          <span className="ssw-spinner" aria-hidden />
          <span>Sending your enquiry…</span>
        </div>
      )}

      <div>
        <label className="ssw-label" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`ssw-input ${errors.name ? "ssw-input-error" : ""}`}
          placeholder="Jane Smith"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          disabled={status === "loading"}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-rose-300" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label className="ssw-label" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) {
              setErrors((prev) => ({ ...prev, email: undefined }));
            }
          }}
          onBlur={() => {
            if (email.trim() && !isValidEmail(email)) {
              setErrors((prev) => ({
                ...prev,
                email: "Please enter a valid email address (e.g. you@business.com).",
              }));
            }
          }}
          className={`ssw-input ${errors.email ? "ssw-input-error" : ""}`}
          placeholder="you@business.com"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          disabled={status === "loading"}
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1.5 text-xs text-rose-300" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="ssw-label" htmlFor="contact-phone">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`ssw-input ${errors.phone ? "ssw-input-error" : ""}`}
            placeholder="07…"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            disabled={status === "loading"}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-rose-300" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label className="ssw-label" htmlFor="contact-business">
            Business type
          </label>
          <input
            id="contact-business"
            name="business"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className="ssw-input"
            placeholder="Café, plumber…"
            disabled={status === "loading"}
          />
        </div>
      </div>
      <div>
        <label className="ssw-label" htmlFor="contact-package">
          Package interested in
        </label>
        <select
          id="contact-package"
          name="package"
          value={pkg}
          onChange={(e) => {
            const next = e.target.value as PackageId;
            setPkg(next);
            onPackageChange?.(next);
          }}
          className={`ssw-input ${errors.package ? "ssw-input-error" : ""}`}
          aria-invalid={Boolean(errors.package)}
          disabled={status === "loading"}
        >
          {packages.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title} — {item.priceLabel} ({item.mrrLabel})
            </option>
          ))}
        </select>
        {errors.package && (
          <p className="mt-1.5 text-xs text-rose-300" role="alert">
            {errors.package}
          </p>
        )}
      </div>
      {extrasNote && (
        <p className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-2.5 text-xs text-cyan-100">
          Extras noted: {extrasNote}
        </p>
      )}
      {banner && (
        <div role="alert">
          <p className="rounded-xl border border-rose-400/20 bg-rose-500/10 px-3.5 py-2.5 text-sm text-rose-200">
            {banner}
          </p>
        </div>
      )}
      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
          aria-label="Submit contact form"
          disabled={status === "loading"}
        >
          {status === "loading" && <span className="ssw-spinner" aria-hidden />}
          <span>{status === "loading" ? "Sending..." : "Submit"}</span>
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="btn-secondary w-full sm:w-auto"
          disabled={status === "loading"}
        >
          WhatsApp
        </button>
      </div>
    </form>
  );
}
