"use client";
import { useState } from 'react';

export default function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, idx) => (
        <div key={it.q} className="card p-4">
          <button onClick={() => setOpen(open === idx ? null : idx)} className="w-full text-left flex items-center justify-between">
            <div>
              <div className="font-medium">{it.q}</div>
            </div>
            <div className="text-zinc-500">{open === idx ? '−' : '+'}</div>
          </button>
          {open === idx && <div className="mt-3 text-sm text-zinc-700">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}
