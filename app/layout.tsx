import { cookies } from "next/headers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import AmbientBackground from "../components/AmbientBackground";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CurrencyProvider from "../components/CurrencyProvider";
import { CURRENCY_COOKIE, DEFAULT_CURRENCY, isCurrencyCode } from "../lib/currency";
import { SEO_ABOUT, SEO_DESCRIPTION, SEO_KEYWORDS, SEO_TITLE } from "../lib/seo";

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
  title: {
    default: SEO_TITLE,
    template: "%s | SimpleSiteWorks",
  },
  description: SEO_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  icons: {
    icon: [
      { url: "/branding/favicon.ico", sizes: "any" },
      { url: "/branding/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/branding/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/branding/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [
      {
        url: "/branding/logo-mark.png",
        width: 1200,
        height: 1200,
        alt: "SimpleSiteWorks — build a simple website without tech knowledge",
      },
    ],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const rawCurrency = cookieStore.get(CURRENCY_COOKIE)?.value;
  const initialCurrency = rawCurrency && isCurrencyCode(rawCurrency) ? rawCurrency : DEFAULT_CURRENCY;

  const structured = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://simplesiteworks.com/#business",
        name: "SimpleSiteWorks",
        url: "https://simplesiteworks.com",
        description: SEO_ABOUT,
        email: "hello@simplesiteworks.com",
        knowsAbout: [...SEO_KEYWORDS],
        slogan: "Websites that convert local search into revenue — without the tech stress",
      },
      {
        "@type": "Service",
        name: "Done-for-you local business website design",
        provider: { "@id": "https://simplesiteworks.com/#business" },
        serviceType: [
          "Done for you local business website",
          "Conversion-first web design agency",
          "No-code web design for complete beginners",
          "Simple one-page website setup",
          "Local web design agency with marketing automation",
        ],
        areaServed: "Worldwide",
        description: SEO_DESCRIPTION,
      },
      {
        "@type": "ItemList",
        name: "SimpleSiteWorks niche website blueprints",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "High converting roofing websites & contractor web design",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Local bakery website template & hospitality digital storefront",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Wellness website builder & booking systems for yoga studios",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "E-commerce florist website design & boutique retail site architecture",
          },
        ],
      },
    ],
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
