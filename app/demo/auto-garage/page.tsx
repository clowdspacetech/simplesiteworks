"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Gauge } from "lucide-react";
import DemoChrome from "../../../components/demo/DemoChrome";

type BayStatus = "Open" | "In service" | "Queued";

const BAYS: { id: string; status: BayStatus; eta: string }[] = [
  { id: "Bay 01", status: "Open", eta: "Ready now" },
  { id: "Bay 02", status: "In service", eta: "42 min" },
  { id: "Bay 03", status: "Queued", eta: "1h 10m" },
  { id: "Bay 04", status: "Open", eta: "Ready now" },
];

const SERVICES = [
  { id: "mot", label: "MOT prep", desc: "Pre-test diagnostics" },
  { id: "brake", label: "Brake overhaul", desc: "Pads · discs · fluid" },
  { id: "service", label: "Full service", desc: "Oil · filters · inspection" },
  { id: "tyre", label: "Tyre & alignment", desc: "Balance · geometry" },
  { id: "diag", label: "ECU diagnostics", desc: "Fault codes cleared" },
  { id: "body", label: "Body tidy", desc: "Dent · paint touch" },
];

const statusColor: Record<BayStatus, string> = {
  Open: "border-emerald-400/50 bg-emerald-500/10 text-emerald-300",
  "In service": "border-amber-400/50 bg-amber-500/10 text-amber-200",
  Queued: "border-sky-400/40 bg-sky-500/10 text-sky-200",
};

export default function AutoGarageDemoPage() {
  const [bays, setBays] = useState(BAYS);
  const [service, setService] = useState("service");

  useEffect(() => {
    const id = setInterval(() => {
      setBays((prev) =>
        prev.map((bay, i) => {
          if (i !== Math.floor(Math.random() * prev.length)) return bay;
          const cycle: BayStatus[] = ["Open", "In service", "Queued"];
          const next = cycle[(cycle.indexOf(bay.status) + 1) % cycle.length];
          return {
            ...bay,
            status: next,
            eta: next === "Open" ? "Ready now" : next === "In service" ? `${25 + Math.floor(Math.random() * 40)} min` : `1h ${Math.floor(Math.random() * 40)}m`,
          };
        }),
      );
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <DemoChrome className="bg-zinc-950 font-sans text-zinc-100">
      <div className="border-b border-zinc-800 bg-black">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-sky-500 text-zinc-950">
              <Wrench className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xl font-black tracking-tight uppercase">Shift & Gear</p>
              <p className="text-[11px] font-bold tracking-[0.22em] text-sky-400 uppercase">Garage · Live bays</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-bold tracking-wider text-zinc-300 uppercase">
            <Gauge className="h-3.5 w-3.5 text-sky-400" />
            Industrial modern
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
              Gritty floors.
              <br />
              Hyper-clean UI.
            </h1>
            <p className="mt-4 max-w-md text-base text-zinc-400">
              Live Bay Availability, a visual service selector, and typography that hits like a torque wrench.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80"
              alt="Mechanic garage bay"
              fill
              className="object-cover"
              sizes="500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>
        </div>

        <section className="mt-12">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-black tracking-[0.2em] text-sky-400 uppercase">Live Bay Availability</h2>
            <span className="text-xs font-semibold text-zinc-500">Auto-refreshing</span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {bays.map((bay) => (
              <motion.div
                key={bay.id}
                layout
                className={`rounded-2xl border px-4 py-4 ${statusColor[bay.status]}`}
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs font-black tracking-wider uppercase text-zinc-400">{bay.id}</p>
                <p className="mt-2 text-lg font-black text-white">{bay.status}</p>
                <p className="mt-1 text-xs font-semibold opacity-80">{bay.eta}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-black tracking-[0.2em] text-sky-400 uppercase">Service selector</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((item) => {
              const active = service === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setService(item.id)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-sky-400 bg-sky-500/15 shadow-[inset_0_0_40px_rgba(56,189,248,0.12)]"
                      : "border-zinc-800 bg-zinc-900/80 hover:border-zinc-600"
                  }`}
                >
                  <p className="text-base font-black uppercase text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-sm font-semibold text-zinc-300">
            Selected: <span className="text-sky-300">{SERVICES.find((s) => s.id === service)?.label}</span> — bay matching available on open slots.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact?package=Growth&business=Trades" className="inline-flex h-11 items-center rounded-md bg-sky-500 px-5 text-sm font-black uppercase text-zinc-950">
            Request this blueprint
          </Link>
          <Link href="/" className="inline-flex h-11 items-center rounded-md border border-zinc-700 px-5 text-sm font-bold text-zinc-200">
            Agency home
          </Link>
        </div>
      </main>
    </DemoChrome>
  );
}
