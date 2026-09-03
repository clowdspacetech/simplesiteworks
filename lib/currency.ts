export type CurrencyCode = "GBP" | "INR" | "USD" | "EUR" | "AUD" | "CAD";

export const CURRENCY_COOKIE = "user-currency";
export const DEFAULT_CURRENCY: CurrencyCode = "GBP";

export const CURRENCY_META: Record<
  CurrencyCode,
  { symbol: string; label: string; prefix?: string }
> = {
  GBP: { symbol: "£", label: "GBP" },
  INR: { symbol: "₹", label: "INR" },
  USD: { symbol: "$", label: "USD" },
  EUR: { symbol: "€", label: "EUR" },
  AUD: { symbol: "$", label: "AUD", prefix: "A$" },
  CAD: { symbol: "$", label: "CAD", prefix: "C$" },
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

export type TierAmounts = {
  setup: number;
  monthly: number;
};

type TierPricing = Record<
  CurrencyCode,
  {
    setup: number;
    monthly: number;
    price: string;
    priceLabel: string;
    mrr: string;
    mrrLabel: string;
  }
>;

function formatAmount(amount: number, currency: CurrencyCode): string {
  const meta = CURRENCY_META[currency];
  const formatted = amount.toLocaleString(currency === "INR" ? "en-IN" : "en-GB");
  if (meta.prefix) return `${meta.prefix}${formatted}`;
  return `${meta.symbol}${formatted}`;
}

function buildTier(setup: number, monthly: number, currency: CurrencyCode) {
  const price = formatAmount(setup, currency);
  const mrr = formatAmount(monthly, currency);
  return {
    setup,
    monthly,
    price,
    priceLabel: price,
    mrr,
    mrrLabel: `${mrr}/mo`,
  };
}

/** Exact normalized global package pricing (base: GBP). */
export const TIER_PRICING: Record<"Starter" | "Growth" | "Automation", TierPricing> = {
  Starter: {
    GBP: buildTier(299, 22, "GBP"),
    USD: buildTier(389, 29, "USD"),
    EUR: buildTier(359, 24, "EUR"),
    AUD: buildTier(539, 39, "AUD"),
    CAD: buildTier(524, 39, "CAD"),
    INR: buildTier(32299, 2399, "INR"),
  },
  Growth: {
    GBP: buildTier(499, 29, "GBP"),
    USD: buildTier(649, 39, "USD"),
    EUR: buildTier(599, 34, "EUR"),
    AUD: buildTier(899, 49, "AUD"),
    CAD: buildTier(874, 49, "CAD"),
    INR: buildTier(53899, 3099, "INR"),
  },
  Automation: {
    GBP: buildTier(999, 45, "GBP"),
    USD: buildTier(1299, 59, "USD"),
    EUR: buildTier(1199, 54, "EUR"),
    AUD: buildTier(1799, 79, "AUD"),
    CAD: buildTier(1749, 79, "CAD"),
    INR: buildTier(107899, 4899, "INR"),
  },
};

export function getTierPricing(tier: keyof typeof TIER_PRICING, currency: CurrencyCode) {
  return TIER_PRICING[tier][currency] ?? TIER_PRICING[tier][DEFAULT_CURRENCY];
}

/** Lowest displayed price for hero / meta copy */
export function getFromPriceLabel(currency: CurrencyCode): string {
  return getTierPricing("Starter", currency).price;
}

export const CURRENCY_OPTIONS: CurrencyCode[] = ["GBP", "USD", "EUR", "AUD", "CAD", "INR"];
