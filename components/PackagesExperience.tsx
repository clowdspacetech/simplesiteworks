"use client";

import { useState } from "react";
import PricingComparisonGrid from "./PricingComparisonGrid";
import PackageCustomizer from "./PackageCustomizer";
import ContactForm from "./ContactForm";
import { useCurrency } from "./CurrencyProvider";
import {
  BUSINESS_TYPES,
  ENQUIRY_WHATSAPP_NUMBERS,
  type BusinessTypeId,
  type PackageId,
} from "../lib/site";
import { scrollToSection } from "../lib/scroll";

export default function PackagesExperience({
  initialPackage,
}: {
  initialPackage?: PackageId;
}) {
  const { fromPriceLabel } = useCurrency();
  const [selectedPackage, setSelectedPackage] = useState<PackageId>(initialPackage ?? "Growth");
  const [businessType, setBusinessType] = useState<BusinessTypeId | "">("");
  const [extras, setExtras] = useState<string[]>([]);
  const [prefill, setPrefill] = useState({ name: "", email: "", phone: "" });
  const businessLabel = BUSINESS_TYPES.find((item) => item.id === businessType)?.label ?? "";

  return (
    <section className="ssw-section overflow-x-hidden">
      <div className="ssw-container">
        <span className="ssw-kicker">Global pricing</span>
        <div className="mt-5 max-w-3xl">
          <h1 className="ssw-h1">Investment tiers</h1>
          <p className="ssw-lead mt-4">
            Premium packages engineered for ROI — exact setup and monthly fees from {fromPriceLabel}, localized across six currencies.
          </p>
        </div>

        <div className="mt-12">
          <PricingComparisonGrid
            showHeader={false}
            selectedPackage={selectedPackage}
            onChoose={(id) => {
              if (id === "Starter" || id === "Growth" || id === "Automation") {
                setSelectedPackage(id);
              }
              scrollToSection("contact");
            }}
          />
        </div>

        <div className="mt-16">
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
            enquiryWhatsAppNumbers={ENQUIRY_WHATSAPP_NUMBERS}
            initialName={prefill.name}
            initialEmail={prefill.email}
            initialPhone={prefill.phone}
          />
        </div>
      </div>
    </section>
  );
}
