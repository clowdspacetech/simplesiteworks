import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="icon" href="/logo.svg" />
        <meta name="theme-color" content="#09090b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col bg-white text-zinc-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
