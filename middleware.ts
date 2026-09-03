import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CURRENCY_COOKIE, countryToCurrency, isCurrencyCode } from "./lib/currency";

type RequestWithGeo = NextRequest & {
  geo?: { country?: string | null };
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const existing = request.cookies.get(CURRENCY_COOKIE)?.value;
  if (existing && isCurrencyCode(existing)) {
    return response;
  }

  const geoCountry =
    (request as RequestWithGeo).geo?.country ??
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    "";

  const currency = countryToCurrency(geoCountry);

  response.cookies.set(CURRENCY_COOKIE, currency, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
