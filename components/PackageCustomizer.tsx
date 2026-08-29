"use client";

import { BUSINESS_TYPES, EXTRAS, PACKAGES, type BusinessTypeId, type PackageId } from "../lib/site";

export default function PackageCustomizer({
  selectedPackage,
  businessType,
  extras,
  onPackageChange,
  onBusinessChange,
  onExtrasChange,
  onContinue,
}: {
  selectedPackage: PackageId;
  businessType: BusinessTypeId | "";
  extras: string[];
  onPackageChange: (pkg: PackageId) => void;
  onBusinessChange: (business: BusinessTypeId) => void;
  onExtrasChange: (extras: string[]) => void;
  onContinue: () => void;
}) {
  const selected = PACKAGES.find((item) => item.id === selectedPackage);
  const businessLabel = BUSINESS_TYPES.find((item) => item.id === businessType)?.label;

  function toggleExtra(id: string) {
    onExtrasChange(extras.includes(id) ? extras.filter((item) => item !== id) : [...extras, id]);
  }

  return (
    <div className="ssw-card">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-indigo-300">Package customizer</p>
          <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white">
            Build your brief in three steps
          </h3>
        </div>
        <p className="text-sm text-zinc-400">Your enquiry form updates as you pick.</p>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-sm font-semibold text-zinc-200">1. Choose a package</p>
        <div className="grid gap-3 md:grid-cols-3">
          {PACKAGES.map((item) => {
            const active = item.id === selectedPackage;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onPackageChange(item.id)}
                className={`rounded-2xl border p-4 text-left backdrop-blur-lg transition-all duration-500 ease-premium hover:-translate-y-0.5 active:scale-[0.98] ${
                  active
                    ? "border-purple-400/40 bg-indigo-500/15 shadow-[0_0_28px_rgba(139,92,246,0.22)]"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-extrabold tracking-tight text-white">{item.title}</span>
                  <span className="text-xs text-zinc-400">{item.priceLabel}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.summary}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-sm font-semibold text-zinc-200">2. What do you do?</p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {BUSINESS_TYPES.map((item) => {
            const active = item.id === businessType;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onBusinessChange(item.id)}
                className={`rounded-2xl border p-4 text-left backdrop-blur-lg transition-all duration-500 ease-premium hover:-translate-y-0.5 active:scale-[0.98] ${
                  active
                    ? "border-cyan-400/35 bg-cyan-400/10 shadow-[0_0_24px_rgba(34,211,238,0.16)]"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <span className="block text-sm font-semibold text-white">{item.label}</span>
                <span className="mt-1 block text-xs text-zinc-400">{item.hint}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-sm font-semibold text-zinc-200">3. Nice extras</p>
        <div className="flex flex-wrap gap-3">
          {EXTRAS.map((item) => {
            const active = extras.includes(item.label);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleExtra(item.label)}
                className={`rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-lg transition-all duration-500 ease-premium hover:-translate-y-0.5 active:scale-[0.97] ${
                  active
                    ? "border-indigo-400/40 bg-indigo-500/20 text-white"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20"
                }`}
              >
                {active ? "✓ " : ""}
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-400">
          <span className="font-semibold text-white">{selected?.title}</span>
          {businessLabel ? ` for a ${businessLabel.toLowerCase()} business` : " — pick a business type next"}
          {extras.length ? `. Extras: ${extras.join(", ")}.` : "."}
        </p>
        <button type="button" onClick={onContinue} className="btn-primary shrink-0">
          Continue to enquiry
        </button>
      </div>
    </div>
  );
}
