"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import PackageCard from "./PackageCard";
import DemoCard from "./DemoCard";
import PricingCard from "./PricingCard";
import MobileAppCard from "./MobileAppCard";
import FAQAccordion from "./FAQAccordion";
import ContactForm from "./ContactForm";
import DemoModal from "./DemoModal";
import PackageCustomizer from "./PackageCustomizer";
import HeroVisual from "./HeroVisual";
import Reveal from "./Reveal";
import {
  APP_OFFERINGS,
  BUSINESS_TYPES,
  DEMOS,
  ENQUIRY_EMAIL,
  FAQ_ITEMS,
  PACKAGES,
  type BusinessTypeId,
  type DemoId,
  type PackageId,
} from "../lib/site";
import { scrollToSection } from "../lib/scroll";

export default function HomeExperience() {
  const [selectedPackage, setSelectedPackage] = useState<PackageId>("Custom");
  const [businessType, setBusinessType] = useState<BusinessTypeId | "">("");
  const [extras, setExtras] = useState<string[]>([]);
  const [demoId, setDemoId] = useState<DemoId | null>(null);

  const choosePackage = useCallback((title: string, target: "packages" | "pricing" | "contact" = "contact") => {
    if (title === "Basic" || title === "Custom" || title === "Advanced") {
      setSelectedPackage(title);
    }
    scrollToSection(target);
  }, []);

  const businessLabel = BUSINESS_TYPES.find((item) => item.id === businessType)?.label ?? "";

  return (
    <>
      <section className="relative max-w-full overflow-x-clip">
        <div className="ssw-container grid min-w-0 items-center gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-28">
          <Reveal className="min-w-0 space-y-7">
            <span className="ssw-kicker">Built for local businesses</span>
            <h1 className="ssw-h1">
              Simple websites
              <br className="hidden md:block" /> for small local businesses
            </h1>
            <p className="ssw-lead">
              Clear pricing. Fast delivery. No technical stress — websites that help customers find and contact you.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" className="btn-primary" onClick={() => choosePackage("Custom", "packages")}>
                View packages
              </button>
              <button type="button" className="btn-secondary" onClick={() => scrollToSection("contact")}>
                Contact us
              </button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-zinc-400">
              <span>From £299</span>
              <span>Typical delivery 2–3 weeks</span>
              <span>No technical knowledge needed</span>
            </div>
          </Reveal>

          <Reveal delay={2} className="min-w-0">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <section className="max-w-full overflow-x-clip">
        <div className="ssw-container ssw-grid grid gap-6 py-12 md:grid-cols-3 md:py-16">
          {[
            { title: "Clear pricing", body: "Packages from £299. No surprise invoices." },
            { title: "Fast delivery", body: "Most sites live in two to three weeks." },
            { title: "No tech stress", body: "We handle setup, hosting, and training." },
          ].map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) as 0 | 1 | 2 | 3}>
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
          <Reveal className="max-w-2xl">
            <h2 className="ssw-h2">Packages</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              Choose the right package for your business — straightforward, affordable, and tailored.
            </p>
          </Reveal>
          <div className="ssw-grid mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PACKAGES.map((item) => (
              <PackageCard
                key={item.id}
                title={item.title}
                price={item.priceLabel}
                bullets={item.bullets}
                featured={item.featured}
                selected={selectedPackage === item.id}
                onChoose={(title) => choosePackage(title, "contact")}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="ssw-section pt-0">
        <div className="ssw-container">
          <Reveal className="max-w-2xl">
            <h2 className="ssw-h2">Sample demo websites</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              See the kind of site we build — then pick a package that matches your trade.
            </p>
          </Reveal>
          <div className="ssw-grid mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {DEMOS.map((demo) => (
              <DemoCard
                key={demo.id}
                title={demo.title}
                desc={demo.desc}
                href={demo.href}
                src={demo.src}
                onView={() => setDemoId(demo.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="ssw-section pt-0">
        <div className="ssw-container">
          <Reveal className="max-w-2xl">
            <h2 className="ssw-h2">Pricing explained simply</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              One number. What’s included is written in plain English.
            </p>
          </Reveal>
          <div className="ssw-grid mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PACKAGES.map((item) => (
              <PricingCard
                key={item.id}
                title={item.title}
                price={item.price}
                selected={selectedPackage === item.id}
                onChoose={(title) => choosePackage(title, "contact")}
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

      <section className="ssw-section pt-0">
        <div className="ssw-container">
          <Reveal className="max-w-2xl">
            <h2 className="ssw-h2">Mobile app development</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              Booking, delivery, loyalty and customer apps built with React Native / Expo.
            </p>
          </Reveal>
          <div className="mt-10 grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <Reveal delay={1} className="min-w-0">
              <div className="ssw-card overflow-hidden p-0">
                <Image
                  src="/illustrations/apps-pipeline.svg"
                  alt="Animated-style delivery pipeline and mobile app preview"
                  width={480}
                  height={280}
                  className="w-full max-w-full"
                />
              </div>
            </Reveal>
            <div className="ssw-grid grid grid-cols-1 gap-5 sm:grid-cols-2">
              {APP_OFFERINGS.map((item) => (
                <MobileAppCard key={item.title} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="ssw-section">
        <div className="ssw-container grid min-w-0 grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="min-w-0">
            <h2 className="ssw-h2">FAQ</h2>
            <p className="mt-3 mb-8 text-base leading-relaxed text-zinc-400">
              Straight answers before you get in touch.
            </p>
            <FAQAccordion items={FAQ_ITEMS} />
          </div>

          <div className="min-w-0">
            <h2 className="ssw-h2">Contact</h2>
            <p className="mt-3 mb-8 text-base leading-relaxed text-zinc-400">
              Tell us about the business. We’ll recommend a package.
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
