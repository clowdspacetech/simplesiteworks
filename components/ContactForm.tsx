"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'done'|'error'>('idle');

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
      if (res.ok) setStatus('done'); else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form id="contact" onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div>
        <label className="block text-sm">Name</label>
        <input name="name" required className="w-full p-3 rounded-md border" />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input name="email" type="email" required className="w-full p-3 rounded-md border" />
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input name="phone" className="w-full p-3 rounded-md border" />
      </div>
      <div>
        <label className="block text-sm">Business type</label>
        <input name="business" className="w-full p-3 rounded-md border" />
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
        <button type="submit" className="gradient-btn">Submit</button>
        <a href="https://wa.me/" className="outline-btn">WhatsApp</a>
        {status === 'loading' && <div className="text-sm text-zinc-500">Sending...</div>}
        {status === 'done' && <div className="text-sm text-green-600">Thanks — we will be in touch.</div>}
        {status === 'error' && <div className="text-sm text-red-600">Error sending. Try again.</div>}
      </div>
    </form>
  );
}
