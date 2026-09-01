"use client";

import { useState } from "react";
import PackageCard from "./PackageCard";
import PackageCustomizer from "./PackageCustomizer";
import ContactForm from "./ContactForm";
import CurrencySelector from "./CurrencySelector";
import { useCurrency } from "./CurrencyProvider";
import { BUSINESS_TYPES, ENQUIRY_EMAIL, type BusinessTypeId, type PackageId } from "../lib/site";
import { scrollToSection } from "../lib/scroll";

export default function PackagesExperience({
  initialPackage,
}: {
  initialPackage?: PackageId;
}) {
  const { packages } = useCurrency();
  const [selectedPackage, setSelectedPackage] = useState<PackageId>(initialPackage ?? "Growth");
  const [businessType, setBusinessType] = useState<BusinessTypeId | "">("");
  const [extras, setExtras] = useState<string[]>([]);
  const businessLabel = BUSINESS_TYPES.find((item) => item.id === businessType)?.label ?? "";

  return (
    <section className="ssw-section overflow-x-hidden">
      <div className="ssw-container">
        <span className="ssw-kicker">Global pricing</span>
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <h1 className="ssw-h1">Investment tiers</h1>
            <p className="ssw-lead mt-4">
              Premium packages engineered for ROI — localized pricing with transparent monthly maintenance.
            </p>
          </div>
          <CurrencySelector className="shrink-0" />
        </div>
        <div className="ssw-grid mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
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
              onChoose={(id) => {
                if (id === "Starter" || id === "Growth" || id === "Automation") {
                  setSelectedPackage(id);
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
            Your selections above fill this in. Send it when you&apos;re ready.
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
  );
}
