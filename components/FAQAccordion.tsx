"use client";
import { useState } from 'react';

export default function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, idx) => (
        <div key={it.q} className="card p-4 rounded-lg">
          <button aria-expanded={open === idx} onClick={() => setOpen(open === idx ? null : idx)} className="w-full text-left flex items-center justify-between">
            <div>
              <div className={`font-medium ${open === idx ? 'text-[var(--ssw-accent-start)]' : ''}`}>{it.q}</div>
              <div className="text-sm text-zinc-500 mt-1">{open === idx ? 'Click to collapse' : 'Click to expand'}</div>
            </div>
            <div className="text-zinc-500 text-xl">{open === idx ? '−' : '+'}</div>
          </button>
          <div className={`faq-content mt-3 text-sm text-zinc-700 ${open === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-1">{it.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
