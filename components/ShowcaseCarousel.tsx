"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  animate,
  type PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

export const TEMPLATE_SHOWCASE = [
  {
    title: "The Trade Blueprint",
    href: "/demo/local-plumbing",
    description:
      "High-visibility emergency layouts with a live Active Dispatch Status tracker and one-click click-to-call intake.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    accent: "from-orange-500/40 via-transparent to-slate-950/70",
    kicker: "Trades · Dispatch",
    hook: "Live status + call",
  },
  {
    title: "The Mind & Body Space",
    href: "/demo/wellness-clinic",
    description:
      "Asymmetrical calm layouts, ambient fade-ins, generous whitespace, and a premium calendar/intake ritual.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-400/30 via-transparent to-stone-950/50",
    kicker: "Wellness · Intake",
    hook: "Calendar ritual",
  },
  {
    title: "The Culinary Showcase",
    href: "/demo/gourmet-bistro",
    description:
      "Dark sensory hospitality built around immersive food media — auto-cycling cinematic grids, not generic booking blocks.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    accent: "from-amber-500/35 via-transparent to-black/70",
    kicker: "Fine dining · Media",
    hook: "Immersive media",
  },
  {
    title: "The Corporate Authority",
    href: "/demo/legal-consulting",
    description:
      "Serif-forward trust architecture with a multi-column advisory dashboard, growth counters, and data charts.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    accent: "from-indigo-400/30 via-transparent to-indigo-950/70",
    kicker: "Professional · Finance",
    hook: "Live metrics",
  },
  {
    title: "The Shift & Gear Garage",
    href: "/demo/auto-garage",
    description:
      "Industrial-modern automotive: Live Bay Availability animator, service selector grid, and bold high-contrast type.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    accent: "from-sky-400/30 via-transparent to-zinc-950/75",
    kicker: "Automotive · Bays",
    hook: "Bay availability",
  },
  {
    title: "The Taste & Toast Bistro",
    href: "/demo/taste-toast",
    description:
      "Warm editorial restaurant magazine layout with an expandable digital menu grid and a streamlined reservation micro-flow.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    accent: "from-rose-400/30 via-transparent to-stone-950/60",
    kicker: "Casual dining · Menu",
    hook: "Expandable menu",
  },
  {
    title: "The Apex Roofing System",
    href: "/demo/apex-roofing",
    description:
      "Split-screen & grid hybrid for contractors — Before/After slider, Storm Damage Emergency Ribbon, and credential proof grid.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    accent: "from-slate-400/40 via-transparent to-slate-950/80",
    kicker: "Contracting · Roofing",
    hook: "Before/After + storm",
  },
  {
    title: "The Artisan Crumb",
    href: "/demo/artisan-crumb",
    description:
      "Warm bakery magazine layout with asymmetrical puzzle frames, auto-cycling menu carousel, and a Freshly baked today ticker.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    accent: "from-amber-300/35 via-transparent to-stone-900/55",
    kicker: "Bakery · Patisserie",
    hook: "Puzzle + carousel",
  },
  {
    title: "The Fluid Alignment Studio",
    href: "/demo/fluid-alignment",
    description:
      "Ultra-minimal yoga layout with fluid rows, fade-in rituals, and an embedded high-end live class timetable.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    accent: "from-stone-400/30 via-transparent to-emerald-950/60",
    kicker: "Yoga · Lifestyle",
    hook: "Timetable ritual",
  },
  {
    title: "The Botanical Canvas",
    href: "/demo/botanical-canvas",
    description:
      "Dark sensory masonry of floral macros with an occasion-selector wizard for Sympathy, Weddings, and Celebrations.",
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80",
    accent: "from-fuchsia-400/30 via-transparent to-zinc-950/80",
    kicker: "Florist · Retail",
    hook: "Occasion wizard",
  },
] as const;

const CARD_W = 340;
const GAP = 24;
const STEP = CARD_W + GAP;

export default function ShowcaseCarousel() {
  const [index, setIndex] = useState(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 36, mass: 0.85 });
  const dragMoved = useRef(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = TEMPLATE_SHOWCASE.length - 1;

  useLayoutEffect(() => {
    function measure() {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      const nextMax = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setMaxDrag(nextMax);
      const current = Math.abs(x.get());
      if (current > nextMax) {
        x.set(-nextMax);
      }
    }

    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [x]);

  function scrollToIndex(next: number) {
    const clamped = Math.max(0, Math.min(maxIndex, next));
    setIndex(clamped);
    const target = Math.min(clamped * STEP, maxDrag);
    animate(x, -target, { type: "spring", stiffness: 280, damping: 34 });
  }

  function onDragEnd(_: unknown, info: PanInfo) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    dragMoved.current = Math.abs(offset) > 12 || Math.abs(velocity) > 200;

    const projected = -x.get() - offset - velocity * 0.2;
    const rawIndex = Math.round(projected / STEP);
    scrollToIndex(rawIndex);

    window.setTimeout(() => {
      dragMoved.current = false;
    }, 80);
  }

  useEffect(() => {
    const target = Math.min(index * STEP, maxDrag);
    animate(x, -target, { type: "spring", stiffness: 280, damping: 34 });
  }, [maxDrag, index, x]);

  const atStart = index <= 0;

  return (
    <div>
      <Reveal className="flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="ssw-h2">Template & case study showcase</h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            Ten niche blueprints — swipe or drag the track to explore live interactive demos.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous template"
            onClick={() => scrollToIndex(index - 1)}
            disabled={atStart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next template"
            onClick={() => scrollToIndex(index + 1)}
            disabled={index >= maxIndex}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Reveal>

      <div ref={viewportRef} className="relative mt-10 -mx-4 overflow-hidden px-4 sm:-mx-0 sm:px-0">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0a0a0b] to-transparent sm:w-12" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0a0a0b] to-transparent sm:w-12" />

        <motion.div
          ref={trackRef}
          className="flex cursor-grab gap-6 py-2 active:cursor-grabbing"
          style={{ x: springX }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.08}
          dragTransition={{ bounceStiffness: 320, bounceDamping: 28 }}
          onDragEnd={onDragEnd}
        >
          {TEMPLATE_SHOWCASE.map((template) => (
            <Link
              key={template.href}
              href={template.href}
              className="group relative shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
              style={{ width: CARD_W }}
              onClick={(e) => {
                if (dragMoved.current) e.preventDefault();
              }}
            >
              <div className="pointer-events-none absolute inset-0 z-20 rounded-3xl ring-1 ring-inset ring-white/10" />
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <Image
                  src={template.image}
                  alt={`${template.title} premium niche website blueprint preview`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="340px"
                  draggable={false}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${template.accent}`} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30 opacity-80" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white uppercase backdrop-blur-md">
                  {template.kicker}
                </span>
                <span className="absolute right-4 bottom-4 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                  {template.hook}
                </span>
              </div>

              <div className="relative flex flex-col p-5 sm:p-6">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
                <h3 className="relative text-lg font-extrabold tracking-tight text-white">{template.title}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{template.description}</p>
                <span className="relative mt-5 inline-flex items-center text-sm font-semibold text-indigo-300 transition-colors duration-300 group-hover:text-indigo-200">
                  Launch Interactive Demo
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {TEMPLATE_SHOWCASE.map((t, i) => (
          <button
            key={t.href}
            type="button"
            aria-label={`Go to ${t.title}`}
            onClick={() => scrollToIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-indigo-400" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
