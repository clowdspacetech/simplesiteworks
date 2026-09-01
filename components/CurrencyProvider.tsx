"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  CURRENCY_COOKIE,
  DEFAULT_CURRENCY,
  getFromPriceLabel,
  getTierPricing,
  isCurrencyCode,
  type CurrencyCode,
} from "../lib/currency";
import { PACKAGES, type PackageId } from "../lib/site";

type LocalizedPackage = (typeof PACKAGES)[number] & {
  price: string;
  priceLabel: string;
  mrr: string;
  mrrLabel: string;
};

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  packages: LocalizedPackage[];
  fromPriceLabel: string;
  formatTier: (id: PackageId) => ReturnType<typeof getTierPricing>;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

function writeCookieCurrency(code: CurrencyCode) {
  document.cookie = `${CURRENCY_COOKIE}=${code}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}

export default function CurrencyProvider({
  initialCurrency,
  children,
}: {
  initialCurrency?: string;
  children: ReactNode;
}) {
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    if (initialCurrency && isCurrencyCode(initialCurrency)) return initialCurrency;
    return DEFAULT_CURRENCY;
  });

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    writeCookieCurrency(code);
  }, []);

  const packages = useMemo(
    () =>
      PACKAGES.map((pkg) => {
        const tier = getTierPricing(pkg.id, currency);
        return { ...pkg, ...tier };
      }),
    [currency],
  );

  const value = useMemo<CurrencyContextValue>(
    () => ({
      currency,
      setCurrency,
      packages,
      fromPriceLabel: getFromPriceLabel(currency),
      formatTier: (id: PackageId) => getTierPricing(id, currency),
    }),
    [currency, setCurrency, packages],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return ctx;
}
