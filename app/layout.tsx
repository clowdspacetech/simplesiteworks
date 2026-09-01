import { cookies } from "next/headers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import AmbientBackground from "../components/AmbientBackground";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CurrencyProvider from "../components/CurrencyProvider";
import { CURRENCY_COOKIE, DEFAULT_CURRENCY, isCurrencyCode } from "../lib/currency";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SimpleSiteWorks — Premium websites for local businesses",
  description:
    "High-converting websites and automation for local businesses worldwide. Global pricing, measurable ROI, launch in weeks.",
  keywords: [
    "local business websites",
    "conversion optimized websites",
    "local SEO websites",
    "business automation websites",
    "premium web design agency",
  ],
  icons: {
    icon: [
      { url: "/branding/favicon.ico", sizes: "any" },
      { url: "/branding/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/branding/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/branding/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "SimpleSiteWorks",
    description: "Websites • Apps • Made Simple",
    images: [{ url: "/branding/logo-mark.png", width: 1200, height: 1200, alt: "SimpleSiteWorks" }],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const rawCurrency = cookieStore.get(CURRENCY_COOKIE)?.value;
  const initialCurrency = rawCurrency && isCurrencyCode(rawCurrency) ? rawCurrency : DEFAULT_CURRENCY;

  const structured = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SimpleSiteWorks",
    url: "https://simplesiteworks.com",
    description: "Premium websites and automation for local businesses worldwide",
    email: "hello@simplesiteworks.com",
  };

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full`}>
      <head>
        <meta name="theme-color" content="#030712" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}
        />
      </head>
      <body className={`${poppins.className} relative min-h-full bg-transparent text-zinc-100 antialiased`}>
        <CurrencyProvider initialCurrency={initialCurrency}>
          <AmbientBackground />
          <div className="ssw-shell relative z-10 flex min-h-full flex-col">
            <Header />
            <div className="flex min-w-0 flex-1 flex-col">{children}</div>
            <Footer />
          </div>
        </CurrencyProvider>
      </body>
    </html>
  );
}
