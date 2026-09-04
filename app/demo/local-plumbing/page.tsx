"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Phone, Shield, Wrench } from "lucide-react";

type IssueType = "Boiler Repair" | "Leaking Pipe" | "Drainage";

const DISPATCH: Record<IssueType, string> = {
  "Boiler Repair": "Estimated Dispatch: 15-30 Mins",
  "Leaking Pipe": "Estimated Dispatch: 20-40 Mins",
  Drainage: "Estimated Dispatch: 30-45 Mins",
};

export default function LocalPlumbingDemoPage() {
  const [issue, setIssue] = useState<IssueType>("Boiler Repair");
  const [postcode, setPostcode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => DISPATCH[issue], [issue]);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-900 font-sans text-slate-100 antialiased">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <p className="text-xs font-medium text-slate-300 sm:text-sm">
            Viewing SimpleSiteWorks Niche Template Demo.
          </p>
          <Link
            href="/"
            className="inline-flex h-9 shrink-0 items-center rounded-md border border-white/20 bg-white/5 px-3 text-xs font-bold tracking-wide text-white uppercase transition hover:bg-white/10 sm:px-4"
          >
            ← Back to Main Project
          </Link>
        </div>
      </div>

      {/* Emergency header */}
      <div className="border-b border-orange-500/40 bg-orange-600">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <p className="text-sm font-black tracking-[0.18em] text-white uppercase">
            Emergency 24/7 Callout
          </p>
          <a
            href="tel:+448001234567"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-bold text-white shadow-lg shadow-orange-900/40 transition hover:bg-black"
          >
            <Phone className="h-4 w-4 text-orange-400" />
            Call Now · 0800 123 4567
          </a>
        </div>
      </div>

      <header className="border-b border-slate-700 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-orange-600 text-white">
              <Wrench className="h-5 w-5" />
            </span>
            <div>
              <p className="text-lg font-black tracking-tight text-white uppercase">Ironline Plumbing</p>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-400 uppercase">
                Heavy-duty local engineers
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-bold tracking-wider text-slate-300 uppercase md:flex">
            <a href="#services" className="hover:text-orange-400">
              Services
            </a>
            <a href="#coverage" className="hover:text-orange-400">
              Coverage
            </a>
            <a href="#dispatch" className="hover:text-orange-400">
              Dispatch
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-800 bg-slate-900">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.18),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md border border-orange-500/40 bg-orange-600/10 px-3 py-1.5 text-xs font-bold tracking-wider text-orange-300 uppercase">
                <Shield className="h-3.5 w-3.5" />
                Gas Safe · Fully Insured
              </div>
              <h1 className="mt-5 max-w-xl text-4xl font-black tracking-tight text-white uppercase sm:text-5xl">
                Fast. Rugged. On-site when it matters.
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300">
                Industrial-grade plumbing response for boilers, leaks, and drainage failures — quoted before the van leaves the yard.
              </p>
              <ul className="mt-6 space-y-2 text-sm font-semibold text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Same-day emergency attendance
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Fixed-price callouts, no soft quotes
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Local engineers across your postcode
                </li>
              </ul>
            </div>

            <div
              id="dispatch"
              className="rounded-md border border-slate-700 bg-slate-950 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:p-6"
            >
              <p className="text-xs font-black tracking-[0.2em] text-orange-400 uppercase">Dispatch request</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-white uppercase">Get an engineer out</h2>

              <label className="mt-5 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                Issue type
              </label>
              <select
                value={issue}
                onChange={(e) => setIssue(e.target.value as IssueType)}
                className="mt-2 h-12 w-full rounded-md border border-slate-600 bg-slate-900 px-3 text-sm font-semibold text-white outline-none focus:border-orange-500"
              >
                <option>Boiler Repair</option>
                <option>Leaking Pipe</option>
                <option>Drainage</option>
              </select>

              <label className="mt-4 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                Postcode
              </label>
              <input
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                placeholder="e.g. SW1A 1AA"
                className="mt-2 h-12 w-full rounded-md border border-slate-600 bg-slate-900 px-3 text-sm font-semibold text-white outline-none placeholder:text-slate-500 focus:border-orange-500"
              />

              <div className="mt-5 rounded-md border border-orange-500/30 bg-orange-600/10 px-4 py-3">
                <p className="text-[11px] font-bold tracking-wider text-orange-300 uppercase">Live estimate</p>
                <p key={estimate} className="mt-1 text-lg font-black text-white transition-all duration-300">
                  {estimate}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-md bg-orange-600 text-sm font-black tracking-wide text-white uppercase transition hover:bg-orange-500"
              >
                Request emergency dispatch
              </button>

              {submitted && (
                <p className="mt-3 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-300">
                  Request received{postcode ? ` for ${postcode}` : ""}. An engineer will confirm shortly.
                </p>
              )}
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-3">
            {[
              { title: "Boiler repair", body: "No-heat callouts with parts on the van and clear pricing." },
              { title: "Leak containment", body: "Stop the water first, then fix — documented photo proof." },
              { title: "Drainage clear", body: "Jetting and CCTV options for stubborn blockages." },
            ].map((item) => (
              <div key={item.title} className="rounded-md border border-slate-800 bg-slate-900 p-5">
                <h3 className="text-sm font-black tracking-wider text-orange-400 uppercase">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="coverage" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-black tracking-tight text-white uppercase">Coverage grid</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Built for high-intent emergency searchers — this demo shows how a trade brand can feel nothing like the agency that built it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact?package=Growth&business=Trades"
              className="inline-flex h-12 items-center rounded-md bg-orange-600 px-5 text-sm font-black tracking-wide text-white uppercase hover:bg-orange-500"
            >
              Request this blueprint
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center rounded-md border border-slate-600 px-5 text-sm font-bold text-slate-200 hover:bg-slate-800"
            >
              Back to SimpleSiteWorks
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
