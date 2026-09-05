"use client";

import { Check } from "lucide-react";

export default function PricingCard({
  title,
  price,
  mrrLabel,
  bullets,
  packageId,
  selected = false,
  onChoose,
}: {
  title: string;
  price: string;
  mrrLabel: string;
  bullets: string[];
  packageId: string;
  selected?: boolean;
  onChoose?: (id: string) => void;
}) {
  return (
    <div className={`ssw-card ssw-card-hover text-center ${selected ? "ssw-card-selected" : ""}`}>
      <div className="text-sm font-medium text-zinc-400">{title}</div>
      <div className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{price}</div>
      <p className="mt-2 text-xs text-zinc-500">{mrrLabel}</p>
      <ul className="mt-6 space-y-2 text-left text-sm leading-relaxed text-zinc-400">
        {bullets.slice(0, 3).map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/15">
              <Check className="h-3 w-3 text-cyan-300" strokeWidth={3} />
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        {onChoose ? (
          <button type="button" onClick={() => onChoose(packageId)} className="btn-primary w-full">
            {packageId === "Automation"
              ? "Choose Automation"
              : packageId === "Growth"
                ? "Choose Growth"
                : "Choose Starter"}
          </button>
        ) : (
          <a href={`/contact?package=${encodeURIComponent(packageId)}`} className="btn-primary w-full">
            {packageId === "Automation"
              ? "Choose Automation"
              : packageId === "Growth"
                ? "Choose Growth"
                : "Choose Starter"}
          </a>
        )}
      </div>
    </div>
  );
}
