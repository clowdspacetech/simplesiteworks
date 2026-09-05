"use client";

import { motion } from "framer-motion";
import { Check, MapPin, Radio } from "lucide-react";

const GLASS =
  "rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md";

const float = (delay: number, y = 10) => ({
  animate: { y: [0, -y, 0] },
  transition: {
    duration: 5.2 + delay,
    repeat: Infinity,
    ease: [0.45, 0.05, 0.55, 0.95] as const,
    delay,
  },
});

export default function HeroVisual() {
  return (
    <div
      className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_30%_20%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(ellipse_at_85%_75%,rgba(34,211,238,0.1),transparent_45%),linear-gradient(160deg,#07090f_0%,#12151f_100%)] p-4 sm:p-7 lg:min-h-[520px] lg:flex-1"
      aria-label="Premium layered SaaS dashboard and device mockups for SimpleSiteWorks"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto min-h-[420px] w-full max-w-xl lg:max-w-none lg:min-h-[480px]">
        {/* Central laptop — client management dashboard */}
        <motion.div
          className="relative z-20 mx-auto w-full max-w-[520px] lg:absolute lg:left-1/2 lg:top-[46%] lg:w-[78%] lg:max-w-[540px] lg:-translate-x-1/2 lg:-translate-y-1/2"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="origin-center rotate-[-1.5deg] transition-transform duration-500 group-hover:rotate-[-0.5deg] group-hover:scale-[1.02]">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/15 bg-gradient-to-b from-zinc-200 to-zinc-400/80 p-[9px] shadow-2xl">
              <div className="overflow-hidden rounded-[0.9rem] bg-[#0c0e14]">
                <div className="flex h-8 items-center gap-1.5 border-b border-white/5 bg-[#141821] px-3">
                  <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  <div className="ml-3 h-4 flex-1 rounded-md border border-white/5 bg-white/5 text-[9px] leading-4 text-zinc-500">
                    &nbsp;&nbsp;simplesiteworks.app / dashboard
                  </div>
                </div>
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[#0f121a] via-[#121826] to-indigo-950/50 p-3 sm:p-4">
                  <div className="grid h-full grid-cols-12 gap-2">
                    <div className="col-span-3 hidden flex-col gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] p-2 sm:flex">
                      {["Overview", "Leads", "Bookings", "SEO"].map((item, i) => (
                        <div
                          key={item}
                          className={`rounded-lg px-2 py-1.5 text-[9px] font-semibold ${
                            i === 0 ? "bg-indigo-500/30 text-indigo-100" : "text-zinc-500"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="col-span-12 flex flex-col gap-2 sm:col-span-9">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
                            Client management
                          </p>
                          <p className="text-xs font-bold text-white sm:text-sm">Local lead pipeline</p>
                        </div>
                        <div className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
                          Live
                        </div>
                      </div>
                      <div className="grid flex-1 grid-cols-3 gap-2">
                        {[
                          { label: "Enquiries", value: "+128%" },
                          { label: "Booked", value: "42" },
                          { label: "Map rank", value: "#1" },
                        ].map((card) => (
                          <div
                            key={card.label}
                            className="rounded-xl border border-white/10 bg-white/[0.05] p-2 shadow-inner"
                          >
                            <p className="text-[8px] font-semibold tracking-wider text-zinc-500 uppercase">
                              {card.label}
                            </p>
                            <p className="mt-1 text-sm font-extrabold text-white sm:text-base">{card.value}</p>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-5 gap-1.5">
                        {[55, 70, 48, 88, 96].map((h, i) => (
                          <div key={i} className="flex h-12 items-end rounded-lg border border-white/5 bg-white/[0.03] px-1 pb-1">
                            <div
                              className="w-full rounded-sm bg-gradient-to-t from-indigo-600/70 to-cyan-300/90"
                              style={{ height: `${h}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.05)_50%,transparent_60%)]" />
                </div>
              </div>
            </div>
            <div className="mx-auto h-2.5 w-[90%] rounded-b-2xl bg-gradient-to-b from-zinc-400 to-zinc-600 shadow-lg" />
          </div>
        </motion.div>

        {/* Mobile — Live Signal Booking Confirmed */}
        <motion.div
          className={`absolute top-[6%] left-[2%] z-30 hidden w-[148px] p-2.5 sm:block lg:left-[1%] lg:top-[10%] lg:w-[160px] ${GLASS}`}
          {...float(0.15, 11)}
        >
          <div className="mb-2 flex items-center gap-1.5">
            <Radio className="h-3 w-3 text-emerald-300" />
            <p className="text-[9px] font-semibold tracking-wider text-white/60 uppercase">Live signal</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/15 bg-zinc-950/80 p-2.5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <div>
                <p className="text-[10px] font-bold leading-tight text-white">Booking Confirmed ✓</p>
                <p className="text-[9px] text-zinc-400">Today · 10:30</p>
              </div>
            </div>
            <motion.div
              className="mt-2 h-1 overflow-hidden rounded-full bg-white/10"
              initial={false}
            >
              <motion.div
                className="h-full rounded-full bg-emerald-400"
                animate={{ width: ["20%", "100%", "20%"] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile — Map SEO ranking */}
        <motion.div
          className={`absolute right-[2%] bottom-[8%] z-30 hidden w-[156px] p-2.5 md:block lg:right-[2%] lg:bottom-[12%] lg:w-[168px] ${GLASS}`}
          {...float(0.85, 9)}
        >
          <div className="mb-2 flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-cyan-300" />
            <p className="text-[9px] font-semibold tracking-wider text-white/60 uppercase">Local Map SEO</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/15 bg-zinc-950/80 p-2.5">
            <p className="text-[10px] font-bold text-white">Ranking signal</p>
            <p className="mt-0.5 text-[9px] text-zinc-400">“near me” · your city</p>
            <div className="mt-2 space-y-1">
              {[
                { place: "Your business", rank: "#1", hot: true },
                { place: "Competitor A", rank: "#2", hot: false },
                { place: "Competitor B", rank: "#3", hot: false },
              ].map((row) => (
                <div
                  key={row.place}
                  className={`flex items-center justify-between rounded-lg px-1.5 py-1 text-[9px] ${
                    row.hot ? "bg-cyan-500/20 text-cyan-100" : "bg-white/5 text-zinc-400"
                  }`}
                >
                  <span className="font-semibold">{row.place}</span>
                  <span className="font-bold">{row.rank}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
