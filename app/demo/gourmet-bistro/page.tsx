"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame } from "lucide-react";
import DemoChrome from "../../../components/demo/DemoChrome";

const FRAMES = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    caption: "Charred citrus · Ember plate",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80",
    caption: "Gold-rim mixology",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
    caption: "Midnight dining room",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
    caption: "Sensory plating close-up",
  },
];

const GRID = [
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
];

export default function GourmetBistroDemoPage() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <DemoChrome className="bg-neutral-950 font-sans text-neutral-100">
      {/* Full-bleed cinematic media stage */}
      <section className="relative min-h-[72vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={FRAMES[frame].src}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image src={FRAMES[frame].src} alt={FRAMES[frame].caption} fill className="object-cover" priority sizes="100vw" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/55 to-neutral-950/20" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-end px-5 pb-14 pt-24 sm:px-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] text-amber-400 uppercase">
            <Flame className="h-3.5 w-3.5" />
            The Culinary Showcase
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Built for appetite.
            <br />
            Not for booking forms.
          </h1>
          <p className="mt-4 max-w-lg text-base text-neutral-300">
            Auto-cycling immersive media and a high-resolution food grid — hospitality as cinema.
          </p>
          <p className="mt-6 text-sm font-medium text-amber-200/90">{FRAMES[frame].caption}</p>
          <div className="mt-4 flex gap-2">
            {FRAMES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show frame ${i + 1}`}
                onClick={() => setFrame(i)}
                className={`h-1 rounded-full transition-all ${i === frame ? "w-10 bg-amber-400" : "w-3 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">Sensory grid</p>
            <h2 className="mt-2 text-2xl font-extrabold text-white">Tonight&apos;s visual menu</h2>
          </div>
          <p className="max-w-sm text-sm text-neutral-400">Hover cells for a soft inner glow — no reservation widgets competing for attention.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GRID.map((src, i) => (
            <motion.div
              key={src}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image src={src} alt={`Culinary plate ${i + 1}`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="25vw" />
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.22),transparent_65%)]" />
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-10 sm:px-8">
          <p className="text-sm text-neutral-400">Service evenings · Visual-first hospitality demo</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?package=Growth&business=Hospitality" className="inline-flex h-11 items-center rounded-full bg-amber-500 px-4 text-sm font-bold text-neutral-950">
              Request this blueprint
            </Link>
            <Link href="/" className="inline-flex h-11 items-center rounded-full border border-white/15 px-4 text-sm font-semibold text-neutral-200">
              Agency home
            </Link>
          </div>
        </div>
      </footer>
    </DemoChrome>
  );
}
