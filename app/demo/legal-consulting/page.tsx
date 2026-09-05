"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Scale } from "lucide-react";
import DemoChrome from "../../../components/demo/DemoChrome";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v)}${suffix}`);
  const [text, setText] = useState(`0${suffix}`);

  useEffect(() => {
    const controls = animate(mv, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
    const unsub = rounded.on("change", setText);
    return () => {
      controls.stop();
      unsub();
    };
  }, [mv, rounded, to]);

  return <span>{text}</span>;
}

const BARS = [42, 58, 51, 72, 68, 84, 91, 78, 95, 88, 102, 110];

export default function LegalConsultingDemoPage() {
  return (
    <DemoChrome className="bg-indigo-950 font-sans text-indigo-50">
      <header className="border-b border-amber-700/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-700 bg-indigo-900 text-amber-200">
              <Scale className="h-5 w-5" />
            </span>
            <div>
              <p className="font-serif text-xl text-white">The Corporate Authority</p>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-amber-500/90 uppercase">Vanguard Legal Partners</p>
            </div>
          </div>
          <p className="hidden font-serif text-sm text-indigo-200 md:block">Advisory · Finance · Counsel</p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-amber-500 uppercase">Trust dashboard</p>
            <h1 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Structured authority. Measured growth. Clear counsel.
            </h1>
            <p className="mt-4 max-w-lg text-base text-indigo-200">
              A multi-column professional dashboard — animated counters and charts replace generic “book a call” walls.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-amber-700/50">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
              alt="Corporate skyline"
              width={800}
              height={420}
              className="h-44 w-full object-cover sm:h-52"
            />
          </div>
        </div>

        {/* Multi-column metrics dashboard */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { label: "Client retention", value: 96, suffix: "%" },
            { label: "Matters resolved", value: 240, suffix: "+" },
            { label: "Avg. response", value: 4, suffix: "h" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-amber-700/50 bg-white p-5 text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <p className="text-xs font-semibold tracking-[0.16em] text-amber-800 uppercase">{item.label}</p>
              <p className="mt-3 font-serif text-4xl text-indigo-950">
                <Counter to={item.value} suffix={item.suffix} />
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-amber-700/40 bg-indigo-900/40 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-serif text-xl text-amber-100">Pipeline growth</h2>
              <span className="text-xs font-semibold text-emerald-300">+18% QoQ</span>
            </div>
            <div className="mt-6 flex h-36 items-end gap-1.5 sm:gap-2">
              {BARS.map((h, i) => (
                <motion.div
                  key={i}
                  className="w-full rounded-t-md bg-gradient-to-t from-amber-800 to-amber-400"
                  initial={{ height: 8 }}
                  animate={{ height: `${(h / 110) * 100}%` }}
                  transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[10px] font-semibold tracking-wider text-indigo-300 uppercase">
              <span>Jan</span>
              <span>Jun</span>
              <span>Dec</span>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-700 bg-white p-5 text-slate-900 sm:p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-amber-800 uppercase">Practice columns</p>
            <ul className="mt-4 space-y-3">
              {["Corporate structuring", "Dispute resolution", "Regulatory strategy", "Finance counsel"].map((item) => (
                <li key={item} className="flex items-center justify-between border-b border-slate-100 pb-3 font-serif text-lg text-indigo-950 last:border-0">
                  {item}
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Active</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact?package=Growth&business=Professional" className="inline-flex h-11 items-center rounded-full border border-amber-700 bg-amber-600 px-5 text-sm font-semibold text-indigo-950">
            Request this blueprint
          </Link>
          <Link href="/" className="inline-flex h-11 items-center rounded-full border border-indigo-300/40 px-5 text-sm font-semibold text-indigo-100">
            Agency home
          </Link>
        </div>
      </main>
    </DemoChrome>
  );
}
