"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Croissant } from "lucide-react";
import DemoChrome from "../../../components/demo/DemoChrome";

const MENU = [
  { name: "Sourdough batard", note: "48h ferment", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" },
  { name: "Almond croissant", note: "Morning bake", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80" },
  { name: "Berry danish", note: "Seasonal fruit", img: "https://images.unsplash.com/photo-1486427944299-d1955d23b34d?auto=format&fit=crop&w=800&q=80" },
];

const PUZZLE = [
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80", className: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80", className: "" },
  { src: "https://images.unsplash.com/photo-1486427944299-d1955d23b34d?auto=format&fit=crop&w=600&q=80", className: "" },
  { src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=700&q=80", className: "md:col-span-2" },
];

export default function ArtisanCrumbDemoPage() {
  const [slide, setSlide] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const a = setInterval(() => setSlide((s) => (s + 1) % MENU.length), 3800);
    const b = setInterval(() => setTick((t) => t + 1), 4200);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

  return (
    <DemoChrome className="bg-[#f4ebe1] font-sans text-stone-800">
      <div className="overflow-hidden border-b border-amber-200/80 bg-[#fff8ef]">
        <motion.p
          key={tick}
          initial={{ x: "40%" }}
          animate={{ x: "-10%" }}
          transition={{ duration: 3.8, ease: "linear" }}
          className="whitespace-nowrap py-2.5 text-sm font-semibold tracking-wide text-amber-900"
        >
          Freshly baked today · Batch #{120 + (tick % 9)} leaving the oven · Sourdough · Croissants · Seasonal tarts ·&nbsp;
        </motion.p>
      </div>

      <header className="border-b border-stone-200/80 bg-[#faf3ea]">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-6 sm:px-8">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-800 text-amber-50">
            <Croissant className="h-5 w-5" />
          </span>
          <div>
            <p className="font-serif text-2xl tracking-tight">The Artisan Crumb</p>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-amber-800/80 uppercase">Hospitality · Patisserie</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        <h1 className="max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          Warm editorial bakery pages that feel hand-set.
        </h1>
        <p className="mt-4 max-w-lg text-base text-stone-600">
          Local bakery website template energy — asymmetrical puzzle media, auto-cycling digital menu, ambient freshness.
        </p>

        <div className="mt-10 grid auto-rows-[140px] grid-cols-2 gap-3 md:auto-rows-[160px] md:grid-cols-4">
          {PUZZLE.map((cell) => (
            <div key={cell.src + cell.className} className={`relative overflow-hidden rounded-2xl border border-stone-200 ${cell.className}`}>
              <Image src={cell.src} alt="Artisan bakery micro-shot media" fill className="object-cover" sizes="280px" />
            </div>
          ))}
        </div>

        <section className="mt-12 rounded-[2rem] border border-stone-200 bg-[#fffaf4] p-6 shadow-[0_24px_60px_rgba(68,64,60,0.08)] sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-amber-800/70 uppercase">Digital menu carousel</p>
          <div className="relative mt-5 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={MENU[slide].name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                className="grid gap-5 sm:grid-cols-[180px_1fr]"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image src={MENU[slide].img} alt={MENU[slide].name} fill className="object-cover" sizes="180px" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="font-serif text-3xl">{MENU[slide].name}</h2>
                  <p className="mt-2 text-stone-600">{MENU[slide].note}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex gap-2">
            {MENU.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Menu item ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-amber-800" : "w-2 bg-stone-300"}`}
              />
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact?package=Growth&business=Bakery" className="inline-flex h-11 items-center rounded-full bg-amber-900 px-5 text-sm font-semibold text-amber-50">
            Request this blueprint
          </Link>
          <Link href="/" className="inline-flex h-11 items-center rounded-full border border-stone-300 bg-white px-5 text-sm font-medium text-stone-700">
            Agency home
          </Link>
        </div>
      </main>
    </DemoChrome>
  );
}
