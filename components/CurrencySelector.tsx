"use client";

import { CURRENCY_META, type CurrencyCode } from "../lib/currency";
import { useCurrency } from "./CurrencyProvider";

const OPTIONS: CurrencyCode[] = ["GBP", "USD", "EUR", "INR", "AUD", "CAD"];

export default function CurrencySelector({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <label className={`inline-flex items-center gap-2 text-xs text-zinc-400 ${className}`}>
      <span className="sr-only">Display currency</span>
      <span aria-hidden>Prices in</span>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
        className="ssw-input h-10 min-h-10 w-auto rounded-lg py-0 text-xs"
        aria-label="Select display currency"
      >
        {OPTIONS.map((code) => (
          <option key={code} value={code}>
            {CURRENCY_META[code].label} ({CURRENCY_META[code].symbol})
          </option>
        ))}
      </select>
    </label>
  );
}
