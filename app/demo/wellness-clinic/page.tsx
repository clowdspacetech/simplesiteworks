"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf } from "lucide-react";
import DemoChrome from "../../../components/demo/DemoChrome";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
const TIMES = ["09:30", "11:00", "14:00", "16:30"] as const;

export default function WellnessClinicDemoPage() {
  const [day, setDay] = useState<(typeof DAYS)[number]>("Wed");
  const [time, setTime] = useState<(typeof TIMES)[number] | null>(null);
  const [intent, setIntent] = useState("Restore facial");
  const [step, setStep] = useState<"calendar" | "details" | "done">("calendar");
  const [name, setName] = useState("");

  return (
    <DemoChrome className="bg-[#f6f3ed] font-sans text-stone-800">
      <header className="border-b border-stone-200/80 bg-[#f6f3ed]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-emerald-100">
              <Leaf className="h-4 w-4" />
            </span>
            <p className="font-serif text-xl tracking-tight">The Mind & Body Space</p>
          </div>
          <p className="hidden text-xs tracking-[0.2em] text-stone-500 uppercase sm:block">Boutique spa · Intake</p>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
        {/* Asymmetrical editorial column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:pt-10"
        >
          <p className="text-xs tracking-[0.22em] text-emerald-800/70 uppercase">Ambient · Unhurried</p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-stone-800 sm:text-5xl">
            Soft rooms.
            <br />
            Clear calendars.
            <br />
            Quiet arrivals.
          </h1>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-stone-600">
            An asymmetrical wellness layout — whitespace as a feature, intake as a ritual, never a crowded booking wall.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 1 }}
            className="relative mt-10 aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem]"
          >
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
              alt="Serene spa interior"
              fill
              className="object-cover"
              sizes="400px"
            />
          </motion.div>
        </motion.div>

        {/* Premium calendar / intake */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-stone-200/90 bg-[#faf8f4] p-6 shadow-[0_30px_80px_rgba(68,64,60,0.08)] sm:p-8 lg:-mt-4 lg:ml-8"
        >
          <p className="text-xs tracking-[0.18em] text-stone-500 uppercase">Premium intake</p>
          <h2 className="mt-2 font-serif text-2xl text-stone-800">Choose your window</h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {DAYS.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => {
                  setDay(d);
                  setTime(null);
                  setStep("calendar");
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  day === d ? "bg-stone-800 text-emerald-50" : "bg-white text-stone-600 ring-1 ring-stone-200"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {TIMES.map((t, i) => (
              <motion.button
                key={t}
                type="button"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => {
                  setTime(t);
                  setStep("details");
                }}
                className={`rounded-2xl border px-3 py-4 text-sm font-medium transition ${
                  time === t
                    ? "border-emerald-300 bg-emerald-50 text-emerald-900"
                    : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                }`}
              >
                {t}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === "details" && time && (
              <motion.div
                key="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-3 border-t border-stone-200 pt-6">
                  <select
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                    className="h-11 w-full rounded-2xl border border-stone-200 bg-white px-3 text-sm outline-none"
                  >
                    <option>Restore facial</option>
                    <option>Botanical massage</option>
                    <option>Breath reset</option>
                  </select>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Preferred name"
                    className="h-11 w-full rounded-2xl border border-stone-200 bg-white px-3 text-sm outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => name.trim() && setStep("done")}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-stone-800 text-sm font-semibold text-emerald-50"
                  >
                    Complete intake · {day} {time}
                  </button>
                </div>
              </motion.div>
            )}
            {step === "done" && (
              <motion.p
                key="done"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
              >
                Intake received for {name} — {intent} on {day} at {time}. We&apos;ll send a soft confirmation shortly.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      <footer className="border-t border-stone-200/80 bg-emerald-50/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-10 sm:px-8">
          <p className="max-w-md text-sm text-stone-600">A calm niche demo — visually unlinked from the agency SaaS homepage.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?package=Growth&business=Wellness" className="inline-flex h-11 items-center rounded-full bg-stone-800 px-5 text-sm font-semibold text-emerald-50">
              Request this blueprint
            </Link>
            <Link href="/" className="inline-flex h-11 items-center rounded-full border border-stone-300 bg-white px-5 text-sm font-medium text-stone-700">
              Agency home
            </Link>
          </div>
        </div>
      </footer>
    </DemoChrome>
  );
}
