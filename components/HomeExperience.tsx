"use client";

import { useCallback, useState } from "react";
import PricingComparisonGrid from "./PricingComparisonGrid";
import ShowcaseCarousel from "./ShowcaseCarousel";
import FAQAccordion from "./FAQAccordion";
import ContactForm from "./ContactForm";
import PackageCustomizer from "./PackageCustomizer";
import HeroVisual from "./HeroVisual";
import Reveal from "./Reveal";
import TrustStats from "./TrustStats";
import { useCurrency } from "./CurrencyProvider";
import {
  BUSINESS_TYPES,
  DONE_FOR_YOU,
  ENQUIRY_WHATSAPP_NUMBERS,
  FAQ_ITEMS,
  type BusinessTypeId,
  type PackageId,
} from "../lib/site";
import { scrollToSection } from "../lib/scroll";

export default function HomeExperience() {
  const { fromPriceLabel } = useCurrency();
  const [selectedPackage, setSelectedPackage] = useState<PackageId>("Growth");
  const [businessType, setBusinessType] = useState<BusinessTypeId | "">("");
  const [extras, setExtras] = useState<string[]>([]);
  const [prefill, setPrefill] = useState({ name: "", email: "", phone: "" });

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
        <div className="ssw-container flex min-w-0 flex-col items-center justify-between gap-10 overflow-hidden py-12 md:py-20 lg:flex-row lg:gap-12 lg:py-28">
          <Reveal className="min-w-0 w-full space-y-7 lg:max-w-xl lg:flex-1">
            <span className="ssw-kicker">Done-for-you local web design agency</span>
            <h1 className="ssw-h1">
              Build a simple website
              <br className="hidden md:block" /> without tech knowledge
            </h1>
            <p className="ssw-lead">
              SimpleSiteWorks is the stress-free way to create a business website without a technical background —
              high-performance digital storefronts, hands-free copywriting, and launch in about a week.
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
              <span>Zero coding skills needed</span>
              <span>Launch in 1–2 weeks</span>
            </div>
          </Reveal>

          <Reveal delay={2} className="min-w-0 w-full lg:flex-1">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <TrustStats />

      <section className="max-w-full overflow-x-clip" aria-label="SimpleSiteWorks search intents">
        <div className="ssw-container py-10 md:py-12">
          <Reveal className="max-w-3xl">
            <h2 className="ssw-h2">The easiest way to get a website live</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              Whether you need a simple one-page website setup, ROI-driven local landing pages, or a full done-for-you
              local business website, we handle design, copy, and media so non-tech-savvy owners can launch without stress.
              From high converting roofing websites and local bakery templates to wellness website builders and florist
              retail architecture — niche blueprints that convert.
            </p>
          </Reveal>
          <div className="sr-only">
            Keywords: build website without tech knowledge, make a website with zero coding skills, no-code web design
            for complete beginners, launch a basic business website in a week, hassle-free digital storefront maker,
            conversion-first web design agency, local web design agency with marketing automation, done for you
            contractor web design, booking systems for yoga studios, e-commerce florist website design.
          </div>
        </div>
      </section>

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
          <PricingComparisonGrid
            selectedPackage={selectedPackage}
            onChoose={(id) => choosePackage(id, "contact")}
          />
        </div>
      </section>

      <section className="ssw-section pt-0">
        <div className="ssw-container">
          <ShowcaseCarousel />
        </div>
      </section>

      <section id="pricing" className="ssw-section pt-0">
        <div className="ssw-container">
          <PackageCustomizer
            selectedPackage={selectedPackage}
            businessType={businessType}
            extras={extras}
            onPackageChange={setSelectedPackage}
            onBusinessChange={setBusinessType}
            onExtrasChange={setExtras}
            onContactPrefill={setPrefill}
            onContinue={() => scrollToSection("contact")}
          />
        </div>
      </section>

      <section id="contact" className="ssw-section">
        <div className="ssw-container grid min-w-0 grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          <div className="min-w-0 self-start">
            <h2 className="ssw-h2">FAQ</h2>
            <p className="mt-3 mb-8 text-base leading-relaxed text-zinc-400">
              Straight answers before you book your strategy call.
            </p>
            <FAQAccordion items={FAQ_ITEMS} />
          </div>

          <div className="min-w-0 self-start">
            <h2 className="ssw-h2">Contact</h2>
            <p className="mt-3 mb-8 text-base leading-relaxed text-zinc-400">
              Tell us about your business. We&apos;ll recommend the tier that maximizes your ROI.
            </p>
            <ContactForm
              selectedPackage={selectedPackage}
              businessType={businessLabel}
              extras={extras}
              onPackageChange={setSelectedPackage}
              enquiryWhatsAppNumbers={ENQUIRY_WHATSAPP_NUMBERS}
              initialName={prefill.name}
              initialEmail={prefill.email}
              initialPhone={prefill.phone}
            />
          </div>
        </div>
      </section>
    </>
  );
}
