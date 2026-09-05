"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";
import DemoChrome from "../../../components/demo/DemoChrome";

const CLASSES = [
  { time: "07:00", name: "Sunrise Flow", spots: "4 left" },
  { time: "12:15", name: "Midday Reset", spots: "Open" },
  { time: "18:30", name: "Evening Align", spots: "2 left" },
  { time: "20:00", name: "Yin Restore", spots: "Waitlist" },
];

export default function FluidAlignmentDemoPage() {
  const [selected, setSelected] = useState(1);

  return (
    <DemoChrome className="bg-[#efe8df] font-sans text-stone-800">
      <header className="border-b border-stone-300/60 bg-[#efe8df]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-6 sm:px-8">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-400/40 bg-white/50 text-stone-700 shadow-sm backdrop-blur-md">
            <Flower2 className="h-5 w-5" />
          </span>
          <div>
            <p className="font-serif text-2xl tracking-tight">The Fluid Alignment Studio</p>
            <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">Wellness · Lifestyle</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-16 px-5 py-14 sm:px-8 sm:py-20">
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-serif text-4xl leading-[1.15] tracking-tight text-stone-800 sm:text-5xl">
            Single-column calm.
            <br />
            Generous breath between every idea.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone-600">
            A wellness website builder aesthetic with booking systems for yoga studios — fade-ins, soft glass, no clutter.
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/40 shadow-[0_30px_80px_rgba(68,64,60,0.12)]"
        >
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
            alt="Yoga studio wellness website builder imagery"
            fill
            className="object-cover"
            sizes="700px"
          />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9 }}
          className="rounded-[2rem] border border-white/50 bg-white/40 p-6 shadow-[0_20px_50px_rgba(68,64,60,0.08)] backdrop-blur-md sm:p-8"
        >
          <p className="text-xs tracking-[0.2em] text-stone-500 uppercase">Live class timetable ritual</p>
          <h2 className="mt-2 font-serif text-2xl text-stone-800">Today&apos;s alignments</h2>
          <div className="mt-6 space-y-2">
            {CLASSES.map((item, i) => (
              <button
                key={item.time}
                type="button"
                onClick={() => setSelected(i)}
                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                  selected === i
                    ? "border-stone-400 bg-white/80 shadow-sm"
                    : "border-transparent bg-white/30 hover:bg-white/50"
                }`}
              >
                <div>
                  <p className="text-xs font-semibold tracking-wider text-stone-500">{item.time}</p>
                  <p className="mt-1 font-serif text-lg text-stone-800">{item.name}</p>
                </div>
                <span className="text-sm text-stone-600">{item.spots}</span>
              </button>
            ))}
          </div>
        </motion.section>

        <div className="flex flex-wrap gap-3 pb-8">
          <Link href="/contact?package=Growth&business=Yoga" className="inline-flex h-11 items-center rounded-full bg-stone-800 px-5 text-sm font-semibold text-[#efe8df]">
            Request this blueprint
          </Link>
          <Link href="/" className="inline-flex h-11 items-center rounded-full border border-stone-300 bg-white/60 px-5 text-sm font-medium text-stone-700 backdrop-blur-md">
            Agency home
          </Link>
        </div>
      </main>
    </DemoChrome>
  );
}
