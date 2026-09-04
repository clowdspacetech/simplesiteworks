"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Scale } from "lucide-react";

const SLOTS = ["09:30 AM", "11:00 AM", "02:30 PM", "04:00 PM"] as const;

export default function LegalConsultingDemoPage() {
  const [slot, setSlot] = useState<(typeof SLOTS)[number] | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [matter, setMatter] = useState("Commercial dispute");
  const [confirmed, setConfirmed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!slot || !name.trim() || !email.trim()) return;
    setConfirmed(true);
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-indigo-950 font-sans text-indigo-50 antialiased">
      <div className="fixed top-0 z-[9999] flex w-full items-center justify-between border-b border-slate-200/60 bg-white/80 px-4 py-2 backdrop-blur-md">
        <p className="text-xs font-medium text-slate-600 sm:text-sm">
          Viewing SimpleSiteWorks Live Niche Template Demo
        </p>
        <Link
          href="/"
          className="inline-flex h-8 shrink-0 items-center rounded-md border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          ← Return to Agency Home
        </Link>
      </div>

      <div className="pt-12">
        <header className="border-b border-amber-700/40 bg-indigo-950">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-700 bg-indigo-900 text-amber-200">
                <Scale className="h-5 w-5" />
              </span>
              <div>
                <p className="font-serif text-xl tracking-tight text-white">Vanguard Legal Partners</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500/90">
                  Counsel · Strategy · Clarity
                </p>
              </div>
            </div>
            <nav className="flex gap-6 font-serif text-sm text-indigo-200">
              <a href="#practice" className="hover:text-amber-300">
                Practice
              </a>
              <a href="#evaluate" className="hover:text-amber-300">
                Evaluation
              </a>
              <a href="#offices" className="hover:text-amber-300">
                Offices
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className="border-b border-amber-700/30 bg-indigo-950">
            <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-500">
                  Prestigious counsel
                </p>
                <h1 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl">
                  Authority without noise. Guidance without delay.
                </h1>
                <p className="mt-5 max-w-md text-base leading-relaxed text-indigo-200">
                  A symmetrical, high-trust professional demo for law firms and advisory brands — imperial navy, brass edges, editorial serif.
                </p>
                <div className="relative mt-8 overflow-hidden rounded-2xl border border-amber-700/50">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    alt="Corporate skyline architecture"
                    width={900}
                    height={560}
                    className="h-56 w-full object-cover sm:h-64"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo-950 to-transparent p-4">
                    <p className="font-serif text-sm text-amber-100">City chambers · Strategic counsel</p>
                  </div>
                </div>
              </div>

              <div
                id="evaluate"
                className="rounded-2xl border border-amber-700 bg-white p-6 text-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">Case evaluation</p>
                <h2 className="mt-2 font-serif text-2xl text-indigo-950">Schedule a strategic callback</h2>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {SLOTS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setSlot(item);
                        setConfirmed(false);
                      }}
                      className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                        slot === item
                          ? "border-indigo-950 bg-indigo-950 text-white"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {slot ? (
                  <form onSubmit={handleSubmit} className="mt-5 space-y-3 border-t border-slate-200 pt-5">
                    <p className="text-sm text-slate-600">
                      Callback slot: <span className="font-semibold text-indigo-950">{slot}</span>
                    </p>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Full name"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-amber-700"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Work email"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-amber-700"
                    />
                    <select
                      value={matter}
                      onChange={(e) => setMatter(e.target.value)}
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-amber-700"
                    >
                      <option>Commercial dispute</option>
                      <option>Corporate structuring</option>
                      <option>Regulatory advisory</option>
                    </select>
                    <button
                      type="submit"
                      className="inline-flex h-12 w-full items-center justify-center rounded-full border border-amber-700 bg-indigo-950 text-sm font-semibold text-white hover:bg-indigo-900"
                    >
                      Confirm evaluation callback
                    </button>
                    {confirmed && (
                      <p className="rounded-xl border border-amber-700/40 bg-amber-50 px-3 py-2 text-sm text-amber-950">
                        Confirmed — {name}, we will call at {slot} regarding {matter}.
                      </p>
                    )}
                  </form>
                ) : (
                  <p className="mt-5 text-sm text-slate-500">Select a callback window to continue.</p>
                )}
              </div>
            </div>
          </section>

          <section id="practice" className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
            <h2 className="font-serif text-3xl text-white">Practice chambers</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {["Corporate counsel", "Dispute resolution", "Regulatory strategy"].map((item) => (
                <article
                  key={item}
                  className="rounded-2xl border border-amber-700/50 bg-indigo-900/50 p-5"
                >
                  <h3 className="font-serif text-xl text-amber-100">{item}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-indigo-200">
                    Structured process, precise language, and a layout that signals prestige.
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="offices" className="border-t border-amber-700/40 bg-indigo-900/40">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-10 sm:px-6">
              <p className="max-w-md text-sm text-indigo-200">
                A distinct legal brand experience — not a copy of the agency site.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact?package=Growth&business=Professional"
                  className="inline-flex h-11 items-center rounded-full border border-amber-700 bg-amber-600 px-4 text-sm font-semibold text-indigo-950 hover:bg-amber-500"
                >
                  Request this blueprint
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-11 items-center rounded-full border border-indigo-300/40 px-4 text-sm font-semibold text-indigo-100 hover:bg-indigo-900"
                >
                  Return to Agency Home
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
