"use client";

import { useState } from "react";
import PackageCard from "./PackageCard";
import PackageCustomizer from "./PackageCustomizer";
import ContactForm from "./ContactForm";
import { BUSINESS_TYPES, PACKAGES, type BusinessTypeId, type PackageId } from "../lib/site";
import { scrollToSection } from "../lib/scroll";

export default function PackagesExperience({
  initialPackage,
}: {
  initialPackage?: PackageId;
}) {
  const [selectedPackage, setSelectedPackage] = useState<PackageId>(initialPackage ?? "Custom");
  const [businessType, setBusinessType] = useState<BusinessTypeId | "">("");
  const [extras, setExtras] = useState<string[]>([]);
  const businessLabel = BUSINESS_TYPES.find((item) => item.id === businessType)?.label ?? "";

  return (
    <section className="ssw-section">
      <div className="ssw-container">
        <span className="ssw-kicker">Straightforward pricing</span>
        <h1 className="ssw-h1 mt-5 max-w-3xl">Packages</h1>
        <p className="ssw-lead mt-4">
          Choose the right package for your business — straightforward, affordable, and tailored.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PACKAGES.map((item) => (
            <PackageCard
              key={item.id}
              title={item.title}
              price={item.priceLabel}
              bullets={item.bullets}
              featured={item.featured}
              selected={selectedPackage === item.id}
              onChoose={(title) => {
                if (title === "Basic" || title === "Custom" || title === "Advanced") {
                  setSelectedPackage(title);
                }
                scrollToSection("contact");
              }}
            />
          ))}
        </div>

        <div className="mt-16">
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

        <div id="contact" className="mt-16 max-w-lg">
          <h2 className="ssw-h2">Enquire</h2>
          <p className="mt-3 mb-8 text-base leading-relaxed text-zinc-400">
            Your selections above fill this in. Send it when you’re ready.
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
  );
}
