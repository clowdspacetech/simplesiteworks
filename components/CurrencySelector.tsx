"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CURRENCY_META, CURRENCY_OPTIONS, type CurrencyCode } from "../lib/currency";
import { useCurrency } from "./CurrencyProvider";

export default function CurrencySelector({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  if (compact) {
    return (
      <div ref={rootRef} className={`relative ${className}`}>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-xs font-medium text-zinc-200 transition-all duration-500 ease-premium hover:bg-white/10"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label="Select display currency"
        >
          <span>{CURRENCY_META[currency].label}</span>
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <ul
            role="listbox"
            className="absolute right-0 z-50 mt-2 min-w-[9rem] overflow-hidden rounded-xl border border-white/10 bg-zinc-950/95 p-1 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            {CURRENCY_OPTIONS.map((code) => (
              <CurrencyOption
                key={code}
                code={code}
                active={code === currency}
                onSelect={() => {
                  setCurrency(code);
                  setOpen(false);
                }}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Prices in</span>
      <div
        role="radiogroup"
        aria-label="Display currency"
        className="inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-lg"
      >
        {CURRENCY_OPTIONS.map((code) => {
          const active = code === currency;
          return (
            <button
              key={code}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setCurrency(code)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-500 ease-premium ${
                active
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                  : "text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {CURRENCY_META[code].label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CurrencyOption({
  code,
  active,
  onSelect,
}: {
  code: CurrencyCode;
  active: boolean;
  onSelect: () => void;
}) {
  const meta = CURRENCY_META[code];
  return (
    <li role="option" aria-selected={active}>
      <button
        type="button"
        onClick={onSelect}
        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors duration-300 ${
          active ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"
        }`}
      >
        <span>
          {meta.label} ({meta.prefix || meta.symbol})
        </span>
        {active && <Check className="h-3.5 w-3.5 text-cyan-300" />}
      </button>
    </li>
  );
}
