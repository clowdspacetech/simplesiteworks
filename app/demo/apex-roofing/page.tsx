"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, BadgeCheck, HardHat } from "lucide-react";
import DemoChrome from "../../../components/demo/DemoChrome";

export default function ApexRoofingDemoPage() {
  const [before, setBefore] = useState(48);

  return (
    <DemoChrome className="bg-slate-950 font-sans text-slate-100">
      <div className="border-b border-sky-500/40 bg-sky-600">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <p className="inline-flex items-center gap-2 text-sm font-black tracking-wide text-white uppercase">
            <AlertTriangle className="h-4 w-4" />
            Storm Damage Emergency Ribbon — crews mobilizing now
          </p>
          <a href="tel:+448001122334" className="rounded-sm bg-slate-950 px-4 py-2 text-xs font-bold text-white uppercase">
            Call storm desk
          </a>
        </div>
      </div>

      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-5 sm:px-8">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-sky-500 text-slate-950">
            <HardHat className="h-5 w-5" />
          </span>
          <div>
            <p className="text-lg font-black tracking-tight uppercase">The Apex Roofing System</p>
            <p className="text-[11px] font-bold tracking-[0.2em] text-sky-400 uppercase">Home services · Contracting</p>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:py-14">
        <div>
          <h1 className="text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Split-screen urgency.
            <br />
            Grid-proof trust.
          </h1>
          <p className="mt-4 max-w-md text-base text-slate-300">
            High converting roofing websites with drone-dense media, utility borders, and a live Before/After proof slider.
          </p>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-md border-2 border-slate-700">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
              alt="High converting roofing website — dark slate construction site architecture"
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
        </div>

        <div className="rounded-md border-2 border-slate-700 bg-slate-900 p-5">
          <p className="text-xs font-black tracking-[0.2em] text-sky-400 uppercase">Before / After slider</p>
          <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-md border border-slate-700">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
              alt="Architectural structure before roof restoration"
              fill
              className="object-cover"
              sizes="500px"
            />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${before}%` }}>
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                alt="Modern slate architectural finish after roofing work"
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>
            <div className="absolute inset-y-0 w-0.5 bg-sky-400" style={{ left: `${before}%` }} />
          </div>
          <input
            type="range"
            min={10}
            max={90}
            value={before}
            onChange={(e) => setBefore(Number(e.target.value))}
            className="mt-4 w-full accent-sky-500"
            aria-label="Before and after comparison"
          />
        </div>
      </main>

      <section className="border-t border-slate-800 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <h2 className="text-sm font-black tracking-[0.2em] text-sky-400 uppercase">Credential grid</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Fully insured", "Local certified", "Storm response"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 rounded-md border border-slate-700 bg-slate-950 px-4 py-4"
              >
                <BadgeCheck className="h-5 w-5 text-sky-400" />
                <p className="font-bold text-white">{item}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?package=Growth&business=Contracting" className="inline-flex h-11 items-center rounded-md bg-sky-500 px-5 text-sm font-black uppercase text-slate-950">
              Request this blueprint
            </Link>
            <Link href="/" className="inline-flex h-11 items-center rounded-md border border-slate-600 px-5 text-sm font-bold text-slate-200">
              Agency home
            </Link>
          </div>
        </div>
      </section>
    </DemoChrome>
  );
}
