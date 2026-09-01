"use client";

import { useCallback, useState } from "react";
import PackageCard from "./PackageCard";
import DemoShowcaseCard from "./DemoShowcaseCard";
import PricingCard from "./PricingCard";
import FAQAccordion from "./FAQAccordion";
import ContactForm from "./ContactForm";
import DemoModal from "./DemoModal";
import PackageCustomizer from "./PackageCustomizer";
import HeroVisual from "./HeroVisual";
import Reveal from "./Reveal";
import TrustStats from "./TrustStats";
import CurrencySelector from "./CurrencySelector";
import { useCurrency } from "./CurrencyProvider";
import {
  BUSINESS_TYPES,
  DONE_FOR_YOU,
  ENQUIRY_EMAIL,
  FAQ_ITEMS,
  type BusinessTypeId,
  type DemoId,
  type PackageId,
} from "../lib/site";
import { scrollToSection } from "../lib/scroll";

const DEMO_IDS: DemoId[] = ["tradesman", "shop", "professional"];

export default function HomeExperience() {
  const { packages, fromPriceLabel } = useCurrency();
  const [selectedPackage, setSelectedPackage] = useState<PackageId>("Growth");
  const [businessType, setBusinessType] = useState<BusinessTypeId | "">("");
  const [extras, setExtras] = useState<string[]>([]);
  const [demoId, setDemoId] = useState<DemoId | null>(null);

  const choosePackage = useCallback((id: string, target: "packages" | "pricing" | "contact" = "contact") => {
    if (id === "Starter" || id === "Growth" || id === "Automation") {
      setSelectedPackage(id);
    }
    scrollToSection(target);
  }, []);

  const businessLabel = BUSINESS_TYPES.find((item) => item.id === businessType)?.label ?? "";

  return (
    <>
      <section className="relative max-w-full overflow-x-clip">
        <div className="ssw-container grid min-w-0 items-center gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-28">
          <Reveal className="min-w-0 space-y-7">
            <span className="ssw-kicker">Premium local web agency</span>
            <h1 className="ssw-h1">
              Websites that convert
              <br className="hidden md:block" /> local search into revenue
            </h1>
            <p className="ssw-lead">
              SimpleSiteWorks builds high-performance digital storefronts for local businesses worldwide — engineered for enquiries, automation, and measurable ROI.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" className="btn-primary" onClick={() => choosePackage("Growth", "packages")}>
                View packages
              </button>
              <button type="button" className="btn-secondary" onClick={() => scrollToSection("contact")}>
                Book a strategy call
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-zinc-400">
              <span>From {fromPriceLabel}</span>
              <span>Global pricing · 6 currencies</span>
              <span>Launch in 2–3 weeks</span>
            </div>
          </Reveal>

          <Reveal delay={2} className="min-w-0">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <TrustStats />

      <section className="max-w-full overflow-x-clip">
        <div className="ssw-container ssw-grid grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 md:py-16">
          {[
            { title: "Conversion-first design", body: "Layouts proven to double enquiry rates versus off-the-shelf templates." },
            { title: "Global, localized pricing", body: "Transparent tiers in GBP, USD, EUR, INR, AUD, and CAD — no surprise invoices." },
            { title: "Done-for-you launch", body: "We handle copy, imagery, hosting, and go-live so you stay focused on clients." },
            { title: DONE_FOR_YOU.title, body: DONE_FOR_YOU.desc },
          ].map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
              <div className="ssw-card ssw-card-hover h-full">
                <h3 className="text-base font-extrabold tracking-tight text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="packages" className="ssw-section">
        <div className="ssw-container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal className="max-w-2xl">
              <h2 className="ssw-h2">Investment tiers</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-400">
                Premium packages priced for purchasing power in your market — plus transparent monthly maintenance.
              </p>
            </Reveal>
            <CurrencySelector className="shrink-0" />
          </div>
          <div className="ssw-grid mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {packages.map((item) => (
              <PackageCard
                key={item.id}
                packageId={item.id}
                title={item.title}
                price={item.price}
                priceLabel={item.priceLabel}
                mrrLabel={item.mrrLabel}
                bullets={item.bullets}
                featured={item.featured}
                selected={selectedPackage === item.id}
                onChoose={(id) => choosePackage(id, "contact")}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="ssw-section pt-0">
        <div className="ssw-container">
          <Reveal className="max-w-2xl">
            <h2 className="ssw-h2">Industry demo showcases</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              Purpose-built experiences for high-intent local verticals — each engineered for conversion, not decoration.
            </p>
          </Reveal>
          <div className="ssw-grid mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {DEMO_IDS.map((id) => (
              <DemoShowcaseCard key={id} demoId={id} onView={() => setDemoId(id)} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="ssw-section pt-0">
        <div className="ssw-container">
          <Reveal className="max-w-2xl">
            <h2 className="ssw-h2">Pricing at a glance</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              One-time build investment plus a clear monthly maintenance line — written in plain language.
            </p>
          </Reveal>
          <div className="ssw-grid mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {packages.map((item) => (
              <PricingCard
                key={item.id}
                packageId={item.id}
                title={item.title}
                price={item.price}
                mrrLabel={item.mrrLabel}
                bullets={item.bullets}
                selected={selectedPackage === item.id}
                onChoose={(id) => choosePackage(id, "contact")}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="ssw-section pt-0">
        <div className="ssw-container">
          <PackageCustomizer
            selectedPackage={selectedPackage}
            businessType={businessType}
            extras={extras}
            onPackageChange={setSelectedPackage}
            onBusinessChange={setBusinessType}
            onExtrasChange={setExtras}
            onContinue={() => scrollToSection("contact")}
          />
        </div>
      </section>

      <section id="contact" className="ssw-section">
        <div className="ssw-container grid min-w-0 grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="min-w-0">
            <h2 className="ssw-h2">FAQ</h2>
            <p className="mt-3 mb-8 text-base leading-relaxed text-zinc-400">
              Straight answers before you book your strategy call.
            </p>
            <FAQAccordion items={FAQ_ITEMS} />
          </div>

          <div className="min-w-0">
            <h2 className="ssw-h2">Contact</h2>
            <p className="mt-3 mb-8 text-base leading-relaxed text-zinc-400">
              Tell us about your business. We&apos;ll recommend the tier that maximizes your ROI.
            </p>
            <ContactForm
              selectedPackage={selectedPackage}
              businessType={businessLabel}
              extras={extras}
              onPackageChange={setSelectedPackage}
              enquiryEmail={ENQUIRY_EMAIL}
            />
          </div>
        </div>
      </section>

      <DemoModal demoId={demoId} onClose={() => setDemoId(null)} />
    </>
  );
}
