"use client";

import { useCallback, useState } from "react";
import PackageCard from "./PackageCard";
import DemoCard from "./DemoCard";
import PricingCard from "./PricingCard";
import MobileAppCard from "./MobileAppCard";
import FAQAccordion from "./FAQAccordion";
import ContactForm from "./ContactForm";
import DemoModal from "./DemoModal";
import PackageCustomizer from "./PackageCustomizer";
import { APP_OFFERINGS, BUSINESS_TYPES, DEMOS, FAQ_ITEMS, PACKAGES, type BusinessTypeId, type DemoId, type PackageId } from "../lib/site";
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
      <section className="relative overflow-hidden">
        <div className="ssw-container grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div className="space-y-7">
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
          </div>

          <div className="ssw-card p-0">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/80" />
              <span className="ml-3 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-400">
                yoursite.co.uk
              </span>
            </div>
            <div className="space-y-5 p-6 md:p-8">
              <div className="text-xs font-medium uppercase tracking-wider text-indigo-300">Local & trusted</div>
              <div className="font-display text-2xl font-extrabold tracking-tight text-white">Your business, found online.</div>
              <p className="text-sm leading-relaxed text-zinc-400">
                A calm, mobile-friendly site with services, photos, and a contact form — ready for customers this month.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {["Services", "Gallery", "Contact"].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center text-xs font-medium text-zinc-300 backdrop-blur-lg"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ssw-container grid gap-6 py-12 md:grid-cols-3 md:py-16">
          {[
            { title: "Clear pricing", body: "Packages from £299. No surprise invoices." },
            { title: "Fast delivery", body: "Most sites live in two to three weeks." },
            { title: "No tech stress", body: "We handle setup, hosting, and training." },
          ].map((item) => (
            <div key={item.title} className="ssw-card ssw-card-hover">
              <h3 className="text-base font-extrabold tracking-tight text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="ssw-section">
        <div className="ssw-container">
          <div className="max-w-2xl">
            <h2 className="ssw-h2">Packages</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              Choose the right package for your business — straightforward, affordable, and tailored.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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
          <div className="max-w-2xl">
            <h2 className="ssw-h2">Sample demo websites</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              See the kind of site we build — then pick a package that matches your trade.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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
          <div className="max-w-2xl">
            <h2 className="ssw-h2">Pricing explained simply</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              One number. What’s included is written in plain English.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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
          <div className="max-w-2xl">
            <h2 className="ssw-h2">Mobile app development</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              Booking, delivery, loyalty and customer apps built with React Native / Expo.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {APP_OFFERINGS.map((item) => (
              <MobileAppCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="ssw-section">
        <div className="ssw-container grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="ssw-h2">FAQ</h2>
            <p className="mt-3 mb-8 text-base leading-relaxed text-zinc-400">
              Straight answers before you get in touch.
            </p>
            <FAQAccordion items={FAQ_ITEMS} />
          </div>

          <div>
            <h2 className="ssw-h2">Contact</h2>
            <p className="mt-3 mb-8 text-base leading-relaxed text-zinc-400">
              Tell us about the business. We’ll recommend a package.
            </p>
            <ContactForm
              selectedPackage={selectedPackage}
              businessType={businessLabel}
              extras={extras}
              onPackageChange={setSelectedPackage}
            />
          </div>
        </div>
      </section>

      <DemoModal demoId={demoId} onClose={() => setDemoId(null)} />
    </>
  );
}
