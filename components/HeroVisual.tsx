"use client";

import { motion } from "framer-motion";
import { Check, TrendingUp, Zap } from "lucide-react";

const GLASS =
  "rounded-2xl border border-white/10 bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-[16px]";

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
      className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_30%_20%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(245,158,11,0.08),transparent_50%),linear-gradient(160deg,#0b0d14_0%,#12141c_100%)] p-5 sm:p-8 lg:min-h-[500px] lg:flex-1"
      aria-label="Premium interactive website canvas"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center lg:max-w-none lg:block lg:min-h-[460px]">
        {/* Tilted clay/matte desktop viewport */}
        <motion.div
          className="relative w-full max-w-[540px] perspective-[1400px] lg:absolute lg:left-[46%] lg:top-1/2 lg:z-10 lg:w-[82%] lg:max-w-[560px] lg:-translate-x-1/2 lg:-translate-y-[54%]"
          initial={{ opacity: 0, y: 24, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="origin-center rotate-[-2.5deg] transition-transform duration-500 group-hover:rotate-[-1deg] group-hover:scale-[1.015] [transform-style:preserve-3d]">
            <div className="overflow-hidden rounded-[1.35rem] border border-white/12 bg-gradient-to-b from-zinc-200/90 to-zinc-300/70 p-[10px] shadow-[0_40px_100px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.45)]">
              <div className="overflow-hidden rounded-[1rem] border border-zinc-900/20 bg-[#0f1117] shadow-inner">
                <div className="flex h-8 items-center gap-1.5 border-b border-white/5 bg-[#141821] px-3">
                  <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  <div className="ml-3 h-4 flex-1 rounded-md border border-white/5 bg-white/5" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-900 via-[#12151f] to-indigo-950/40 p-4 sm:p-5">
                  <div className="flex h-full flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="h-2.5 w-24 rounded-full bg-white/20" />
                      <div className="flex gap-1.5">
                        <div className="h-6 w-14 rounded-full bg-indigo-500/80" />
                        <div className="h-6 w-6 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="grid flex-1 grid-cols-5 gap-2.5">
                      <div className="col-span-3 flex flex-col justify-end rounded-xl border border-white/8 bg-white/[0.04] p-3">
                        <div className="h-3 w-[70%] rounded-full bg-white/25" />
                        <div className="mt-2 h-2 w-[45%] rounded-full bg-white/10" />
                        <div className="mt-4 h-7 w-24 rounded-full bg-amber-400/90" />
                      </div>
                      <div className="col-span-2 space-y-2">
                        <div className="h-[42%] rounded-xl border border-white/8 bg-gradient-to-br from-indigo-500/30 to-transparent" />
                        <div className="h-[42%] rounded-xl border border-white/8 bg-white/[0.04]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="h-10 rounded-lg border border-white/6 bg-white/[0.03]" />
                      ))}
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.06)_50%,transparent_60%)]" />
                </div>
              </div>
            </div>
            <div className="mx-auto mt-px h-2.5 w-[92%] rounded-b-2xl bg-gradient-to-b from-zinc-400 to-zinc-500 shadow-[0_8px_20px_rgba(0,0,0,0.35)]" />
            <div className="mx-auto h-1 w-[70%] rounded-b-full bg-zinc-600/80" />
          </div>
        </motion.div>

        {/* Glassmorphic floating cards — hidden on very small screens to keep hero clean */}
        <motion.div
          className={`absolute right-[2%] top-[4%] z-30 hidden w-[200px] p-3.5 sm:block ${GLASS}`}
          {...float(0.2, 12)}
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Live signal</p>
              <p className="text-sm font-bold text-white">Booking Confirmed ✓</p>
            </div>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-emerald-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <motion.div
          className={`absolute bottom-[8%] left-[1%] z-30 hidden w-[196px] p-3.5 md:block ${GLASS}`}
          {...float(0.9, 9)}
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/20 text-amber-300">
              <TrendingUp className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">This month</p>
              <p className="text-sm font-bold text-white">Enquiry +100%</p>
            </div>
          </div>
          <div className="mt-3 flex items-end gap-1">
            {[40, 55, 48, 72, 68, 90, 100].map((h, i) => (
              <motion.div
                key={i}
                className="w-full rounded-sm bg-gradient-to-t from-amber-500/40 to-amber-300/90"
                initial={{ height: 8 }}
                animate={{ height: Math.max(10, (h / 100) * 36) }}
                transition={{ duration: 1.2, delay: 0.15 * i, repeat: Infinity, repeatType: "mirror", repeatDelay: 2 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className={`absolute bottom-[18%] right-[4%] z-30 hidden w-[176px] p-3 lg:block ${GLASS}`}
          {...float(1.4, 8)}
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-400/25 text-indigo-200">
              <Zap className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Speed</p>
              <p className="text-sm font-bold text-white">Launch in 10 days</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
