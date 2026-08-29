import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import AmbientBackground from "../components/AmbientBackground";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SimpleSiteWorks — Websites made easy.",
  description:
    "Simple websites for small local businesses. Clear pricing. Fast delivery. No technical stress.",
  keywords: [
    "local business websites",
    "affordable websites UK",
    "simple websites for tradesmen",
    "rural business websites",
    "website builder for small businesses",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structured = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SimpleSiteWorks",
    url: "https://example.com",
    description: "Simple websites for small local businesses",
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full`}>
      <head>
        <link rel="icon" href="/logo.svg" />
        <meta name="theme-color" content="#030712" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}
        />
      </head>
      <body className={`${inter.className} relative min-h-full bg-transparent text-zinc-100 antialiased`}>
        <AmbientBackground />
        <div className="ssw-shell relative z-10 flex min-h-full flex-col">
          <Header />
          <div className="flex min-w-0 flex-1 flex-col">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
