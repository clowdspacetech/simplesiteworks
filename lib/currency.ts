export type CurrencyCode = "GBP" | "INR" | "USD" | "EUR" | "AUD" | "CAD";

export const CURRENCY_COOKIE = "user-currency";
export const DEFAULT_CURRENCY: CurrencyCode = "USD";

export const CURRENCY_META: Record<
  CurrencyCode,
  { symbol: string; label: string; audSuffix?: boolean }
> = {
  GBP: { symbol: "£", label: "GBP" },
  INR: { symbol: "₹", label: "INR" },
  USD: { symbol: "$", label: "USD" },
  EUR: { symbol: "€", label: "EUR" },
  AUD: { symbol: "$", label: "AUD", audSuffix: true },
  CAD: { symbol: "$", label: "CAD", audSuffix: true },
};

/** EU member states + common geo codes → EUR */
const EU_COUNTRY_CODES = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU",
  "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
]);

export function countryToCurrency(country?: string | null): CurrencyCode {
  const code = (country || "").toUpperCase();
  if (code === "GB") return "GBP";
  if (code === "IN") return "INR";
  if (code === "US") return "USD";
  if (code === "AU") return "AUD";
  if (code === "CA") return "CAD";
  if (EU_COUNTRY_CODES.has(code)) return "EUR";
  return DEFAULT_CURRENCY;
}

export function isCurrencyCode(value: string | null | undefined): value is CurrencyCode {
  return value === "GBP" || value === "INR" || value === "USD" || value === "EUR" || value === "AUD" || value === "CAD";
}

type TierPricing = Record<
  CurrencyCode,
  { price: string; priceLabel: string; mrr: string; mrrLabel: string }
>;

export const TIER_PRICING: Record<"Starter" | "Growth" | "Automation", TierPricing> = {
  Starter: {
    GBP: { price: "£349", priceLabel: "from £349", mrr: "£25", mrrLabel: "£25/mo maintenance" },
    INR: { price: "₹24,999", priceLabel: "from ₹24,999", mrr: "₹1,999", mrrLabel: "₹1,999/mo maintenance" },
    USD: { price: "$449", priceLabel: "from $449", mrr: "$35", mrrLabel: "$35/mo maintenance" },
    EUR: { price: "€429", priceLabel: "from €429", mrr: "€30", mrrLabel: "€30/mo maintenance" },
    AUD: { price: "$599 AUD", priceLabel: "from $599 AUD", mrr: "$45", mrrLabel: "$45 AUD/mo maintenance" },
    CAD: { price: "$599 CAD", priceLabel: "from $599 CAD", mrr: "$45", mrrLabel: "$45 CAD/mo maintenance" },
  },
  Growth: {
    GBP: { price: "£649–£1,199", priceLabel: "from £649–£1,199", mrr: "£35", mrrLabel: "£35/mo maintenance" },
    INR: { price: "₹49,999–₹89,999", priceLabel: "from ₹49,999–₹89,999", mrr: "₹2,499", mrrLabel: "₹2,499/mo maintenance" },
    USD: { price: "$849–$1,499", priceLabel: "from $849–$1,499", mrr: "$45", mrrLabel: "$45/mo maintenance" },
    EUR: { price: "€799–€1,399", priceLabel: "from €799–€1,399", mrr: "€40", mrrLabel: "€40/mo maintenance" },
    AUD: { price: "$1,199–$1,999 AUD", priceLabel: "from $1,199–$1,999 AUD", mrr: "$55", mrrLabel: "$55 AUD/mo maintenance" },
    CAD: { price: "$1,199–$1,999 CAD", priceLabel: "from $1,199–$1,999 CAD", mrr: "$55", mrrLabel: "$55 CAD/mo maintenance" },
  },
  Automation: {
    GBP: { price: "£1,499+", priceLabel: "from £1,499+", mrr: "£49", mrrLabel: "£49/mo maintenance" },
    INR: { price: "₹1,19,999+", priceLabel: "from ₹1,19,999+", mrr: "₹3,999", mrrLabel: "₹3,999/mo maintenance" },
    USD: { price: "$1,999+", priceLabel: "from $1,999+", mrr: "$65", mrrLabel: "$65/mo maintenance" },
    EUR: { price: "€1,899+", priceLabel: "from €1,899+", mrr: "€59", mrrLabel: "€59/mo maintenance" },
    AUD: { price: "$2,699+ AUD", priceLabel: "from $2,699+ AUD", mrr: "$85", mrrLabel: "$85 AUD/mo maintenance" },
    CAD: { price: "$2,699+ CAD", priceLabel: "from $2,699+ CAD", mrr: "$85", mrrLabel: "$85 CAD/mo maintenance" },
  },
};

export function getTierPricing(tier: keyof typeof TIER_PRICING, currency: CurrencyCode) {
  return TIER_PRICING[tier][currency] ?? TIER_PRICING[tier][DEFAULT_CURRENCY];
}

/** Lowest displayed price for hero / meta copy */
export function getFromPriceLabel(currency: CurrencyCode): string {
  return getTierPricing("Starter", currency).priceLabel.replace(/^from /i, "");
}
