"use client";

import Link from "next/link";
import { useState } from "react";
import { Leaf, Sparkles } from "lucide-react";

const SLOTS = ["9:00 AM", "11:30 AM", "3:00 PM"] as const;
type Slot = (typeof SLOTS)[number];

export default function WellnessClinicDemoPage() {
  const [slot, setSlot] = useState<Slot | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [booked, setBooked] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!slot || !name.trim() || !email.trim()) return;
    setBooked(true);
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#f6f3ee] text-stone-800 antialiased">
      <div className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f6f3ee]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <p className="text-xs font-medium text-stone-500 sm:text-sm">
            Viewing SimpleSiteWorks Niche Template Demo.
          </p>
          <Link
            href="/"
            className="inline-flex h-9 shrink-0 items-center rounded-full border border-stone-300 bg-white/70 px-3 text-xs font-medium text-stone-700 transition hover:bg-white sm:px-4"
          >
            ← Back to Main Project
          </Link>
        </div>
      </div>

      <header className="border-b border-stone-200/70 bg-emerald-50/40">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-700 text-emerald-50">
              <Leaf className="h-5 w-5" />
            </span>
            <div>
              <p className="font-serif text-xl tracking-tight text-stone-800">Willow & Sage</p>
              <p className="text-xs tracking-[0.18em] text-stone-500 uppercase">Mind & body clinic</p>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-stone-600">
            <a href="#treatments" className="hover:text-stone-900">
              Treatments
            </a>
            <a href="#book" className="hover:text-stone-900">
              Book
            </a>
            <a href="#rituals" className="hover:text-stone-900">
              Rituals
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-stone-200/70 bg-emerald-50/40">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div>
              <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-emerald-800/80 uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                Soft reset · Local sanctuary
              </p>
              <h1 className="mt-5 max-w-lg font-serif text-4xl leading-tight tracking-tight text-stone-800 sm:text-5xl">
                Space to breathe, restore, and return to yourself.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-stone-600">
                A calm booking experience for massage, facial therapy, and guided recovery — designed to feel nothing like a SaaS marketing site.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-500">
                <span className="rounded-full border border-stone-200 bg-[#faf8f4] px-3 py-1.5">Organic oils</span>
                <span className="rounded-full border border-stone-200 bg-[#faf8f4] px-3 py-1.5">Quiet rooms</span>
                <span className="rounded-full border border-stone-200 bg-[#faf8f4] px-3 py-1.5">Same-week slots</span>
              </div>
            </div>

            <div
              id="book"
              className="rounded-3xl border border-stone-200/80 bg-[#faf8f4] p-6 shadow-[0_24px_60px_rgba(68,64,60,0.08)] sm:p-8"
            >
              <p className="text-xs tracking-[0.18em] text-stone-500 uppercase">Reserve a session</p>
              <h2 className="mt-2 font-serif text-2xl text-stone-800">Choose a time that feels right</h2>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
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
                          ? "border-emerald-300 bg-emerald-100/80 text-emerald-900 shadow-sm"
                          : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>

              {slot && (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4 border-t border-stone-200/80 pt-6">
                  <p className="text-sm text-stone-600">
                    Selected: <span className="font-semibold text-stone-800">{slot}</span>
                  </p>
                  <div>
                    <label className="mb-1.5 block text-sm text-stone-600" htmlFor="wellness-name">
                      Full name
                    </label>
                    <input
                      id="wellness-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 w-full rounded-2xl border border-stone-200 bg-white px-3.5 text-sm text-stone-800 outline-none focus:border-emerald-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-stone-600" htmlFor="wellness-email">
                      Email
                    </label>
                    <input
                      id="wellness-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 w-full rounded-2xl border border-stone-200 bg-white px-3.5 text-sm text-stone-800 outline-none focus:border-emerald-300"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-stone-600" htmlFor="wellness-note">
                      Intention (optional)
                    </label>
                    <textarea
                      id="wellness-note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={3}
                      className="w-full rounded-2xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-800 outline-none focus:border-emerald-300"
                      placeholder="What would you like this session to hold?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-stone-700 text-sm font-semibold text-emerald-50 transition hover:bg-stone-800"
                  >
                    Complete booking
                  </button>
                  {booked && (
                    <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                      Beautiful — your {slot} session is reserved. We&apos;ll send a calm confirmation to {email}.
                    </p>
                  )}
                </form>
              )}

              {!slot && (
                <p className="mt-6 text-sm leading-relaxed text-stone-500">
                  Select a time above to reveal the booking form.
                </p>
              )}
            </div>
          </div>
        </section>

        <section id="treatments" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl tracking-tight text-stone-800">Signature treatments</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { title: "Deep restoration massage", body: "Slow pressure work for tension release and quiet recovery." },
              { title: "Botanical facial", body: "Cream-toned ritual with soft light and unhurried pacing." },
              { title: "Guided breath reset", body: "A short grounding session before or after bodywork." },
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

        <section id="rituals" className="border-t border-stone-200/70 bg-emerald-50/40">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
            <h2 className="font-serif text-3xl tracking-tight text-stone-800">A quieter kind of conversion</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
              This niche demo uses cream surfaces, sage accents, and serif headlines so prospects instantly feel a different brand world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
                Back to SimpleSiteWorks
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
