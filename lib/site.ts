export const PACKAGES = [
  {
    id: "Starter" as const,
    title: "Starter Footprint",
    subtitle: "One-Page Presence",
    legacyId: "Basic",
    bullets: [
      "Single high-converting landing page",
      "Streamlined contact & enquiry flows",
      "Mobile-first design for local search traffic",
      "Built and launched in 1–2 weeks",
      "Hosting, SSL & performance tuning included",
    ],
    featured: false,
    summary:
      "A high-converting digital storefront that puts your business in front of local buyers — without the template-site penalty.",
  },
  {
    id: "Growth" as const,
    title: "Business Growth Suite",
    subtitle: "Multi-Page Authority",
    legacyId: "Custom",
    bullets: [
      "Multi-page brand layout that builds trust",
      "Dedicated localized SEO framework",
      "Automated keyword targeting for high-intent searches",
      "Service showcases & social proof sections",
      "Hands-free copy and premium imagery available",
    ],
    featured: true,
    summary:
      "The complete growth platform for established local brands ready to dominate their market — not just exist online.",
  },
  {
    id: "Automation" as const,
    title: "The Automation Engine",
    subtitle: "Full Operational Suite",
    legacyId: "Advanced",
    bullets: [
      "Self-service client portals that cut admin work",
      "Integrated calendar scheduling",
      "Upfront deposit collection before work starts",
      "Advanced automation tailored to your workflow",
      "Save 5+ hours a week on back-office tasks",
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
  {
    id: "trades" as const,
    label: "Trades",
    hint: "Plumber, electrician, landscaper",
    demoId: "tradesman" as const,
    archetype: "The Local Trade Authority",
  },
  {
    id: "shop" as const,
    label: "Hospitality",
    hint: "Café, bakery, restaurant",
    demoId: "shop" as const,
    archetype: "The Boutique Hospitality Engine",
  },
  {
    id: "professional" as const,
    label: "Professional",
    hint: "Accountant, tutor, consultant",
    demoId: "professional" as const,
    archetype: "The Expert Advisory Portal",
  },
  {
    id: "wellness" as const,
    label: "Wellness",
    hint: "Gym, yoga, personal trainer",
    demoId: "wellness" as const,
    archetype: "The Wellness & Lifestyle Hub",
  },
];

export type BusinessTypeId = (typeof BUSINESS_TYPES)[number]["id"];

export const STRATEGY_GOALS = [
  {
    id: "calls" as const,
    label: "Get more phone calls",
    hint: "Capture high-intent local enquiries",
    suggests: "Starter" as PackageId,
  },
  {
    id: "seo" as const,
    label: "Rank on Google",
    hint: "Local SEO & multi-page authority",
    suggests: "Growth" as PackageId,
  },
  {
    id: "scheduling" as const,
    label: "Automate scheduling",
    hint: "Bookings, deposits & client portals",
    suggests: "Automation" as PackageId,
  },
  {
    id: "brand" as const,
    label: "Build brand trust",
    hint: "Authority layout & social proof",
    suggests: "Growth" as PackageId,
  },
] as const;

export type StrategyGoalId = (typeof STRATEGY_GOALS)[number]["id"];

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
    href: "/demo/local-plumbing",
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Tap-to-call, service-area maps, and clear customer response fields.",
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
    href: "/demo/gourmet-bistro",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Fluid digital menus, elegant typography, and automated booking configurations.",
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
    href: "/demo/legal-consulting",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Authoritative structural grids, clear appointment schedulers, and client portals.",
    kicker: "Advice you can act on",
    headline: "Calm, credible, easy to enquire.",
    summary:
      "Authority-first layouts with service matrices and discovery-call booking that qualify premium leads.",
    features: ["Service matrix grids", "Client testimonials", "Discovery call scheduling"],
  },
  {
    id: "wellness",
    title: "The Wellness & Lifestyle Hub",
    industry: "Built for Gyms, Yoga Studios, and Personal Trainers",
    desc: "A scheduling-first experience designed for high-energy fitness brands. Features dynamic class timetables, membership CTAs, and mobile booking flows that fill empty slots.",
    aesthetic: "Dynamic action-oriented layout, high-energy highlights, and scheduling-first interfaces.",
    href: "/demo/wellness-clinic",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "High-impact hero imagery, dynamic timetable access, and digital sign-up flows.",
    kicker: "Train · Recover · Repeat",
    headline: "Classes, coaching, and a timetable that fills itself.",
    summary:
      "Dynamic class schedules and membership flows that keep members booking — and trainers free of admin.",
    features: ["Class timetable switcher", "Membership CTAs", "Mobile booking flows"],
  },
];

export type DemoId = (typeof DEMOS)[number]["id"];

export function suggestPackageFromGoals(goals: StrategyGoalId[]): PackageId {
  if (!goals.length) return "Growth";
  const scores: Record<PackageId, number> = { Starter: 0, Growth: 0, Automation: 0 };
  for (const goalId of goals) {
    const goal = STRATEGY_GOALS.find((item) => item.id === goalId);
    if (goal) scores[goal.suggests] += 1;
  }
  if (scores.Automation >= scores.Growth && scores.Automation >= scores.Starter) return "Automation";
  if (scores.Growth >= scores.Starter) return "Growth";
  return "Starter";
}

export const FAQ_ITEMS = [
  {
    q: "How quickly can we launch?",
    a: "Most Starter Footprint projects go live in 1–2 weeks. Growth and Automation tiers vary by scope — we provide a clear timeline upfront.",
  },
  {
    q: "Do I need to write copy or supply photos?",
    a: "No. Our Hands-Free Copy & Media service handles professional copywriting and premium imagery curation so you can launch stress-free.",
  },
  {
    q: "What's included in the monthly maintenance fee?",
    a: "Hosting, SSL, security updates, performance monitoring, and priority support — so your site stays fast, secure, and converting.",
  },
  {
    q: "Can you handle bookings and payments?",
    a: "Yes — The Automation Engine includes scheduling, deposit collection, and client portals tailored to your workflow.",
  },
  {
    q: "Do you work with businesses outside the UK?",
    a: "Absolutely. We serve local businesses globally with localized pricing in GBP, USD, EUR, INR, AUD, and CAD.",
  },
  {
    q: "Will my site work on mobile?",
    a: "Every build is 100% mobile-first — engineered for the 70%+ of local searches happening on phones.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. Start with Starter Footprint and scale into Growth or Automation as your business grows — we migrate your existing content.",
  },
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
  return [
    ...new Set(
      raw
        .split(/[,;\s]+/)
        .map((value) => value.trim())
        .filter((value) => WHATSAPP_E164.test(value)),
    ),
  ];
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
