"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";
import DemoChrome from "../../../components/demo/DemoChrome";

const MENU = [
  {
    id: "starters",
    title: "Starters",
    blurb: "Warm breads & bright openers",
    items: [
      { name: "Whipped ricotta toast", price: "£9", note: "Honey · chilli oil" },
      { name: "Citrus cured trout", price: "£12", note: "Fennel · crème fraîche" },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    blurb: "Slow plates for long tables",
    items: [
      { name: "Wood-fired chicken", price: "£18", note: "Herb butter · greens" },
      { name: "Mushroom tagliatelle", price: "£16", note: "Aged parmesan" },
    ],
  },
  {
    id: "toast",
    title: "Toast & pour",
    blurb: "House pours & dessert",
    items: [
      { name: "Seasonal crumble", price: "£8", note: "Vanilla soft serve" },
      { name: "Negroni spritz", price: "£11", note: "Bitter orange" },
    ],
  },
];

const TABLES = ["Window 2", "Booth 4", "Garden 6"] as const;

export default function TasteToastDemoPage() {
  const [open, setOpen] = useState<string | null>("mains");
  const [table, setTable] = useState<(typeof TABLES)[number]>("Booth 4");
  const [name, setName] = useState("");
  const [held, setHeld] = useState(false);

  return (
    <DemoChrome className="bg-[#f3ebe2] font-sans text-stone-900">
      <header className="border-b border-stone-300/70 bg-[#f8f1e8]">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-6 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-800 text-rose-50">
              <UtensilsCrossed className="h-5 w-5" />
            </span>
            <div>
              <p className="font-serif text-2xl tracking-tight">Taste & Toast</p>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-rose-800/80 uppercase">Bistro · Editorial menu</p>
            </div>
          </div>
          <p className="max-w-xs text-right font-serif text-sm italic text-stone-600">
            A warm magazine layout for casual dining that still feels luxury.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-rose-800 uppercase">Issue 04 · Kitchen Notes</p>
            <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Plates worth lingering over.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-stone-600">
              Expandable digital menu grid with a streamlined table reservation micro-flow — editorial first, forms second.
            </p>
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl border border-stone-300/80">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
                alt="Warm bistro dining"
                fill
                className="object-cover"
                sizes="600px"
              />
            </div>
          </div>

          {/* Reservation micro-flow */}
          <aside className="rounded-3xl border border-stone-300/80 bg-[#faf6f0] p-6 shadow-[0_24px_60px_rgba(68,64,60,0.08)]">
            <p className="text-xs font-semibold tracking-[0.18em] text-stone-500 uppercase">Table micro-flow</p>
            <h2 className="mt-2 font-serif text-2xl">Hold a table</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {TABLES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTable(t);
                    setHeld(false);
                  }}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    table === t ? "bg-rose-800 text-rose-50" : "bg-white text-stone-600 ring-1 ring-stone-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name for the list"
              className="mt-4 h-11 w-full rounded-2xl border border-stone-200 bg-white px-3 text-sm outline-none focus:border-rose-300"
            />
            <button
              type="button"
              onClick={() => name.trim() && setHeld(true)}
              className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-[#f8f1e8]"
            >
              Hold {table}
            </button>
            {held && (
              <p className="mt-3 rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">
                Held for {name} · {table}. We&apos;ll confirm by SMS.
              </p>
            )}
          </aside>
        </div>

        {/* Expandable menu magazine grid */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl tracking-tight">Digital menu</h2>
          <p className="mt-2 text-sm text-stone-600">Tap a chapter to expand — magazine pacing, not a PDF dump.</p>
          <div className="mt-6 space-y-3">
            {MENU.map((section) => {
              const isOpen = open === section.id;
              return (
                <div key={section.id} className="overflow-hidden rounded-3xl border border-stone-300/80 bg-[#faf6f0]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : section.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <div>
                      <p className="font-serif text-2xl text-stone-900">{section.title}</p>
                      <p className="mt-1 text-sm text-stone-500">{section.blurb}</p>
                    </div>
                    <span className="text-sm font-semibold text-rose-800">{isOpen ? "Close" : "Open"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 border-t border-stone-200 px-5 pb-5 pt-4 sm:px-6">
                          {section.items.map((item) => (
                            <div key={item.name} className="flex items-start justify-between gap-4 border-b border-stone-200/80 pb-3 last:border-0">
                              <div>
                                <p className="font-serif text-lg text-stone-900">{item.name}</p>
                                <p className="text-sm text-stone-500">{item.note}</p>
                              </div>
                              <p className="font-semibold text-rose-900">{item.price}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/contact?package=Growth&business=Hospitality" className="inline-flex h-11 items-center rounded-full bg-rose-800 px-5 text-sm font-semibold text-rose-50">
            Request this blueprint
          </Link>
          <Link href="/" className="inline-flex h-11 items-center rounded-full border border-stone-300 bg-white px-5 text-sm font-medium text-stone-700">
            Agency home
          </Link>
        </div>
      </main>
    </DemoChrome>
  );
}
