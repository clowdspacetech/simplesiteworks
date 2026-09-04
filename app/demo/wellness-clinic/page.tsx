"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Leaf, Sparkles } from "lucide-react";

const SLOTS = ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"] as const;

export default function WellnessClinicDemoPage() {
  const [slot, setSlot] = useState<(typeof SLOTS)[number] | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!slot || !name.trim() || !email.trim()) return;
    setBooked(true);
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#f7f4ef] text-stone-800 antialiased">
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
        <header className="border-b border-stone-200/70 bg-emerald-50/50">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-700 text-emerald-50">
                <Leaf className="h-5 w-5" />
              </span>
              <div>
                <p className="font-serif text-xl tracking-tight text-stone-800">
                  The Serene Mind & Body Space
                </p>
                <p className="text-xs tracking-[0.18em] text-stone-500 uppercase">Boutique wellness clinic</p>
              </div>
            </div>
            <nav className="flex gap-6 text-sm text-stone-600">
              <a href="#rituals" className="hover:text-stone-900">
                Rituals
              </a>
              <a href="#book" className="hover:text-stone-900">
                Book
              </a>
              <a href="#studio" className="hover:text-stone-900">
                Studio
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className="border-b border-stone-200/70 bg-emerald-50/50">
            <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
              <div>
                <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-emerald-800/80 uppercase">
                  <Sparkles className="h-3.5 w-3.5" />
                  Organic · Airy · Unhurried
                </p>
                <h1 className="mt-5 max-w-lg font-serif text-4xl leading-tight tracking-tight text-stone-800 sm:text-5xl">
                  Soft light. Quiet rooms. Space to return to yourself.
                </h1>
                <p className="mt-5 max-w-md text-base leading-relaxed text-stone-600">
                  Minimalist luxury for spas and practitioners — calm whitespace, sage accents, and booking that never feels rushed.
                </p>
                <div className="relative mt-8 overflow-hidden rounded-3xl border border-stone-200/80">
                  <Image
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                    alt="Calm wellness spa interior"
                    width={900}
                    height={560}
                    className="h-56 w-full object-cover sm:h-64"
                  />
                </div>
              </div>

              <div
                id="book"
                className="rounded-3xl border border-stone-200/80 bg-[#faf8f4] p-6 shadow-[0_24px_60px_rgba(68,64,60,0.08)] sm:p-8"
              >
                <p className="text-xs tracking-[0.18em] text-stone-500 uppercase">Schedule select</p>
                <h2 className="mt-2 font-serif text-2xl text-stone-800">Choose an appointment window</h2>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {SLOTS.map((item) => {
                    const active = slot === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setSlot(item);
                          setBooked(false);
                        }}
                        className={`rounded-2xl border px-3 py-4 text-sm font-medium transition ${
                          active
                            ? "border-emerald-300 bg-emerald-50 text-emerald-900 shadow-sm"
                            : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>

                {slot ? (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4 border-t border-stone-200/80 pt-6">
                    <p className="text-sm text-stone-600">
                      Selected: <span className="font-semibold text-stone-800">{slot}</span>
                    </p>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Full name"
                      className="h-11 w-full rounded-2xl border border-stone-200 bg-white px-3.5 text-sm outline-none focus:border-emerald-300"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email"
                      className="h-11 w-full rounded-2xl border border-stone-200 bg-white px-3.5 text-sm outline-none focus:border-emerald-300"
                    />
                    <button
                      type="submit"
                      className="inline-flex h-12 w-full items-center justify-center rounded-full bg-stone-700 text-sm font-semibold text-emerald-50 transition hover:bg-stone-800"
                    >
                      Reserve this window
                    </button>
                    {booked && (
                      <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                        Reserved — we&apos;ll send a gentle confirmation to {email} for {slot}.
                      </p>
                    )}
                  </form>
                ) : (
                  <p className="mt-6 text-sm leading-relaxed text-stone-500">
                    Tap a time slot above to continue.
                  </p>
                )}
              </div>
            </div>
          </section>

          <section id="rituals" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="font-serif text-3xl tracking-tight text-stone-800">Signature rituals</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                { title: "Botanical massage", body: "Slow pressure and warm oils in a quiet, cream-toned suite." },
                { title: "Restore facial", body: "Airy treatment pacing with soft botanical formulations." },
                { title: "Breath reset", body: "A short grounding session before or after bodywork." },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-stone-200/80 bg-[#faf8f4] p-6 shadow-[0_16px_40px_rgba(68,64,60,0.05)]"
                >
                  <h3 className="font-serif text-xl text-stone-800">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="studio" className="border-t border-stone-200/70 bg-emerald-50/50">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-12 sm:px-6">
              <p className="max-w-md text-sm text-stone-600">
                A calm niche demo — visually unlinked from the agency SaaS homepage.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact?package=Growth&business=Wellness"
                  className="inline-flex h-12 items-center rounded-full bg-stone-700 px-5 text-sm font-semibold text-emerald-50 hover:bg-stone-800"
                >
                  Request this blueprint
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-12 items-center rounded-full border border-stone-300 bg-white/70 px-5 text-sm font-medium text-stone-700 hover:bg-white"
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
