"use client";
import { useState } from "react";

export default function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div key={it.q} className="rounded-2xl border border-zinc-200/60 bg-white px-5 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <button
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : idx)}
              className="flex min-h-12 w-full items-center justify-between gap-4 py-3 text-left transition-all duration-200 ease-out"
            >
              <div className={`text-[15px] font-medium tracking-tight ${isOpen ? "text-zinc-950" : "text-zinc-800"}`}>
                {it.q}
              </div>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 text-zinc-500 transition-all duration-200 ease-out ${
                  isOpen ? "rotate-45 bg-zinc-50" : ""
                }`}
              >
                +
              </span>
            </button>
            <div className={`faq-content text-sm leading-relaxed text-zinc-500 ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pb-4 pr-10">{it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
