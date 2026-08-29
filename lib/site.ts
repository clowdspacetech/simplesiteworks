export const PACKAGES = [
  {
    id: "Basic" as const,
    title: "Basic",
    price: "£299",
    priceLabel: "from £299",
    bullets: ["One-page landing", "Mobile-friendly", "Contact form", "Hosting setup", "Delivery in 2–3 weeks"],
    featured: false,
    summary: "A sharp one-page site so customers can find you, see what you do, and get in touch.",
  },
  {
    id: "Custom" as const,
    title: "Custom",
    price: "£499–£899",
    priceLabel: "from £499–£899",
    bullets: ["3–5 pages", "Gallery", "Services", "Branding"],
    featured: true,
    summary: "A multi-page site with your branding, services, and a gallery of real work.",
  },
  {
    id: "Advanced" as const,
    title: "Advanced",
    price: "£999+",
    priceLabel: "£999+",
    bullets: ["Payments", "Booking systems", "Customer login", "Photo upload system"],
    featured: false,
    summary: "Bookings, payments, and customer logins — built around how you actually work.",
  },
];

export type PackageId = (typeof PACKAGES)[number]["id"];

export const BUSINESS_TYPES = [
  { id: "trades", label: "Trades", hint: "Plumber, electrician, gardener" },
  { id: "shop", label: "Shop / café", hint: "Menu, hours, walk-ins" },
  { id: "professional", label: "Professional", hint: "Accountant, tutor, consultant" },
  { id: "other", label: "Something else", hint: "Tell us in the form" },
] as const;

export type BusinessTypeId = (typeof BUSINESS_TYPES)[number]["id"];

export const EXTRAS = [
  { id: "seo", label: "Basic SEO" },
  { id: "gallery", label: "Photo gallery" },
  { id: "booking", label: "Online booking" },
] as const;

export const DEMOS = [
  {
    id: "tradesman",
    title: "Tradesman Demo",
    desc: "Plumber, electrician, gardener",
    href: "/demo/tradesman",
    src: "/demos/tradesman.svg",
    kicker: "Reliable · Local · Insured",
    headline: "Plumbing, electrics and garden work — done properly.",
    summary:
      "Call-outs, quoted jobs, and a photo gallery of recent work. Customers reach you in one tap — mobile-first, no fuss.",
    features: ["Emergency call-outs", "Quoted installations", "Aftercare & guarantees"],
  },
  {
    id: "shop",
    title: "Shop / Café Demo",
    desc: "Menu, opening hours, map",
    href: "/demo/shop",
    src: "/demos/shop.svg",
    kicker: "Open today · 8:00–16:00",
    headline: "Coffee, pastry, and a table by the window.",
    summary:
      "Menu, hours, and a map so regulars and visitors know exactly where you are — and what’s on today.",
    features: ["Seasonal menu", "Today’s opening times", "Map pin & parking note"],
  },
  {
    id: "professional",
    title: "Professional Services",
    desc: "Accountant, tutor, consultant",
    href: "/demo/professional",
    src: "/demos/professional.svg",
    kicker: "Advice you can act on",
    headline: "Calm, credible, easy to enquire.",
    summary:
      "Services laid out clearly, a few client notes, and a form that doesn’t feel like paperwork.",
    features: ["Clear services", "Short testimonials", "Simple enquiry form"],
  },
];

export type DemoId = (typeof DEMOS)[number]["id"];

export const FAQ_ITEMS = [
  { q: "How long does it take?", a: "Typical delivery is 2–3 weeks for basic sites; custom projects vary." },
  { q: "Do I need technical knowledge?", a: "No — we handle setup and training." },
  { q: "Who buys the domain?", a: "You can buy the domain or we can handle it on your behalf." },
  { q: "Can I update my website later?", a: "Yes — we provide guides and optional support." },
  { q: "Do you offer SEO?", a: "We include basic SEO and can provide advanced packages." },
  { q: "Can I upload photos?", a: "Yes — galleries and upload features are supported." },
  { q: "Do you offer emergency support?", a: "Yes — emergency support is available as an add-on." },
];

export const APP_OFFERINGS = [
  { title: "Booking Apps", desc: "Appointment and schedule flows" },
  { title: "Customer Apps", desc: "Profiles and messaging" },
  { title: "Delivery Apps", desc: "Orders and tracking" },
  { title: "Loyalty Apps", desc: "Points and rewards" },
];

/** Destination inbox for customer enquiries (override via NEXT_PUBLIC_ENQUIRY_EMAIL). */
export const ENQUIRY_EMAIL =
  process.env.NEXT_PUBLIC_ENQUIRY_EMAIL?.trim() || "clowdspace98@gmail.com";

/**
 * Practical email format check:
 * - local part without spaces
 * - domain with at least one dot
 * - TLD 2+ letters
 */
const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  if (!email || email.length > 254) return false;
  if (email.includes("..")) return false;
  return EMAIL_PATTERN.test(email);
}

export function isPackageId(value: string | null | undefined): value is PackageId {
  return PACKAGES.some((pkg) => pkg.id === value);
}
