"use client";

import { Check } from "lucide-react";
import CurrencySelector from "./CurrencySelector";
import Reveal from "./Reveal";
import { useCurrency } from "./CurrencyProvider";

export default function PricingComparisonGrid({
  selectedPackage,
  onChoose,
  showHeader = true,
}: {
  selectedPackage?: string;
  onChoose?: (id: string) => void;
  showHeader?: boolean;
}) {
  const { packages } = useCurrency();

  return (
    <div>
      {showHeader && (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-2xl">
            <h2 className="ssw-h2">Investment tiers</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              Exact setup and monthly fees across six currencies — switch anytime and watch pricing update live.
            </p>
          </Reveal>
          <CurrencySelector className="shrink-0" />
        </div>
      )}

      {!showHeader && (
        <div className="mb-8 flex justify-end">
          <CurrencySelector className="shrink-0" />
        </div>
      )}

      <div className={`ssw-grid grid grid-cols-1 items-stretch gap-6 pt-3 md:grid-cols-3 ${showHeader ? "mt-10" : ""}`}>
        {packages.map((item, index) => {
          const selected = selectedPackage === item.id;
          return (
            <Reveal key={item.id} delay={(index % 4) as 0 | 1 | 2 | 3} className="h-full">
              <article
                className={`ssw-card ssw-card-hover relative flex h-full flex-col ${selected ? "ssw-card-selected" : ""}`}
              >
                {item.featured && (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/20 bg-zinc-950 px-2.5 py-1 text-[11px] font-medium text-cyan-200 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                    Most chosen
                  </div>
                )}
                {selected && !item.featured && (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-violet-400/25 bg-zinc-950 px-2.5 py-1 text-[11px] font-medium text-violet-200 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                    Selected
                  </div>
                )}

                <div className="min-w-0">
                  <h3 className="text-lg font-extrabold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-6 border-b border-white/10 pb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-extrabold tracking-tight text-white">
                      {item.price}
                    </span>
                    <span className="text-sm text-zinc-500">setup</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">
                    then <span className="font-semibold text-zinc-200">{item.mrrLabel}</span> maintenance
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/15">
                        <Check className="h-3 w-3 text-cyan-300" strokeWidth={3} />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {onChoose ? (
                    <button
                      type="button"
                      onClick={() => onChoose(item.id)}
                      className={item.featured || selected ? "btn-primary w-full" : "btn-secondary w-full"}
                    >
                      Choose {item.title.split(" ")[0]}
                    </button>
                  ) : (
                    <a
                      href={`/contact?package=${encodeURIComponent(item.id)}`}
                      className={item.featured ? "btn-primary w-full" : "btn-secondary w-full"}
                    >
                      Choose
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
