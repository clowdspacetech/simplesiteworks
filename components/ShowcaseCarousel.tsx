"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const TEMPLATES = [
  {
    title: "The Trade Blueprint",
    href: "/demo/local-plumbing",
    description:
      "A high-conversion, rugged, and high-visibility framework optimized for immediate 24/7 emergency dispatch and fast booking intakes.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    accent: "from-orange-500/30 via-transparent to-slate-900/50",
    kicker: "Trades · Emergency dispatch",
  },
  {
    title: "The Mind & Body Space",
    href: "/demo/wellness-clinic",
    description:
      "An elegant, minimalist, and deeply calming aesthetic crafted carefully for premium boutique spas, wellness clinics, and health practitioners.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-400/25 via-transparent to-stone-900/40",
    kicker: "Wellness · Calm booking",
  },
  {
    title: "The Culinary Showcase",
    href: "/demo/gourmet-bistro",
    description:
      "A vibrant, bold, dark-themed sensory experience built explicitly for fine dining, coffee houses, and cocktail bars to drive instant table reservations.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    accent: "from-rose-500/30 via-transparent to-black/55",
    kicker: "Hospitality · Reservations",
  },
  {
    title: "The Corporate Authority",
    href: "/demo/legal-consulting",
    description:
      "A crisp, ultra-professional, serif-heavy layout engineered specifically for high-trust professional services, finance agencies, and law firms.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    accent: "from-indigo-400/20 via-transparent to-slate-950/50",
    kicker: "Professional · High trust",
  },
] as const;

export default function ShowcaseCarousel() {
  return (
    <div>
      <Reveal className="max-w-2xl">
        <h2 className="ssw-h2">Template & case study showcase</h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-400">
          Four premium niche templates — each a fully branded live demo, not a static lightbox.
        </p>
      </Reveal>

      <div className="ssw-grid mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {TEMPLATES.map((template, index) => (
          <Reveal key={template.href} delay={(index % 4) as 0 | 1 | 2 | 3} className="h-full">
            <Link
              href={template.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-200">
                <Image
                  src={template.image}
                  alt={`${template.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${template.accent}`} />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  {template.kicker}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-extrabold tracking-tight text-slate-900">{template.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{template.description}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-indigo-600 transition-colors duration-300 group-hover:text-indigo-500">
                  Launch Interactive Demo →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
