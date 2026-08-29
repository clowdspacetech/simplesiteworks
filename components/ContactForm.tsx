"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'done'|'error'>('idle');
  const [toast, setToast] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const payload = Object.fromEntries(form.entries());
    try {
      setStatus('loading');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('done');
        setToast('Thanks — we will be in touch.');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setToast('Error sending. Try again.');
      }
    } catch (err) {
      setStatus('error');
      setToast('Error sending. Try again.');
    }
    setTimeout(() => setToast(null), 4500);
  }

  return (
    <>
      <form id="contact" onSubmit={handleSubmit} className="space-y-4 max-w-lg bg-white p-6 rounded-xl shadow-sm">
        <div>
          <label className="block text-sm">Name</label>
          <input name="name" required className="w-full p-3 rounded-md border" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input name="email" type="email" required className="w-full p-3 rounded-md border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Phone</label>
            <input name="phone" className="w-full p-3 rounded-md border" />
          </div>
          <div>
            <label className="block text-sm">Business type</label>
            <input name="business" className="w-full p-3 rounded-md border" />
          </div>
        </div>
        <div>
          <label className="block text-sm">Package interested in</label>
          <select name="package" className="w-full p-3 rounded-md border">
            <option>Basic</option>
            <option>Custom</option>
            <option>Advanced</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" className="gradient-btn flex items-center gap-3" aria-label="Submit contact form">
            {status === 'loading' && <span className="ssw-spinner" aria-hidden />}
            <span>{status === 'loading' ? 'Sending...' : 'Submit'}</span>
          </button>
          <a href="https://wa.me/" className="outline-btn">WhatsApp</a>
        </div>
      </form>

      {toast && (
        <div className="ssw-toast">
          <div className="card p-3 rounded-md shadow-md">{toast}</div>
        </div>
      )}
    </>
  );
}
