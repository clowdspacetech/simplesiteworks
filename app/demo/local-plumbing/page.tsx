"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Radio, MapPin } from "lucide-react";
import DemoChrome from "../../../components/demo/DemoChrome";

const JOBS = [
  { id: "A-204", area: "City Centre", status: "En route", eta: "12 min" },
  { id: "A-205", area: "Harbor Quay", status: "Dispatched", eta: "18 min" },
  { id: "A-206", area: "West Mills", status: "On site", eta: "Live" },
];

export default function LocalPlumbingDemoPage() {
  const [active, setActive] = useState(0);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % JOBS.length), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => !p), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <DemoChrome className="bg-slate-950 font-sans text-slate-100">
      <div className="grid min-h-[calc(100vh-3rem)] lg:grid-cols-[1.05fr_0.95fr]">
        {/* Urgent left rail */}
        <section className="relative flex flex-col justify-between overflow-hidden border-b border-orange-500/30 bg-gradient-to-br from-orange-600 via-orange-600 to-orange-700 lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(90deg,transparent,transparent_24px,rgba(0,0,0,0.25)_25px),repeating-linear-gradient(0deg,transparent,transparent_24px,rgba(0,0,0,0.25)_25px)]" />
          <div className="relative z-10 p-6 sm:p-10">
            <p className="inline-flex items-center gap-2 rounded-sm bg-slate-950 px-3 py-1.5 text-[11px] font-black tracking-[0.2em] text-orange-300 uppercase">
              <span className={`h-2 w-2 rounded-full bg-emerald-400 ${pulse ? "opacity-100" : "opacity-40"}`} />
              Active Dispatch Network
            </p>
            <h1 className="mt-6 max-w-md text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              The Trade Blueprint
            </h1>
            <p className="mt-4 max-w-sm text-base font-semibold text-orange-50/90">
              Split-column emergency architecture — status first, call second, form never in the way.
            </p>
            <a
              href="tel:+448001112233"
              className="mt-8 inline-flex h-16 w-full max-w-sm items-center justify-center gap-3 rounded-sm bg-slate-950 text-lg font-black uppercase tracking-wide text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition hover:bg-black sm:w-auto sm:px-10"
            >
              <Phone className="h-6 w-6 text-orange-400" />
              Emergency Call
            </a>
            <p className="mt-3 text-sm font-bold text-orange-100/80">0800 111 2233 · 24/7 desk</p>
          </div>
          <div className="relative z-10 border-t border-black/20 bg-black/20 p-6 sm:p-8">
            <div className="flex items-center gap-3 text-sm font-bold text-white">
              <MapPin className="h-4 w-4" />
              Coverage live across 42 postcode sectors
            </div>
          </div>
        </section>

        {/* Right: live dispatch tracker */}
        <section className="flex flex-col bg-slate-950 p-6 sm:p-10">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-black tracking-[0.22em] text-orange-400 uppercase">Live board</p>
              <h2 className="mt-1 text-2xl font-black uppercase text-white">Active Dispatch Status</h2>
            </div>
            <Radio className="h-5 w-5 text-emerald-400" />
          </div>

          <div className="mt-8 space-y-3">
            {JOBS.map((job, i) => {
              const isActive = i === active;
              return (
                <motion.div
                  key={job.id}
                  animate={{
                    scale: isActive ? 1.02 : 1,
                    borderColor: isActive ? "rgb(249 115 22)" : "rgb(51 65 85)",
                    backgroundColor: isActive ? "rgba(249,115,22,0.12)" : "rgb(15 23 42)",
                  }}
                  className="rounded-md border px-4 py-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">{job.id}</p>
                      <p className="mt-1 font-bold text-white">{job.area}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-orange-300">{job.status}</p>
                      <p className="text-xs font-semibold text-slate-400">ETA {job.eta}</p>
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      className="mt-3 h-1 overflow-hidden rounded-full bg-slate-800"
                      initial={false}
                    >
                      <motion.div
                        className="h-full bg-orange-500"
                        animate={{ width: ["15%", "85%", "40%"] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-6 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-200"
            >
              Crew {JOBS[active].id} status refreshed — {JOBS[active].status.toLowerCase()} · {JOBS[active].area}
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-auto overflow-hidden rounded-md border border-slate-800 pt-8">
            <Image
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
              alt="Service vehicle on dispatch"
              width={900}
              height={420}
              className="h-44 w-full object-cover opacity-80"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact?package=Growth&business=Trades"
              className="inline-flex h-11 items-center rounded-sm bg-orange-600 px-4 text-sm font-black uppercase text-white hover:bg-orange-500"
            >
              Request blueprint
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center rounded-sm border border-slate-700 px-4 text-sm font-bold text-slate-200 hover:bg-slate-900"
            >
              Agency home
            </Link>
          </div>
        </section>
      </div>
    </DemoChrome>
  );
}
