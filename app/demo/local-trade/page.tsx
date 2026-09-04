"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Check, Phone, Star, X } from "lucide-react";

type JobType = "Emergency Call-out" | "Boiler Service" | "Routine Repair";

const JOB_PRICES: Record<JobType, number> = {
  "Emergency Call-out": 124,
  "Boiler Service": 89,
  "Routine Repair": 65,
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const DATES = [10, 11, 12, 13, 14];

export default function LocalTradeDemoPage() {
  const [jobType, setJobType] = useState<JobType>("Emergency Call-out");
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");
  const [confirmed, setConfirmed] = useState(false);

  const estimate = useMemo(() => JOB_PRICES[jobType], [jobType]);

  function handleBook() {
    setConfirmed(true);
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-white text-slate-900">
      {/* Persistent return frame */}
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <p className="text-xs font-medium text-slate-300 sm:text-sm">
            Viewing SimpleSiteWorks Template Demo.
          </p>
          <Link
            href="/"
            className="inline-flex h-9 shrink-0 items-center rounded-full border border-white/15 bg-white/5 px-3 text-xs font-semibold text-white transition hover:bg-white/10 sm:px-4 sm:text-sm"
          >
            ← Return to main site
          </Link>
        </div>
      </div>

      {/* Mock client site */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <p className="text-lg font-extrabold tracking-tight text-slate-900">The Local Trade Authority</p>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Insured · Local · Same-day</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-slate-900">
              Services
            </a>
            <a href="#gallery" className="hover:text-slate-900">
              Gallery
            </a>
            <a href="#reviews" className="hover:text-slate-900">
              Reviews
            </a>
          </nav>
          <a
            href="tel:+441234567890"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
          >
            <Phone className="h-4 w-4" />
            Call 24/7
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
            <div>
              <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                Reliable · Local · Insured
              </span>
              <h1 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Fast, Reliable Local Engineering when you need it most
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
                Emergency call-outs, boiler servicing, and routine repairs — quoted upfront with a booking that
                confirms in seconds.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  4.9 average rating
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">Same-day slots</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Upfront instant quote</p>
              <h2 className="mt-2 text-xl font-extrabold text-slate-900">Book your engineer</h2>

              <label className="mt-5 block text-sm font-medium text-slate-700">Job type</label>
              <div className="mt-2 grid gap-2">
                {(Object.keys(JOB_PRICES) as JobType[]).map((job) => {
                  const active = job === jobType;
                  return (
                    <button
                      key={job}
                      type="button"
                      onClick={() => setJobType(job)}
                      className={`rounded-xl border px-3 py-3 text-left text-sm font-semibold transition ${
                        active
                          ? "border-indigo-400 bg-indigo-50 text-indigo-900"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {job}
                    </button>
                  );
                })}
              </div>

              <p className="mt-5 text-sm font-medium text-slate-700">Choose a day</p>
              <div className="mt-2 grid grid-cols-5 gap-2">
                {DAYS.map((day, i) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(i)}
                    className={`rounded-xl border px-1 py-2 text-center transition ${
                      selectedDay === i
                        ? "border-indigo-400 bg-indigo-500 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span className="block text-[10px] uppercase opacity-80">{day}</span>
                    <span className="block text-sm font-bold">{DATES[i]}</span>
                  </button>
                ))}
              </div>

              <p className="mt-5 text-sm font-medium text-slate-700">Time slot</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {["09:00 AM", "10:00 AM", "13:30 PM", "16:00 PM"].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                      selectedSlot === slot
                        ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-end justify-between gap-3 border-t border-slate-100 pt-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Estimated from</p>
                  <p
                    key={estimate}
                    className="font-display text-3xl font-extrabold tracking-tight text-slate-900 transition-all duration-300"
                  >
                    £{estimate}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleBook}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Book now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { title: "Emergency call-outs", body: "Rapid response for leaks, faults, and no-heat situations." },
              { title: "Boiler servicing", body: "Annual safety checks with clear certificates and aftercare." },
              { title: "Routine repairs", body: "Quoted jobs with photo proof and tidy workmanship." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Recent work</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["from-slate-200 to-slate-300", "from-indigo-100 to-cyan-100", "from-amber-100 to-orange-100"].map(
                (tone, i) => (
                  <div
                    key={tone}
                    className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${tone} flex items-end p-4`}
                  >
                    <span className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      Job #{120 + i}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Reviews</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { quote: "Excellent service!", detail: "Boiler Repair — arrived same day and explained everything." },
              { quote: "Clear price before they started.", detail: "Emergency Call-out — no surprises on the invoice." },
            ].map((item) => (
              <blockquote key={item.quote} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-3 text-base font-semibold text-slate-900">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
              </blockquote>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact?package=Growth&business=Trades"
              className="inline-flex h-12 items-center rounded-full bg-indigo-600 px-5 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Request this style
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Back to SimpleSiteWorks
            </Link>
          </div>
        </section>
      </main>

      {confirmed && (
        <div className="fixed inset-0 z-[110] flex items-end justify-center bg-slate-950/45 p-4 backdrop-blur-sm sm:items-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-success-title"
            className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Check className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setConfirmed(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <h3 id="booking-success-title" className="mt-4 text-xl font-extrabold text-slate-900">
              Booking confirmed
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Your <span className="font-semibold text-slate-800">{jobType}</span> is reserved for{" "}
              <span className="font-semibold text-slate-800">
                {DAYS[selectedDay]} {DATES[selectedDay]} · {selectedSlot}
              </span>
              . Estimated from <span className="font-semibold text-slate-800">£{estimate}</span>.
            </p>
            <button
              type="button"
              onClick={() => setConfirmed(false)}
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Continue exploring demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
