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
    value: "5+",
    label: "Hours Saved Weekly",
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
    id: "contracting" as const,
    label: "Contracting",
    hint: "Roofing, storm damage, home services",
    demoId: "roofing" as const,
    archetype: "The Apex Roofing System",
  },
  {
    id: "shop" as const,
    label: "Hospitality",
    hint: "Café, restaurant, bar",
    demoId: "shop" as const,
    archetype: "The Boutique Hospitality Engine",
  },
  {
    id: "bakery" as const,
    label: "Bakery",
    hint: "Patisserie, artisan bakery, café bakery",
    demoId: "bakery" as const,
    archetype: "The Artisan Crumb",
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
    hint: "Gym, spa, personal trainer",
    demoId: "wellness" as const,
    archetype: "The Wellness & Lifestyle Hub",
  },
  {
    id: "yoga" as const,
    label: "Yoga",
    hint: "Yoga studio, mindfulness, class-based",
    demoId: "yoga" as const,
    archetype: "The Fluid Alignment Studio",
  },
  {
    id: "florist" as const,
    label: "Florist",
    hint: "Boutique florist, luxury retail blooms",
    demoId: "florist" as const,
    archetype: "The Botanical Canvas",
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
    title: "The Trade Blueprint",
    industry: "Built for Plumbers, Electricians, and Emergency Trades",
    desc: "High-visibility split-column dispatch architecture with a live Active Dispatch Status tracker and one-click emergency call.",
    aesthetic: "Urgent orange/slate contrast, industrial grids, status-first UI.",
    href: "/demo/local-plumbing",
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Live dispatch board, click-to-call, coverage messaging.",
    kicker: "Trades · Dispatch",
    headline: "Rugged engineers. Rapid dispatch.",
    summary: "Convert emergency searchers with live status and instant call — not another booking form.",
    features: ["Active Dispatch Status", "One-click emergency call", "Coverage live board"],
  },
  {
    id: "wellness",
    title: "The Mind & Body Space",
    industry: "Built for Boutique Spas and Wellness Clinics",
    desc: "Asymmetrical calm layouts with ambient fade-ins and a premium calendar/intake ritual.",
    aesthetic: "Serif titles, cream/sage whitespace, soft motion.",
    href: "/demo/wellness-clinic",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Calendar intake, day/time ritual, generous whitespace.",
    kicker: "Wellness · Intake",
    headline: "Soft light. Quiet rooms. Clear calendars.",
    summary: "Whitespace-led spa UX with a premium intake flow instead of crowded booking walls.",
    features: ["Ambient fade-ins", "Premium calendar intake", "Asymmetrical editorial layout"],
  },
  {
    id: "shop",
    title: "The Culinary Showcase",
    industry: "Built for Fine Dining, Bars, and Sensory Hospitality",
    desc: "Dark cinematic hospitality centered on auto-cycling immersive food media — not reservation widgets.",
    aesthetic: "Charcoal/amber, full-bleed media, sensory grids.",
    href: "/demo/gourmet-bistro",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Cinematic media stage, auto-cycling frames, food grid glow.",
    kicker: "Fine dining · Media",
    headline: "Built for appetite. Not for booking forms.",
    summary: "Immersive culinary media experience that sells atmosphere before the ask.",
    features: ["Auto-cycling cinematic stage", "High-res food grid", "Sensory-first narrative"],
  },
  {
    id: "professional",
    title: "The Corporate Authority",
    industry: "Built for Law, Finance, and Advisory Firms",
    desc: "Serif-forward trust dashboard with animated growth counters and multi-column practice data.",
    aesthetic: "Imperial navy, brass borders, white metric cards.",
    href: "/demo/legal-consulting",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Animated counters, pipeline chart, practice columns.",
    kicker: "Professional · Finance",
    headline: "Structured authority. Measured growth.",
    summary: "High-trust advisory UI that proves competence with live-looking metrics.",
    features: ["Growth counters", "Pipeline charts", "Practice dashboard columns"],
  },
  {
    id: "automotive",
    title: "The Shift & Gear Garage",
    industry: "Built for Mechanics and Auto Workshops",
    desc: "Industrial-modern garage with Live Bay Availability animation and a bold service selector grid.",
    aesthetic: "Zinc/black, sky accents, high-contrast uppercase type.",
    href: "/demo/auto-garage",
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Bay animator, service grid, industrial typography.",
    kicker: "Automotive · Bays",
    headline: "Gritty floors. Hyper-clean UI.",
    summary: "Show open bays in real time and let drivers pick services without phone tag.",
    features: ["Live Bay Availability", "Service selector grid", "Industrial-modern theme"],
  },
  {
    id: "bistro",
    title: "The Taste & Toast Bistro",
    industry: "Built for Casual Dining and Neighborhood Restaurants",
    desc: "Warm editorial magazine layout with an expandable digital menu and a streamlined table micro-flow.",
    aesthetic: "Cream paper, rose accents, serif chaptering.",
    href: "/demo/taste-toast",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Expandable menu chapters, table hold micro-flow.",
    kicker: "Casual dining · Menu",
    headline: "Plates worth lingering over.",
    summary: "Food-magazine UX with expandable courses and a light reservation hold.",
    features: ["Expandable menu grid", "Table micro-flow", "Editorial magazine layout"],
  },
  {
    id: "roofing",
    title: "The Apex Roofing System",
    industry: "Built for Roofing & Home Services Contracting",
    desc: "Split-screen & grid hybrid with Before/After slider, Storm Damage Emergency Ribbon, and credential grid.",
    aesthetic: "Media-dense drone grids, high-contrast utility borders.",
    href: "/demo/apex-roofing",
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Before/After slider, storm ribbon, certifications.",
    kicker: "Contracting · Roofing",
    headline: "Storm-ready. Quote-ready.",
    summary: "High converting roofing websites with emergency urgency and proof-dense trust grids.",
    features: ["Before/After comparison", "Storm Damage ribbon", "Credential grid"],
  },
  {
    id: "bakery",
    title: "The Artisan Crumb",
    industry: "Built for Boutiques Bakeries & Patisseries",
    desc: "Warm editorial magazine layout with asymmetrical puzzle grid, menu carousel, and fresh-batch ticker.",
    aesthetic: "Soft cream tones, serif titles, full-bleed micro-shots.",
    href: "/demo/artisan-crumb",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Puzzle media grid, menu carousel, batch ticker.",
    kicker: "Bakery · Patisserie",
    headline: "Warm ovens. Editorial pacing.",
    summary: "Local bakery website template energy with ambient freshness signals.",
    features: ["Puzzle image grid", "Menu carousel", "Freshly baked ticker"],
  },
  {
    id: "yoga",
    title: "The Fluid Alignment Studio",
    industry: "Built for Yoga Studios & Mindful Wellness Brands",
    desc: "Ultra-minimal single-column fluid rows, fade-in rituals, and an embedded live class timetable.",
    aesthetic: "Muted earth tones, soft glass shadows, generous whitespace.",
    href: "/demo/fluid-alignment",
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Fade-in sections, class timetable, calm whitespace.",
    kicker: "Yoga · Lifestyle",
    headline: "Breath. Space. Timetable clarity.",
    summary: "Wellness website builder energy with booking systems for yoga studios.",
    features: ["Fade-in intersection motion", "Live class timetable", "Minimal fluid rows"],
  },
  {
    id: "florist",
    title: "The Botanical Canvas",
    industry: "Built for Luxury Floristry & Boutique Retail",
    desc: "Dark sensory masonry grid of floral macros with an occasion-selector wizard for Sympathy, Weddings, Celebrations.",
    aesthetic: "Rich dark backgrounds, ultra-crisp floral macros.",
    href: "/demo/botanical-canvas",
    src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1600&q=80",
    screenshot:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1600&q=80",
    bulletFocus: "Masonry macros, occasion wizard, dark canvas.",
    kicker: "Florist · Retail",
    headline: "Blooms against the dark.",
    summary: "E-commerce florist website design with boutique retail site architecture.",
    features: ["Masonry floral grid", "Occasion selector wizard", "Dark sensory canvas"],
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

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  if (!email || email.length > 254) return false;
  if (email.includes("..")) return false;
  return EMAIL_PATTERN.test(email);
}

/** Destination inbox(es) for customer enquiries (comma/semicolon separated in env). */
export function parseEnquiryEmails(raw?: string): string[] {
  if (!raw?.trim()) return [];
  return [
    ...new Set(
      raw
        .split(/[,;]+/)
        .map((value) => value.trim())
        .filter((value) => isValidEmail(value)),
    ),
  ];
}

function collectEnquiryEmails(...sources: Array<string | undefined>): string[] {
  return [
    ...new Set(
      sources
        .flatMap((source) => parseEnquiryEmails(source))
        .map((email) => email.trim()),
    ),
  ];
}

export const ENQUIRY_EMAILS = collectEnquiryEmails(
  process.env.CONTACT_EMAIL,
  process.env.CONTACT_EMAILS,
  // Legacy public vars still accepted server-side, but never shown in the UI.
  process.env.NEXT_PUBLIC_ENQUIRY_EMAIL,
  process.env.NEXT_PUBLIC_ENQUIRY_EMAILS,
);

/** Primary destination inbox for customer enquiries (first configured address). */
export const ENQUIRY_EMAIL = ENQUIRY_EMAILS[0] || "hello@simplesiteworks.com";

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
  process.env.NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBERS ?? process.env.CONTACT_WHATSAPP_NUMBERS,
);

export function isValidWhatsAppNumber(value: string): boolean {
  return WHATSAPP_E164.test(value.trim());
}

/** Digits-only number for wa.me links. */
export function toWhatsAppMeNumber(value: string): string {
  return value.replace(/\D/g, "");
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
