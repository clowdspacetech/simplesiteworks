"use client";
import { useState } from "react";

export default function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={it.q}
            className={`rounded-2xl border bg-white/5 px-5 py-2 backdrop-blur-xl transition-all duration-500 ease-premium ${
              isOpen ? "border-purple-400/30 shadow-[0_0_32px_rgba(139,92,246,0.16)]" : "border-white/10"
            }`}
          >
            <button
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : idx)}
              className="flex min-h-12 w-full items-center justify-between gap-4 py-3 text-left transition-all duration-500 ease-premium active:scale-[0.99]"
            >
              <div className={`text-[15px] font-semibold tracking-tight ${isOpen ? "text-white" : "text-zinc-200"}`}>
                {it.q}
              </div>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-zinc-400 transition-all duration-500 ease-premium ${
                  isOpen ? "rotate-45 border-cyan-400/30 bg-cyan-400/10 text-cyan-200" : "border-white/10"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-premium ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-4 pr-10 text-sm leading-relaxed text-zinc-400">{it.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
