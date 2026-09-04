"use client";

import { Check } from "lucide-react";

const CARD_SHELL =
  "absolute overflow-hidden rounded-xl border border-slate-100/80 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:z-50 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] hover:[animation-play-state:paused]";

export default function HeroVisual() {
  return (
    <div
      className="relative w-full min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] sm:min-h-[480px] lg:flex-1"
      aria-label="Interactive product feature canvas"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage: "radial-gradient(rgba(228,228,231,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      {/* Card 1 — Browser UI layout */}
      <div
        className={`${CARD_SHELL} left-[4%] top-[14%] z-10 h-[220px] w-[min(320px,74%)] animate-float-a sm:left-[10%] sm:top-[18%]`}
      >
        <div className="flex h-8 items-center gap-1.5 border-b border-slate-100 bg-slate-50/90 px-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <div className="ml-2 flex h-4 flex-1 items-center rounded-md border border-slate-200/80 bg-white px-2">
            <span className="truncate text-[9px] font-medium text-slate-400">simplesiteworks.com/preview</span>
          </div>
        </div>
        <div className="grid h-[calc(100%-2rem)] grid-cols-[72px_1fr] bg-white">
          <div className="space-y-2 border-r border-slate-100 bg-slate-50/70 p-2.5">
            <div className="h-2 w-10 rounded bg-indigo-200/80" />
            <div className="h-2 w-8 rounded bg-slate-200" />
            <div className="h-2 w-9 rounded bg-slate-200" />
            <div className="mt-4 h-8 rounded-lg bg-indigo-500/15" />
          </div>
          <div className="space-y-2 p-3">
            <div className="h-16 rounded-lg bg-gradient-to-br from-indigo-100 via-violet-50 to-cyan-50" />
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-8 rounded-md bg-slate-100" />
              <div className="h-8 rounded-md bg-slate-100" />
              <div className="h-8 rounded-md bg-slate-100" />
            </div>
            <div className="h-2 w-3/4 rounded bg-slate-200" />
            <div className="h-2 w-1/2 rounded bg-slate-100" />
          </div>
        </div>
      </div>

      {/* Card 2 — Booking calendar */}
      <div
        className={`${CARD_SHELL} right-[2%] top-[3%] z-20 h-[180px] w-[160px] animate-float-b sm:right-[5%] sm:top-[5%]`}
      >
        <div className="border-b border-slate-100 px-3 py-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Thu · Mar</p>
          <p className="text-sm font-bold text-slate-800">Appointment</p>
        </div>
        <div className="grid grid-cols-4 gap-1 px-2.5 py-2">
          {["12", "13", "14", "15"].map((day, i) => (
            <div
              key={day}
              className={`flex h-7 items-center justify-center rounded-md text-[10px] font-semibold ${
                i === 2 ? "bg-indigo-500 text-white" : "bg-slate-50 text-slate-500"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="space-y-1.5 px-2.5">
          <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1.5">
            <span className="text-[11px] font-semibold text-slate-700">10:00 AM</span>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500 px-1.5 py-0.5 text-[9px] font-bold text-white">
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
              Confirmed
            </span>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-2 py-1.5 text-[10px] text-slate-400">
            11:30 AM
          </div>
        </div>
      </div>

      {/* Card 3 — Reviews bubble */}
      <div
        className={`${CARD_SHELL} left-[2%] bottom-[5%] z-30 h-[110px] w-[200px] animate-float-c sm:left-[5%] sm:bottom-[8%]`}
      >
        <div className="flex h-full items-start gap-2.5 p-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 text-[11px] font-bold text-white">
            JR
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-0.5" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="h-3 w-3 fill-amber-400" aria-hidden>
                  <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.9l-4.94 2.6.94-5.49-4-3.9 5.53-.8L10 1.5z" />
                </svg>
              ))}
            </div>
            <p className="mt-1.5 text-[11px] font-medium leading-snug text-slate-700">
              &ldquo;Excellent service!&rdquo;
            </p>
            <p className="mt-1 text-[10px] text-slate-400">— Boiler Repair</p>
          </div>
        </div>
      </div>

      {/* Card 4 — Metrics badge */}
      <div
        className={`${CARD_SHELL} right-[5%] bottom-[5%] z-10 h-[140px] w-[140px] animate-float-d sm:right-[12%] sm:bottom-[10%]`}
      >
        <div className="flex h-full flex-col p-3">
          <div className="flex items-start justify-between gap-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">This week</p>
            <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600">
              +24%
            </span>
          </div>
          <p className="mt-2 text-[13px] font-bold leading-tight text-slate-800">Saved 5.5 Hours This Week</p>
          <svg viewBox="0 0 120 36" className="mt-auto w-full" aria-hidden>
            <defs>
              <linearGradient id="metricFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 28 C18 26, 24 18, 40 16 C56 14, 62 22, 78 12 C94 2, 104 8, 120 4 L120 36 L0 36 Z" fill="url(#metricFill)" />
            <path
              d="M0 28 C18 26, 24 18, 40 16 C56 14, 62 22, 78 12 C94 2, 104 8, 120 4"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
