export const PACKAGES = [
  {
    id: "Starter" as const,
    title: "Starter Footprint",
    legacyId: "Basic",
    bullets: [
      "Capture more local enquiries with a conversion-optimized one-page presence",
      "Mobile-first layout built for on-the-go search traffic",
      "Done-for-you contact flows that turn visitors into booked calls",
      "Launch-ready hosting, SSL, and performance tuning included",
    ],
    featured: false,
    summary:
      "A high-converting digital storefront that puts your business in front of local buyers — without the template-site penalty.",
  },
  {
    id: "Growth" as const,
    title: "Business Growth Suite",
    legacyId: "Custom",
    bullets: [
      "Multi-page brand experience engineered to build trust and repeat business",
      "Service showcases and social proof that shorten the sales cycle",
      "Strategic content architecture that ranks for high-intent local searches",
      "Hands-free copy and premium imagery curation available",
    ],
    featured: true,
    summary:
      "The complete growth platform for established local brands ready to dominate their market — not just exist online.",
  },
  {
    id: "Automation" as const,
    title: "The Automation Engine",
    legacyId: "Advanced",
    bullets: [
      "Save 5+ hours a week with automated client scheduling and secure upfront deposit collection",
      "Self-service client portals that reduce admin back-and-forth",
      "Integrated payment rails that get you paid before work begins",
      "Custom workflows tailored to how your business actually operates",
    ],
    featured: false,
    summary:
      "Enterprise-grade automation for local businesses ready to scale revenue without scaling headcount.",
  },
];

export type PackageId = (typeof PACKAGES)[number]["id"];

/** @deprecated Legacy package IDs from older URLs */
export const LEGACY_PACKAGE_MAP: Record<string, PackageId> = {
  Basic: "Starter",
  Custom: "Growth",
  Advanced: "Automation",
};

export const TRUST_STATS = [
  {
    value: "2x",
    label: "Average Enquiries Increase",
    desc: "Our optimized conversion layouts reliably double the digital leads of standard template sites.",
  },
  {
    value: "5+ Hours",
    label: "Saved Weekly",
    desc: "Automated booking, intake forms, and payment collection handle administrative heavy lifting for you.",
  },
  {
    value: "100%",
    label: "Mobile-First Infrastructure",
    desc: "Flawlessly responsive interfaces built to capture the 70%+ of local search traffic looking for you on their phones.",
  },
  {
    value: "< 3s",
    label: "Blazing Load Speeds",
    desc: "Hyper-fast edge delivery ensuring potential clients never bounce away to a local competitor.",
  },
] as const;

export const DONE_FOR_YOU = {
  title: "Hands-Free Copy & Media",
  desc: "No text or photos ready? No problem. We handle professional industry copywriting and curate premium imagery for you, keeping your launch stress-free.",
};

export const BUSINESS_TYPES = [
  { id: "trades", label: "Trades", hint: "Plumber, electrician, gardener" },
  { id: "shop", label: "Shop / café", hint: "Menu, hours, walk-ins" },
  { id: "professional", label: "Professional", hint: "Accountant, tutor, consultant" },
  { id: "other", label: "Something else", hint: "Tell us in the form" },
] as const;

export type BusinessTypeId = (typeof BUSINESS_TYPES)[number]["id"];

export const EXTRAS = [
  { id: "seo", label: "Local SEO boost" },
  { id: "gallery", label: "Premium gallery" },
  { id: "booking", label: "Booking automation" },
] as const;

export const DEMOS = [
  {
    id: "tradesman",
    title: "The Local Trade Authority",
    industry: "Built for Plumbers, Electricians, and Landscapers",
    desc: "Engineered to convert high-intent emergency search traffic instantly. Features prominent tap-to-call integrations, geographic service grids, and a streamlined upfront quote calculator.",
    aesthetic: "High-contrast action accents, strong editorial typography, and live Google Review carousel feeds.",
    href: "/demo/tradesman",
    src: "/demos/tradesman.svg",
    kicker: "Reliable · Local · Insured",
    headline: "Plumbing, electrics and garden work — done properly.",
    summary:
      "Turn emergency searches into booked jobs with tap-to-call, service-area maps, and instant quote flows.",
    features: ["Emergency call-outs", "Geographic service grids", "Upfront quote calculator"],
  },
  {
    id: "shop",
    title: "The Boutique Hospitality Engine",
    industry: "Built for Cafés, Restaurants, and Bakeries",
    desc: "A fluid, mobile-first experience designed for local patrons on the move. Features smooth digital menu rendering, active Google Maps sync, and an effortless table reservation interface.",
    aesthetic: "Elegant modern spacing, striking full-screen imagery transitions, and premium micro-interactions.",
    href: "/demo/shop",
    src: "/demos/shop.svg",
    kicker: "Open today · 8:00–16:00",
    headline: "Coffee, pastry, and a table by the window.",
    summary:
      "Menus, maps, and reservations that keep regulars coming back — optimized for mobile discovery.",
    features: ["Digital menu tabs", "Live hours & map sync", "Table reservations"],
  },
  {
    id: "professional",
    title: "The Expert Advisory Portal",
    industry: "Built for Accountants, Tutors, and Consultants",
    desc: "Designed to assert immediate market authority and capture premium consulting leads. Features structured service matrix grids and an automated introductory discovery call calendar scheduling flow.",
    aesthetic: "Clean editorial layout structures, calming authoritative color palettes, and perfectly balanced text grids.",
    href: "/demo/professional",
    src: "/demos/professional.svg",
    kicker: "Advice you can act on",
    headline: "Calm, credible, easy to enquire.",
    summary:
      "Authority-first layouts with service matrices and discovery-call booking that qualify premium leads.",
    features: ["Service matrix grids", "Client testimonials", "Discovery call scheduling"],
  },
];

export type DemoId = (typeof DEMOS)[number]["id"];

export const FAQ_ITEMS = [
  { q: "How quickly can we launch?", a: "Most Starter Footprint projects go live in 2–3 weeks. Growth and Automation tiers vary by scope — we provide a clear timeline upfront." },
  { q: "Do I need to write copy or supply photos?", a: "No. Our Hands-Free Copy & Media service handles professional copywriting and premium imagery curation so you can launch stress-free." },
  { q: "What's included in the monthly maintenance fee?", a: "Hosting, SSL, security updates, performance monitoring, and priority support — so your site stays fast, secure, and converting." },
  { q: "Can you handle bookings and payments?", a: "Yes — The Automation Engine includes scheduling, deposit collection, and client portals tailored to your workflow." },
  { q: "Do you work with businesses outside the UK?", a: "Absolutely. We serve local businesses globally with localized pricing in GBP, USD, EUR, INR, AUD, and CAD." },
  { q: "Will my site work on mobile?", a: "Every build is 100% mobile-first — engineered for the 70%+ of local searches happening on phones." },
  { q: "Can I upgrade later?", a: "Yes. Start with Starter Footprint and scale into Growth or Automation as your business grows — we migrate your existing content." },
];

export const APP_OFFERINGS = [
  { title: "Booking Apps", desc: "Appointment and schedule flows" },
  { title: "Customer Apps", desc: "Profiles and messaging" },
  { title: "Delivery Apps", desc: "Orders and tracking" },
  { title: "Loyalty Apps", desc: "Points and rewards" },
];

/** Destination inbox for customer enquiries */
export const ENQUIRY_EMAIL =
  process.env.NEXT_PUBLIC_ENQUIRY_EMAIL?.trim() || "hello@simplesiteworks.com";

const WHATSAPP_E164 = /^\+[1-9]\d{7,14}$/;

/** WhatsApp numbers to alert on new enquiries (E.164, e.g. +447700900123). */
export function parseWhatsAppNumbers(raw?: string): string[] {
  if (!raw?.trim()) return [];
  return [...new Set(raw.split(/[,;\s]+/).map((value) => value.trim()).filter((value) => WHATSAPP_E164.test(value)))];
}

export const ENQUIRY_WHATSAPP_NUMBERS = parseWhatsAppNumbers(
  process.env.CONTACT_WHATSAPP_NUMBERS ?? process.env.NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBERS,
);

export function isValidWhatsAppNumber(value: string): boolean {
  return WHATSAPP_E164.test(value.trim());
}

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  if (!email || email.length > 254) return false;
  if (email.includes("..")) return false;
  return EMAIL_PATTERN.test(email);
}

export function normalizePackageId(value: string | null | undefined): PackageId | undefined {
  if (!value) return undefined;
  if (PACKAGES.some((pkg) => pkg.id === value)) return value as PackageId;
  return LEGACY_PACKAGE_MAP[value];
}

export function isPackageId(value: string | null | undefined): value is PackageId {
  return normalizePackageId(value) !== undefined;
}

export function resolvePackageId(value: string | null | undefined): PackageId {
  return normalizePackageId(value) ?? "Growth";
}
