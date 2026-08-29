"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [toast, setToast] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const payload = Object.fromEntries(form.entries());
    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("done");
        setToast("Thanks — we will be in touch.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setToast("Error sending. Try again.");
      }
    } catch {
      setStatus("error");
      setToast("Error sending. Try again.");
    }
    setTimeout(() => setToast(null), 4500);
  }

  return (
    <>
      <form
        id="contact"
        onSubmit={handleSubmit}
        className="ssw-card max-w-lg space-y-5"
      >
        <div>
          <label className="ssw-label">Name</label>
          <input name="name" required className="ssw-input" placeholder="Jane Smith" />
        </div>
        <div>
          <label className="ssw-label">Email</label>
          <input name="email" type="email" required className="ssw-input" placeholder="you@business.com" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="ssw-label">Phone</label>
            <input name="phone" className="ssw-input" placeholder="07…" />
          </div>
          <div>
            <label className="ssw-label">Business type</label>
            <input name="business" className="ssw-input" placeholder="Café, plumber…" />
          </div>
        </div>
        <div>
          <label className="ssw-label">Package interested in</label>
          <select name="package" className="ssw-input">
            <option>Basic</option>
            <option>Custom</option>
            <option>Advanced</option>
          </select>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button type="submit" className="btn-primary" aria-label="Submit contact form">
            {status === "loading" && <span className="ssw-spinner" aria-hidden />}
            <span>{status === "loading" ? "Sending..." : "Submit"}</span>
          </button>
          <a href="https://wa.me/" className="btn-secondary">
            WhatsApp
          </a>
        </div>
      </form>

      {toast && (
        <div className="ssw-toast">
          <div className="rounded-2xl border border-zinc-200/60 bg-white px-4 py-3 text-sm text-zinc-700 shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
            {toast}
          </div>
        </div>
      )}
    </>
  );
}
