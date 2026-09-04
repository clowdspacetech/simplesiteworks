"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Flame, Wine } from "lucide-react";

type PartySize = 2 | 4 | 6;

const SEATING: Record<PartySize, string[]> = {
  2: ["Window two-top · 18:30", "Bar ledge · 19:15", "Courtyard niche · 20:00"],
  4: ["Booth 3 · 19:00", "Chef's counter · 19:45", "Lounge four · 20:30"],
  6: ["Private banquette · 18:45", "Long table · 19:30", "Late lounge · 21:00"],
};

export default function GourmetBistroDemoPage() {
  const [party, setParty] = useState<PartySize>(2);
  const [seat, setSeat] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [reserved, setReserved] = useState(false);
  const [flashKey, setFlashKey] = useState(0);

  const options = useMemo(() => SEATING[party], [party]);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-neutral-950 font-sans text-neutral-100 antialiased">
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
        <header className="border-b border-white/10 bg-neutral-950">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-neutral-950">
                <Wine className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xl font-extrabold tracking-tight text-white">Gourmet Bistro & Social</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-400/90">
                  Moody dining · Late service
                </p>
              </div>
            </div>
            <nav className="flex gap-5 text-sm text-neutral-400">
              <a href="#plates" className="hover:text-amber-300">
                Plates
              </a>
              <a href="#reserve" className="hover:text-amber-300">
                Reserve
              </a>
              <a href="#bar" className="hover:text-amber-300">
                Bar
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className="relative overflow-hidden border-b border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
              alt="Fine dining plating close-up"
              fill
              className="object-cover opacity-35"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/50" />
            <div className="relative mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
                  <Flame className="h-3.5 w-3.5" />
                  Immersive dark dining
                </p>
                <h1 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Charcoal rooms. Amber glow. Tables that book themselves.
                </h1>
                <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-300">
                  A mouth-watering hospitality demo for fine dining, coffee houses, and cocktail bars — built to drive instant reservations.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <Image
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
                    alt="Cocktail mixology"
                    width={400}
                    height={280}
                    className="h-28 w-full rounded-2xl object-cover ring-1 ring-white/10 sm:h-32"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
                    alt="Restaurant ambience"
                    width={400}
                    height={280}
                    className="h-28 w-full rounded-2xl object-cover ring-1 ring-white/10 sm:h-32"
                  />
                </div>
              </div>

              <div
                id="reserve"
                className="rounded-2xl border border-white/10 bg-neutral-900/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Booking panel</p>
                <h2 className="mt-2 text-2xl font-extrabold text-white">Select your party</h2>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {([2, 4, 6] as PartySize[]).map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => {
                        setParty(size);
                        setSeat(null);
                        setReserved(false);
                        setFlashKey((k) => k + 1);
                      }}
                      className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${
                        party === size
                          ? "border-amber-400 bg-amber-500 text-neutral-950"
                          : "border-white/10 bg-neutral-950 text-neutral-300 hover:border-white/20"
                      }`}
                    >
                      {size === 6 ? "6+" : size} guests
                    </button>
                  ))}
                </div>

                <p className="mt-5 text-sm text-neutral-400">Available seating</p>
                <div key={flashKey} className="mt-2 animate-[pulse_0.7s_ease-in-out] space-y-2">
                  {options.map((option) => {
                    const active = seat === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSeat(option);
                          setReserved(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl border px-3 py-3 text-left text-sm font-semibold transition ${
                          active
                            ? "border-amber-400 bg-amber-500/15 text-amber-100"
                            : "border-white/10 bg-neutral-950 text-neutral-300 hover:border-white/20"
                        }`}
                      >
                        <span>{option}</span>
                        {active && <span className="text-xs text-amber-300">Selected</span>}
                      </button>
                    );
                  })}
                </div>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Reservation name"
                  className="mt-4 h-11 w-full rounded-xl border border-white/10 bg-neutral-950 px-3 text-sm text-white outline-none focus:border-amber-400"
                />

                <button
                  type="button"
                  onClick={() => seat && setReserved(true)}
                  className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-neutral-950 transition hover:bg-amber-400"
                >
                  Hold this table
                </button>

                {reserved && seat && (
                  <p className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
                    Held for {party === 6 ? "6+" : party}
                    {name ? ` · ${name}` : ""} · {seat}
                  </p>
                )}
              </div>
            </div>
          </section>

          <section id="plates" className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-extrabold text-white">Signature plates</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {["Charred citrus scallops", "Ember short rib", "Gold-leaf espresso martini"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-neutral-900 p-5">
                  <h3 className="font-bold text-amber-200">{item}</h3>
                  <p className="mt-2 text-sm text-neutral-400">Sensory plating for a dark-lounge service floor.</p>
                </div>
              ))}
            </div>
          </section>

          <section id="bar" className="border-t border-white/10 bg-black/50">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-10 sm:px-6">
              <p className="text-sm text-neutral-400">Service Tue–Sun · 17:00–23:30</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact?package=Growth&business=Hospitality"
                  className="inline-flex h-11 items-center rounded-full bg-amber-500 px-4 text-sm font-bold text-neutral-950 hover:bg-amber-400"
                >
                  Request this blueprint
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-11 items-center rounded-full border border-white/15 px-4 text-sm font-semibold text-neutral-200 hover:bg-white/5"
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
