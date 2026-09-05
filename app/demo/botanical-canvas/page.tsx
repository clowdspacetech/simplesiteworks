"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sprout } from "lucide-react";
import DemoChrome from "../../../components/demo/DemoChrome";

const OCCASIONS = ["Sympathy", "Weddings", "Celebrations"] as const;

const BLOOMS = [
  { src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80", tall: true },
  { src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1468327768560-75b448c4b124?auto=format&fit=crop&w=800&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1457089328109-1a1c09f4a4e2?auto=format&fit=crop&w=800&q=80", tall: true },
  { src: "https://images.unsplash.com/photo-1519378058459-4c5a9fddb5b5?auto=format&fit=crop&w=800&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1496062031456-07b21f491dd7?auto=format&fit=crop&w=800&q=80", tall: true },
];

export default function BotanicalCanvasDemoPage() {
  const [occasion, setOccasion] = useState<(typeof OCCASIONS)[number] | null>(null);
  const [step, setStep] = useState<"pick" | "note" | "done">("pick");
  const [note, setNote] = useState("");

  return (
    <DemoChrome className="bg-zinc-950 font-sans text-zinc-100">
      <header className="border-b border-white/10 bg-zinc-950">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-5 sm:px-8">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200">
            <Sprout className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xl font-extrabold tracking-tight">The Botanical Canvas</p>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-fuchsia-300/80 uppercase">
              Luxury retail · Floristry
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Dark canvas. Vivid blooms. Occasion-led commerce.
        </h1>
        <p className="mt-4 max-w-lg text-base text-zinc-400">
          E-commerce florist website design with boutique retail site architecture — masonry macros and a micro-flow wizard.
        </p>

        <div className="mt-10 columns-2 gap-3 md:columns-3">
          {BLOOMS.map((bloom) => (
            <div
              key={bloom.src}
              className={`relative mb-3 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 ${
                bloom.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image src={bloom.src} alt="Boutique florist floral macro product imagery" fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur-md sm:p-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-fuchsia-300 uppercase">Occasion selector</p>
          <h2 className="mt-2 text-2xl font-extrabold text-white">What are we arranging for?</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {OCCASIONS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setOccasion(item);
                  setStep("note");
                }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  occasion === item
                    ? "border-fuchsia-300 bg-fuchsia-500/20 text-fuchsia-100"
                    : "border-white/10 bg-zinc-950 text-zinc-300 hover:border-white/25"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === "note" && occasion && (
              <motion.div
                key="note"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
                  <p className="text-sm text-zinc-400">
                    Crafting for <span className="font-semibold text-fuchsia-200">{occasion}</span>
                  </p>
                  <input
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Colour preference or message card"
                    className="h-11 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 text-sm text-white outline-none focus:border-fuchsia-400"
                  />
                  <button
                    type="button"
                    onClick={() => note.trim() && setStep("done")}
                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-fuchsia-500 text-sm font-bold text-zinc-950"
                  >
                    Continue arrangement brief
                  </button>
                </div>
              </motion.div>
            )}
            {step === "done" && (
              <motion.p
                key="done"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-5 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
              >
                Brief saved for {occasion}
                {note ? ` — “${note}”` : ""}. A florist will confirm availability.
              </motion.p>
            )}
          </AnimatePresence>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact?package=Growth&business=Florist" className="inline-flex h-11 items-center rounded-full bg-fuchsia-500 px-5 text-sm font-bold text-zinc-950">
            Request this blueprint
          </Link>
          <Link href="/" className="inline-flex h-11 items-center rounded-full border border-white/15 px-5 text-sm font-semibold text-zinc-200">
            Agency home
          </Link>
        </div>
      </main>
    </DemoChrome>
  );
}
