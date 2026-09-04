"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Phone, Shield, Truck } from "lucide-react";

type Issue = "Boiler Leak" | "Burst Pipe" | "Blocked Drain";

const ETA: Record<Issue, string> = {
  "Boiler Leak": "Emergency Dispatch: 15-20 Mins",
  "Burst Pipe": "Emergency Dispatch: 20-30 Mins",
  "Blocked Drain": "Emergency Dispatch: 30-45 Mins",
};

export default function LocalPlumbingDemoPage() {
  const [issue, setIssue] = useState<Issue>("Boiler Leak");
  const [postcode, setPostcode] = useState("");
  const [sent, setSent] = useState(false);
  const banner = useMemo(() => ETA[issue], [issue]);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-900 font-sans text-slate-100 antialiased [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:32px_32px]">
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
        <div className="border-b border-orange-500/40 bg-orange-600">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <p className="text-sm font-black tracking-[0.16em] text-white uppercase">
              Emergency 24/7 Callout Active
            </p>
            <a
              href="tel:+448001112233"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-bold text-white transition hover:bg-black"
            >
              <Phone className="h-4 w-4 text-orange-400" />
              Call 0800 111 2233
            </a>
          </div>
        </div>

        <header className="border-b border-slate-700 bg-slate-950">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-orange-600">
                <Truck className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="text-lg font-black tracking-tight text-white uppercase">
                  The Local Trade Authority
                </p>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  Industrial plumbing response
                </p>
              </div>
            </div>
            <nav className="hidden gap-6 text-xs font-bold tracking-wider text-slate-300 uppercase md:flex">
              <a href="#dispatch" className="hover:text-orange-400">
                Dispatch
              </a>
              <a href="#fleet" className="hover:text-orange-400">
                Fleet
              </a>
              <a href="#coverage" className="hover:text-orange-400">
                Coverage
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className="border-b border-slate-800 bg-slate-900">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-orange-500/40 bg-orange-600/10 px-3 py-1.5 text-xs font-bold tracking-wider text-orange-300 uppercase">
                  <Shield className="h-3.5 w-3.5" />
                  Gas Safe · Fully Insured
                </div>
                <h1 className="mt-5 text-4xl font-black tracking-tight text-white uppercase sm:text-5xl">
                  Rugged engineers. Rapid dispatch. Zero soft talk.
                </h1>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300">
                  High-visibility trade framework for leaks, boilers, and drainage — built to convert emergency searchers into booked callouts.
                </p>
                <div className="relative mt-8 overflow-hidden rounded-md border border-slate-700">
                  <Image
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
                    alt="Service vehicle and industrial plumbing tools"
                    width={900}
                    height={560}
                    className="h-56 w-full object-cover sm:h-64"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent p-4">
                    <p className="text-xs font-bold tracking-wider text-orange-300 uppercase">
                      On-van parts · Same-day attendance
                    </p>
                  </div>
                </div>
              </div>

              <div
                id="dispatch"
                className="rounded-md border border-slate-700 bg-slate-950 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:p-6"
              >
                <p className="text-xs font-black tracking-[0.2em] text-orange-400 uppercase">
                  Real-time emergency selector
                </p>
                <h2 className="mt-2 text-2xl font-black text-white uppercase">Request dispatch</h2>

                <label className="mt-5 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Issue type
                </label>
                <select
                  value={issue}
                  onChange={(e) => {
                    setIssue(e.target.value as Issue);
                    setSent(false);
                  }}
                  className="mt-2 h-12 w-full rounded-md border border-slate-600 bg-slate-900 px-3 text-sm font-semibold text-white outline-none focus:border-orange-500"
                >
                  <option>Boiler Leak</option>
                  <option>Burst Pipe</option>
                  <option>Blocked Drain</option>
                </select>

                <label className="mt-4 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Postcode
                </label>
                <input
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                  placeholder="e.g. B1 1AA"
                  className="mt-2 h-12 w-full rounded-md border border-slate-600 bg-slate-900 px-3 text-sm font-semibold text-white outline-none placeholder:text-slate-500 focus:border-orange-500"
                />

                <div
                  key={banner}
                  className="mt-5 rounded-md border border-orange-500/40 bg-orange-600/15 px-4 py-3 transition-all duration-300"
                >
                  <p className="text-[11px] font-bold tracking-wider text-orange-300 uppercase">ETA banner</p>
                  <p className="mt-1 text-lg font-black text-white">{banner}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setSent(true)}
                  className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-md bg-orange-600 text-sm font-black tracking-wide text-white uppercase transition hover:bg-orange-500"
                >
                  Confirm emergency intake
                </button>
                {sent && (
                  <p className="mt-3 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-300">
                    Intake logged{postcode ? ` for ${postcode}` : ""}. Dispatch desk will confirm shortly.
                  </p>
                )}
              </div>
            </div>
          </section>

          <section id="fleet" className="border-b border-slate-800 bg-slate-950">
            <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-3">
              {[
                { title: "Boiler response", body: "Leak containment and no-heat recovery with parts on the van." },
                { title: "Pipework rescue", body: "Burst isolation, drying guidance, and documented photo proof." },
                { title: "Drainage clear", body: "Jetting-ready crews for blocked commercial and domestic lines." },
              ].map((item) => (
                <div key={item.title} className="rounded-md border border-slate-800 bg-slate-900 p-5">
                  <h3 className="text-sm font-black tracking-wider text-orange-400 uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="coverage" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">Coverage grid</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              A standalone trade brand — not a reskin of the agency platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?package=Growth&business=Trades"
                className="inline-flex h-12 items-center rounded-md bg-orange-600 px-5 text-sm font-black uppercase tracking-wide text-white hover:bg-orange-500"
              >
                Request this blueprint
              </Link>
              <Link
                href="/"
                className="inline-flex h-12 items-center rounded-md border border-slate-600 px-5 text-sm font-bold text-slate-200 hover:bg-slate-800"
              >
                Return to Agency Home
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
