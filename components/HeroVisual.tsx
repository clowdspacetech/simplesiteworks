"use client";

import Image from "next/image";

const SITE_PREVIEW =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";

const FLOAT_CARD =
  "rounded-xl border border-slate-100 bg-white p-3 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:[animation-play-state:paused]";

export default function HeroVisual() {
  return (
    <div
      className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10)_0%,transparent_68%)] p-4 sm:p-6 lg:flex-1 lg:min-h-[480px]"
      aria-label="Multi-device website preview canvas"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(228,228,231,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center gap-5 transition-transform duration-300 group-hover:scale-[1.02] lg:max-w-none lg:block lg:min-h-[440px]">
        {/* Primary multi-device focal point */}
        <div className="relative w-full max-w-[520px] transition-transform duration-300 hover:scale-[1.02] hover:[animation-play-state:paused] lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:w-[78%] lg:max-w-[540px] lg:-translate-x-1/2 lg:-translate-y-[52%]">
          {/* Laptop frame */}
          <div className="overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="flex h-7 items-center gap-1.5 border-b border-slate-700 bg-slate-950 px-3">
              <span className="h-2 w-2 rounded-full bg-slate-600" />
              <span className="h-2 w-2 rounded-full bg-slate-600" />
              <span className="h-2 w-2 rounded-full bg-slate-600" />
              <div className="ml-2 h-3.5 flex-1 rounded-md border border-slate-700/80 bg-slate-900" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
              <Image
                src={SITE_PREVIEW}
                alt="Local business website homepage on desktop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 540px"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent p-3 sm:p-4">
                <div className="h-2 w-24 rounded-full bg-white/80" />
                <div className="mt-2 h-1.5 w-40 rounded-full bg-white/40" />
                <div className="mt-3 inline-flex rounded-full bg-indigo-500 px-2.5 py-1 text-[9px] font-semibold text-white">
                  Book online
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-2 w-[88%] rounded-b-xl bg-slate-800 shadow-inner" />
          <div className="mx-auto h-1.5 w-[96%] rounded-b-2xl bg-slate-700" />

          {/* Smartphone overlapping lower-right */}
          <div className="absolute -bottom-4 right-2 z-20 h-[200px] w-[100px] rounded-[24px] border-[3px] border-slate-800 bg-slate-900 p-1.5 shadow-2xl sm:-bottom-3 sm:right-3 sm:h-[220px] sm:w-[110px] lg:-bottom-2 lg:right-0">
            <div className="relative h-full overflow-hidden rounded-[18px] bg-slate-950">
              <div className="absolute left-1/2 top-1 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-800" />
              <Image
                src={SITE_PREVIEW}
                alt="Same website homepage on mobile"
                fill
                className="object-cover object-top"
                sizes="110px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-2">
                <div className="h-1.5 w-12 rounded-full bg-white/80" />
                <div className="mt-1.5 h-1 w-16 rounded-full bg-white/35" />
                <div className="mt-2 rounded-full bg-indigo-500 px-2 py-0.5 text-center text-[7px] font-semibold text-white">
                  Book
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top-right: Automated scheduling widget */}
        <div
          className={`${FLOAT_CARD} w-full max-w-[220px] animate-float-b self-end lg:absolute lg:right-[2%] lg:top-[6%] lg:z-30 lg:w-[196px] lg:self-auto`}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Automated scheduling
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">Booking confirmed</p>
          <div className="mt-2.5 grid grid-cols-7 gap-1">
            {Array.from({ length: 14 }, (_, i) => {
              const day = i + 1;
              const active = day === 11;
              return (
                <div
                  key={day}
                  className={`flex h-5 items-center justify-center rounded text-[9px] font-semibold ${
                    active ? "bg-indigo-500 text-white" : "bg-slate-50 text-slate-500"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="mt-2.5 flex items-center justify-between rounded-lg border border-emerald-100 bg-emerald-50 px-2 py-1.5">
            <span className="text-[11px] font-semibold text-slate-700">11 Mar · 10:00</span>
            <span className="text-[10px] font-bold text-emerald-600">Confirmed ✓</span>
          </div>
        </div>

        {/* Bottom-left: 5-star review card */}
        <div
          className={`${FLOAT_CARD} w-full max-w-[240px] animate-float-c self-start lg:absolute lg:bottom-[6%] lg:left-[2%] lg:z-30 lg:w-[220px] lg:self-auto`}
        >
          <div className="flex items-center gap-0.5" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-amber-400" aria-hidden>
                <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.9l-4.94 2.6.94-5.49-4-3.9 5.53-.8L10 1.5z" />
              </svg>
            ))}
          </div>
          <p className="mt-2 text-[12px] font-semibold leading-snug text-slate-800">
            &ldquo;Perfect booking flow!&rdquo;
          </p>
          <p className="mt-1 text-[11px] text-slate-500">— Cafe Owner</p>
        </div>
      </div>
    </div>
  );
}
