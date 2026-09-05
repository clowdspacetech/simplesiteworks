"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle } from "lucide-react";
import {
  BUSINESS_TYPES,
  DEMOS,
  STRATEGY_GOALS,
  suggestPackageFromGoals,
  type BusinessTypeId,
  type PackageId,
  type StrategyGoalId,
} from "../lib/site";
import { useCurrency } from "./CurrencyProvider";
import CurrencySelector from "./CurrencySelector";
import Image from "next/image";
import Link from "next/link";

const STEPS = [
  { id: 1, label: "Industry" },
  { id: 2, label: "Goals" },
  { id: 3, label: "Contact" },
] as const;

const INDUSTRY_SECTORS = [
  {
    id: "contracting",
    label: "Contracting",
    summary: "Trades, roofing, and emergency home services",
    nicheIds: ["trades", "contracting"] as BusinessTypeId[],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    summary: "Restaurants, cafés, and artisan bakeries",
    nicheIds: ["shop", "bakery"] as BusinessTypeId[],
  },
  {
    id: "wellness",
    label: "Wellness",
    summary: "Studios, spas, and lifestyle brands",
    nicheIds: ["wellness", "yoga"] as BusinessTypeId[],
  },
  {
    id: "professional",
    label: "Professional Services",
    summary: "Advisory, finance, and high-trust practices",
    nicheIds: ["professional"] as BusinessTypeId[],
  },
  {
    id: "retail",
    label: "Luxury Retail",
    summary: "Boutique floristry and sensory retail",
    nicheIds: ["florist"] as BusinessTypeId[],
  },
] as const;

export default function PackageCustomizer({
  selectedPackage,
  businessType,
  extras,
  onPackageChange,
  onBusinessChange,
  onExtrasChange,
  onContinue,
  onContactPrefill,
}: {
  selectedPackage: PackageId;
  businessType: BusinessTypeId | "";
  extras: string[];
  onPackageChange: (pkg: PackageId) => void;
  onBusinessChange: (business: BusinessTypeId) => void;
  onExtrasChange: (extras: string[]) => void;
  onContinue: () => void;
  onContactPrefill?: (values: { email: string; phone: string; name: string }) => void;
}) {
  const { packages, formatTier } = useCurrency();
  const [step, setStep] = useState(1);
  const [goals, setGoals] = useState<StrategyGoalId[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  const selectedSector =
    INDUSTRY_SECTORS.find((sector) => businessType && sector.nicheIds.includes(businessType)) ?? null;

  const previewSector =
    INDUSTRY_SECTORS.find((sector) => sector.id === hoveredSector) ??
    selectedSector ??
    INDUSTRY_SECTORS[0];

  const previewNicheId =
    (businessType && previewSector.nicheIds.includes(businessType) ? businessType : null) ??
    previewSector.nicheIds[0];

  const previewNiche = BUSINESS_TYPES.find((item) => item.id === previewNicheId) ?? BUSINESS_TYPES[0];
  const previewDemo = DEMOS.find((demo) => demo.id === previewNiche.demoId);

  const suggested = useMemo(() => suggestPackageFromGoals(goals), [goals]);
  const estimateId = goals.length ? suggested : selectedPackage;
  const estimate = packages.find((item) => item.id === estimateId) ?? packages[1];
  const pricing = formatTier(estimate.id);
  const businessLabel = BUSINESS_TYPES.find((item) => item.id === businessType)?.label;

  useEffect(() => {
    if (goals.length && suggested !== selectedPackage) {
      onPackageChange(suggested);
    }
  }, [goals, suggested, selectedPackage, onPackageChange]);

  useEffect(() => {
    const mapped = goals
      .map((goalId) => STRATEGY_GOALS.find((item) => item.id === goalId)?.label)
      .filter(Boolean) as string[];
    onExtrasChange(mapped);
  }, [goals, onExtrasChange]);

  function toggleGoal(id: StrategyGoalId) {
    setGoals((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function selectSector(sectorId: string) {
    const sector = INDUSTRY_SECTORS.find((item) => item.id === sectorId);
    if (!sector) return;
    const preferred =
      (businessType && sector.nicheIds.includes(businessType) ? businessType : null) ?? sector.nicheIds[0];
    onBusinessChange(preferred);
  }

  function goNext() {
    if (step === 1 && !businessType) return;
    if (step === 2 && !goals.length) return;
    if (step < 3) {
      setStep((current) => current + 1);
      return;
    }

    onContactPrefill?.({ name: name.trim(), email: email.trim(), phone: whatsapp.trim() });
    onContinue();
  }

  function goBack() {
    setStep((current) => Math.max(1, current - 1));
  }

  const canContinue =
    (step === 1 && Boolean(businessType)) ||
    (step === 2 && goals.length > 0) ||
    (step === 3 && name.trim().length >= 2 && email.trim().includes("@"));

  return (
    <div className="ssw-card">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-indigo-300">Strategy brief builder</p>
          <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white">
            Configure your growth package in three steps
          </h3>
        </div>
        <CurrencySelector className="shrink-0" />
      </div>

      <div className="mt-8">
        <div className="relative mb-8">
          <div className="absolute left-0 right-0 top-5 h-px bg-white/10" />
          <ol className="relative grid grid-cols-3 gap-2">
            {STEPS.map((item) => {
              const active = step === item.id;
              const done = step > item.id;
              return (
                <li key={item.id} className="flex flex-col items-center text-center">
                  <span
                    className={`relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-500 ease-premium ${
                      active || done
                        ? "border-indigo-400/50 bg-indigo-500/20 text-white shadow-[0_0_24px_rgba(99,102,241,0.25)]"
                        : "border-white/10 bg-zinc-950 text-zinc-500"
                    }`}
                  >
                    {done ? <Check className="h-4 w-4 text-cyan-300" /> : item.id}
                  </span>
                  <span className={`mt-2 text-xs font-medium ${active ? "text-white" : "text-zinc-500"}`}>
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-w-0">
            {step === 1 && (
              <div className="space-y-4 transition-all duration-500 ease-premium">
                <p className="text-sm font-semibold text-zinc-200">1. Choose your industry archetype</p>
                <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
                    {INDUSTRY_SECTORS.map((sector) => {
                      const selected = previewSector.id === sector.id;
                      return (
                        <button
                          key={sector.id}
                          type="button"
                          onMouseEnter={() => setHoveredSector(sector.id)}
                          onFocus={() => setHoveredSector(sector.id)}
                          onClick={() => selectSector(sector.id)}
                          className={`flex w-full flex-col rounded-xl px-4 py-3.5 text-left transition-all duration-300 ${
                            selected
                              ? "bg-cyan-400/10 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.35)]"
                              : "hover:bg-white/5"
                          }`}
                        >
                          <span className={`text-sm font-semibold tracking-tight ${selected ? "text-white" : "text-zinc-300"}`}>
                            {sector.label}
                          </span>
                          <span className="mt-1 text-xs leading-relaxed text-zinc-500">{sector.summary}</span>
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={previewNiche.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {previewDemo && (
                          <Image
                            src={previewDemo.screenshot || previewDemo.src}
                            alt={`${previewNiche.archetype} blueprint preview`}
                            fill
                            className="object-cover"
                            sizes="420px"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                        <p className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white uppercase backdrop-blur-md">
                          {previewSector.label}
                        </p>
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-medium tracking-wider text-indigo-300 uppercase">
                          {previewNiche.label}
                        </p>
                        <h4 className="mt-1 font-display text-xl font-extrabold tracking-tight text-white">
                          {previewNiche.archetype}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                          {previewDemo?.summary ?? previewNiche.hint}
                        </p>
                        {previewSector.nicheIds.length > 1 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {previewSector.nicheIds.map((nicheId) => {
                              const niche = BUSINESS_TYPES.find((item) => item.id === nicheId);
                              if (!niche) return null;
                              const active = niche.id === previewNicheId;
                              return (
                                <button
                                  key={niche.id}
                                  type="button"
                                  onClick={() => onBusinessChange(niche.id)}
                                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                                    active
                                      ? "bg-indigo-500/30 text-indigo-100"
                                      : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200"
                                  }`}
                                >
                                  {niche.label}
                                </button>
                              );
                            })}
                          </div>
                        )}
                        <ul className="mt-4 space-y-2">
                          {(previewDemo?.features ?? [previewNiche.hint]).slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-xs text-zinc-400">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {previewDemo && (
                          <Link
                            href={previewDemo.href}
                            className="mt-5 inline-flex text-sm font-semibold text-indigo-300 transition hover:text-indigo-200"
                          >
                            Preview live blueprint →
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 transition-all duration-500 ease-premium">
                <p className="text-sm font-semibold text-zinc-200">2. What should this site achieve?</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {STRATEGY_GOALS.map((item) => {
                    const active = goals.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleGoal(item.id)}
                        className={`min-h-12 rounded-2xl border p-4 text-left backdrop-blur-lg transition-all duration-500 ease-premium hover:-translate-y-0.5 active:scale-[0.98] ${
                          active
                            ? "border-indigo-400/40 bg-indigo-500/15 shadow-[0_0_28px_rgba(139,92,246,0.22)]"
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
            )}

            {step === 3 && (
              <div className="space-y-4 transition-all duration-500 ease-premium">
                <p className="text-sm font-semibold text-zinc-200">3. Fast contact details</p>
                <div>
                  <label className="ssw-label" htmlFor="brief-name">
                    Name
                  </label>
                  <input
                    id="brief-name"
                    className="ssw-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="ssw-label" htmlFor="brief-email">
                    <span className="inline-flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-indigo-300" />
                      Email
                    </span>
                  </label>
                  <input
                    id="brief-email"
                    type="email"
                    className="ssw-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.com"
                  />
                </div>
                <div>
                  <label className="ssw-label" htmlFor="brief-whatsapp">
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="h-3.5 w-3.5 text-cyan-300" />
                      WhatsApp number
                    </span>
                  </label>
                  <input
                    id="brief-whatsapp"
                    className="ssw-input"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+44 7700 900123"
                  />
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 1}
                className="btn-ghost disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              <button type="button" onClick={goNext} disabled={!canContinue} className="btn-primary">
                {step === 3 ? "Continue to enquiry" : "Next step"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-indigo-500/10 to-white/5 p-5 backdrop-blur-lg">
            <p className="text-xs font-medium uppercase tracking-wider text-indigo-300">Estimated growth package</p>
            <h4 className="mt-3 font-display text-xl font-extrabold tracking-tight text-white">{estimate.title}</h4>
            <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">{estimate.subtitle}</p>
            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-xs text-zinc-500">Setup</p>
              <p className="font-display text-3xl font-extrabold text-white transition-all duration-500 ease-premium">
                {pricing.price}
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                then <span className="font-semibold text-zinc-200">{pricing.mrrLabel}</span>
              </p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400">
              {businessLabel ? `Tuned for ${businessLabel.toLowerCase()} businesses` : "Pick an industry to personalise"}
              {goals.length ? ` · Goals: ${goals.length} selected` : "."}
            </p>
            <ul className="mt-4 space-y-2">
              {estimate.bullets.slice(0, 3).map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-xs text-zinc-400">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
