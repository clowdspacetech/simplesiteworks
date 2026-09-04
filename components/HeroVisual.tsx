"use client";

const CARD =
  "overflow-hidden rounded-xl border border-slate-100 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:z-50 hover:scale-105 hover:shadow-[0_28px_60px_rgba(99,102,241,0.18)] hover:[animation-play-state:paused]";

export default function HeroVisual() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] p-4 sm:min-h-[480px] sm:p-6 lg:flex-1"
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

      {/* Stacked on small screens; absolute floating canvas from ~968px */}
      <div className="relative z-10 grid grid-cols-1 gap-4 min-[968px]:block min-[968px]:min-h-[448px]">
        {/* Card 1 — Main browser layout */}
        <div
          className={`${CARD} w-full animate-float-a min-[968px]:absolute min-[968px]:left-[8%] min-[968px]:top-[14%] min-[968px]:z-10 min-[968px]:h-[236px] min-[968px]:w-[320px] min-[968px]:p-0`}
        >
          <div className="flex h-8 items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#28C840]" />
            <div className="ml-2 flex h-4 min-w-0 flex-1 items-center rounded-md border border-slate-200/80 bg-white px-2">
              <span className="truncate text-[9px] font-medium text-slate-400">
                app.simplesiteworks.com/dashboard
              </span>
            </div>
          </div>
          <div className="grid grid-cols-[84px_1fr] gap-3 p-4">
            <div className="space-y-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 text-[11px] font-bold text-white shadow-sm">
                SS
              </div>
              <div className="h-2 w-12 rounded-full bg-slate-200" />
              <div className="h-2 w-9 rounded-full bg-slate-100" />
              <div className="mt-3 h-10 rounded-lg bg-emerald-50 ring-1 ring-emerald-200/70" />
            </div>
            <div className="space-y-2.5">
              <div className="h-3 w-28 rounded-full bg-slate-800/90" />
              <div className="h-2 w-full rounded-full bg-slate-200" />
              <div className="h-2 w-5/6 rounded-full bg-slate-100" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-12 rounded-lg bg-slate-50 ring-1 ring-slate-100" />
                <div className="h-12 rounded-lg bg-indigo-50 ring-1 ring-indigo-100" />
                <div className="h-12 rounded-lg bg-slate-50 ring-1 ring-slate-100" />
              </div>
              <div className="h-8 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-200/60" />
            </div>
          </div>
        </div>

        {/* Card 2 — Booking calendar */}
        <div
          className={`${CARD} w-full animate-float-b min-[968px]:absolute min-[968px]:right-[4%] min-[968px]:top-[4%] min-[968px]:z-20 min-[968px]:w-[196px]`}
        >
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">March</p>
              <p className="text-sm font-bold text-slate-900">Book a slot</p>
            </div>
          </div>

          <div className="mb-1.5 grid grid-cols-7 gap-1 text-center text-[9px] font-semibold uppercase text-slate-400">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={`${d}-${i}`}>{d}</span>
            ))}
          </div>
          <div className="relative grid grid-cols-7 gap-1">
            {Array.from({ length: 21 }, (_, i) => {
              const day = i + 1;
              const active = day === 14;
              return (
                <div key={day} className="relative flex flex-col items-center">
                  <div
                    className={`flex h-6 w-full items-center justify-center rounded-md text-[10px] font-semibold ${
                      active ? "bg-indigo-500 text-white shadow-sm shadow-indigo-200" : "bg-slate-50 text-slate-600"
                    }`}
                  >
                    {day}
                  </div>
                  {active && (
                    <span className="mt-1 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  )}
                </div>
              );
            })}
            <span className="absolute -right-1 top-8 rounded-full bg-emerald-500 px-2 py-0.5 text-[9px] font-bold text-white shadow-md shadow-emerald-200/80">
              Confirmed ✓
            </span>
          </div>
          <div className="mt-3 rounded-lg border border-indigo-100 bg-indigo-50/70 px-2.5 py-2 text-[11px] font-semibold text-indigo-800">
            14 Mar · 10:00 AM
          </div>
        </div>

        {/* Card 3 — Social trust bubble */}
        <div
          className={`${CARD} w-full animate-float-c min-[968px]:absolute min-[968px]:bottom-[7%] min-[968px]:left-[4%] min-[968px]:z-30 min-[968px]:w-[240px]`}
        >
          <div className="flex items-start gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 ring-1 ring-slate-200"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2.25c-3.6 0-6.75 1.8-6.75 4.05V20h13.5v-1.7c0-2.25-3.15-4.05-6.75-4.05Z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-0.5" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-amber-400" aria-hidden>
                    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.9l-4.94 2.6.94-5.49-4-3.9 5.53-.8L10 1.5z" />
                  </svg>
                ))}
              </div>
              <p className="mt-1.5 text-[12px] font-semibold leading-snug text-slate-800">
                &ldquo;Emergency team arrived in 20 minutes!&rdquo;
              </p>
              <p className="mt-1 text-[11px] text-slate-500">— Boiler Fix</p>
            </div>
          </div>
        </div>

        {/* Card 4 — Analytics tracker */}
        <div
          className={`${CARD} w-full animate-float-d min-[968px]:absolute min-[968px]:bottom-[8%] min-[968px]:right-[10%] min-[968px]:z-10 min-[968px]:w-[168px]`}
        >
          <div className="flex items-start justify-between gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Revenue</p>
            <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 ring-1 ring-emerald-200">
              +42%
            </span>
          </div>
          <p className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">£4,250</p>
          <p className="mt-0.5 text-[11px] font-medium text-slate-500">Generated Revenue</p>
          <svg viewBox="0 0 140 48" className="mt-3 w-full" aria-hidden>
            <defs>
              <linearGradient id="heroMetricFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 40 C20 38, 28 28, 44 24 C60 20, 68 32, 86 18 C104 4, 118 12, 140 6 L140 48 L0 48 Z"
              fill="url(#heroMetricFill)"
            />
            <path
              d="M0 40 C20 38, 28 28, 44 24 C60 20, 68 32, 86 18 C104 4, 118 12, 140 6"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
