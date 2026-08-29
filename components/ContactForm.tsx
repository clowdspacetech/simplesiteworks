"use client";

import { useEffect, useMemo, useState } from "react";
import { PACKAGES, isPackageId, type PackageId } from "../lib/site";

type Status = "idle" | "loading" | "done" | "whatsapp" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  package?: string;
};

function validate(values: { name: string; email: string; phone: string; package: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
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
}: {
  selectedPackage?: string;
  businessType?: string;
  extras?: string[];
  onPackageChange?: (pkg: PackageId) => void;
}) {
  const initialPackage = isPackageId(selectedPackage) ? selectedPackage : "Custom";
  const [pkg, setPkg] = useState<PackageId>(initialPackage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState(businessType ?? "");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [banner, setBanner] = useState<string | null>(null);

  useEffect(() => {
    if (isPackageId(selectedPackage) && selectedPackage !== pkg) {
      setPkg(selectedPackage);
    }
  }, [selectedPackage, pkg]);

  useEffect(() => {
    if (businessType) setBusiness(businessType);
  }, [businessType]);

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
    };

    try {
      setStatus("loading");
      setBanner(null);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("done");
        setErrors({});
      } else {
        setStatus("error");
        setBanner("We couldn’t send that just now. Try WhatsApp or try again.");
      }
    } catch {
      setStatus("error");
      setBanner("We couldn’t send that just now. Try WhatsApp or try again.");
    }
  }

  function handleWhatsApp() {
    const nextErrors = validate({ name, email, phone, package: pkg });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setBanner("Fill in the form before opening WhatsApp.");
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

    window.open(`https://wa.me/?text=${encodeURIComponent(lines.join(" "))}`, "_blank", "noopener,noreferrer");
    setStatus("whatsapp");
    setBanner(null);
  }

  function resetForm() {
    setStatus("idle");
    setBanner(null);
    setErrors({});
  }

  if (status === "done" || status === "whatsapp") {
    return (
      <div className="ssw-card max-w-lg text-center">
        <svg className="success-check" viewBox="0 0 52 52" aria-hidden>
          <circle cx="26" cy="26" r="24" />
          <path d="M14 27.5 22.2 35.2 38 17.8" />
        </svg>
        <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-white">
          {status === "whatsapp" ? "WhatsApp is ready" : "Enquiry sent"}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {status === "whatsapp"
            ? "Your details are in the message. Send it when you’re ready — we’ll pick it up from there."
            : "Thanks — we’ll reply within one working day with a clear next step."}
        </p>
        <button type="button" onClick={resetForm} className="btn-secondary mt-8">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="ssw-card max-w-lg space-y-5" noValidate>
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
        />
        {errors.name && <p className="mt-1.5 text-xs text-rose-300">{errors.name}</p>}
      </div>
      <div>
        <label className="ssw-label" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`ssw-input ${errors.email ? "ssw-input-error" : ""}`}
          placeholder="you@business.com"
          autoComplete="email"
        />
        {errors.email && <p className="mt-1.5 text-xs text-rose-300">{errors.email}</p>}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
          />
          {errors.phone && <p className="mt-1.5 text-xs text-rose-300">{errors.phone}</p>}
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
            const next = e.target.value;
            if (isPackageId(next)) {
              setPkg(next);
              onPackageChange?.(next);
            }
          }}
          className={`ssw-input ${errors.package ? "ssw-input-error" : ""}`}
        >
          {PACKAGES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title} — {item.priceLabel}
            </option>
          ))}
        </select>
        {errors.package && <p className="mt-1.5 text-xs text-rose-300">{errors.package}</p>}
      </div>
      {extrasNote && (
        <p className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-2.5 text-xs text-cyan-100">
          Extras noted: {extrasNote}
        </p>
      )}
      {banner && (
        <p className="rounded-xl border border-rose-400/20 bg-rose-500/10 px-3.5 py-2.5 text-sm text-rose-200">
          {banner}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button type="submit" className="btn-primary" aria-label="Submit contact form" disabled={status === "loading"}>
          {status === "loading" && <span className="ssw-spinner" aria-hidden />}
          <span>{status === "loading" ? "Sending..." : "Submit"}</span>
        </button>
        <button type="button" onClick={handleWhatsApp} className="btn-secondary">
          WhatsApp
        </button>
      </div>
    </form>
  );
}
