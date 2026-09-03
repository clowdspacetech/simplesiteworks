"use client";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  PhoneCall,
  UtensilsCrossed,
  Dumbbell,
} from "lucide-react";
import { useEffect, useState } from "react";
import { DEMOS, type DemoId } from "../lib/site";
import Reveal from "./Reveal";

const SLIDE_ORDER: DemoId[] = ["tradesman", "shop", "professional", "wellness"];

export default function ShowcaseCarousel({
  onSelectDemo,
}: {
  onSelectDemo?: (id: DemoId) => void;
}) {
  const slides = SLIDE_ORDER.map((id) => DEMOS.find((demo) => demo.id === id)!).filter(Boolean);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const active = slides[index];

  function go(delta: number) {
    setIndex((current) => (current + delta + slides.length) % slides.length);
  }

  return (
    <div>
      <Reveal className="max-w-2xl">
        <h2 className="ssw-h2">Template & case study showcase</h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-400">
          Preview industry-ready design systems — each slide includes a live interactive mockup you can try.
        </p>
      </Reveal>

      <div
        className="ssw-card mt-10 overflow-hidden p-0"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid min-w-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[280px] overflow-hidden border-b border-white/10 lg:min-h-[420px] lg:border-b-0 lg:border-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.title}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-zinc-950/20" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="ssw-kicker">{active.kicker}</span>
              <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                {active.title}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-300">{active.industry}</p>
            </div>
          </div>

          <div className="flex min-w-0 flex-col p-5 md:p-7">
            <p className="text-sm leading-relaxed text-zinc-400">{active.summary}</p>
            <div className="mt-5 flex-1">
              <SlideInteractive demoId={active.id} />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition-all duration-500 ease-premium hover:bg-white/10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition-all duration-500 ease-premium hover:bg-white/10"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {slides.map((slide, i) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Go to ${slide.title}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-500 ease-premium ${
                      i === index ? "w-7 bg-gradient-to-r from-indigo-400 to-cyan-300" : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              {onSelectDemo && (
                <button type="button" className="btn-secondary" onClick={() => onSelectDemo(active.id)}>
                  Open full preview
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideInteractive({ demoId }: { demoId: DemoId }) {
  if (demoId === "tradesman") return <QuoteCalculator />;
  if (demoId === "shop") return <MenuReservation />;
  if (demoId === "professional") return <AppointmentCalendar />;
  return <ClassSchedule />;
}

function QuoteCalculator() {
  const [job, setJob] = useState("Emergency call-out");
  const [urgency, setUrgency] = useState(1);
  const base = job === "Emergency call-out" ? 89 : job === "Boiler service" ? 120 : 65;
  const estimate = base + urgency * 35;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <PhoneCall className="h-4 w-4 text-cyan-300" />
        Upfront instant quote
      </div>
      <label className="ssw-label mt-4">Job type</label>
      <select className="ssw-input" value={job} onChange={(e) => setJob(e.target.value)}>
        <option>Emergency call-out</option>
        <option>Boiler service</option>
        <option>Routine repair</option>
      </select>
      <label className="ssw-label mt-4">Urgency</label>
      <input
        type="range"
        min={0}
        max={2}
        value={urgency}
        onChange={(e) => setUrgency(Number(e.target.value))}
        className="w-full accent-indigo-400"
      />
      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">Estimated from</p>
          <p className="font-display text-3xl font-extrabold text-white">£{estimate}</p>
        </div>
        <button type="button" className="btn-primary">
          Book now
        </button>
      </div>
    </div>
  );
}

function MenuReservation() {
  const [tab, setTab] = useState<"Mains" | "Drinks" | "Dessert">("Mains");
  const [guests, setGuests] = useState(2);
  const menus = {
    Mains: ["Seasonal bowl", "Sourdough toastie", "Garden salad"],
    Drinks: ["Flat white", "Cold brew", "Chai latte"],
    Dessert: ["Sticky toffee", "Berry tart", "Affogato"],
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <UtensilsCrossed className="h-4 w-4 text-violet-300" />
        Digital menu & table booking
      </div>
      <div className="mt-4 flex gap-2">
        {(Object.keys(menus) as Array<keyof typeof menus>).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-500 ease-premium ${
              tab === item ? "bg-indigo-500/30 text-white" : "bg-white/5 text-zinc-400 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <ul className="mt-4 space-y-2">
        {menus[tab].map((item) => (
          <li key={item} className="flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-3 py-2 text-sm text-zinc-300">
            <span>{item}</span>
            <span className="text-zinc-500">£{tab === "Drinks" ? "3.5" : "8"}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
        <label className="flex items-center gap-2 text-sm text-zinc-300">
          Guests
          <input
            type="number"
            min={1}
            max={8}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value) || 1)}
            className="ssw-input h-10 w-16 py-0"
          />
        </label>
        <button type="button" className="btn-secondary">
          Reserve table
        </button>
      </div>
    </div>
  );
}

function AppointmentCalendar() {
  const [day, setDay] = useState("Thu");
  const [slot, setSlot] = useState("10:30");
  const days = ["Wed", "Thu", "Fri", "Mon"];
  const slots = ["09:00", "10:30", "14:00", "16:15"];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <CalendarDays className="h-4 w-4 text-indigo-300" />
        Discovery call calendar
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {days.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setDay(item)}
            className={`rounded-xl border px-2 py-3 text-sm font-semibold transition-all duration-500 ease-premium ${
              day === item
                ? "border-cyan-400/40 bg-cyan-400/10 text-white"
                : "border-white/10 bg-black/20 text-zinc-400 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {slots.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setSlot(item)}
            className={`inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition-all duration-500 ease-premium ${
              slot === item
                ? "border-indigo-400/40 bg-indigo-500/15 text-white"
                : "border-white/10 bg-black/20 text-zinc-400 hover:text-white"
            }`}
          >
            <Clock3 className="h-3.5 w-3.5" />
            {item}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-zinc-400">
        Selected: <span className="font-semibold text-white">{day} · {slot}</span>
      </p>
    </div>
  );
}

function ClassSchedule() {
  const [day, setDay] = useState<"Mon" | "Tue" | "Wed">("Mon");
  const timetable = {
    Mon: [
      { time: "07:00", name: "HIIT Ignite", spots: 4 },
      { time: "12:15", name: "Mobility Flow", spots: 8 },
      { time: "18:30", name: "Strength Lab", spots: 2 },
    ],
    Tue: [
      { time: "06:45", name: "Sunrise Yoga", spots: 6 },
      { time: "17:00", name: "Spin Circuit", spots: 3 },
      { time: "19:00", name: "PT Small Group", spots: 1 },
    ],
    Wed: [
      { time: "08:00", name: "Core Rebuild", spots: 5 },
      { time: "13:00", name: "Lunch Lift", spots: 7 },
      { time: "18:00", name: "Recovery Stretch", spots: 9 },
    ],
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <Dumbbell className="h-4 w-4 text-cyan-300" />
        Class timetable switcher
      </div>
      <div className="mt-4 flex gap-2">
        {(Object.keys(timetable) as Array<keyof typeof timetable>).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setDay(item)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-500 ease-premium ${
              day === item ? "bg-violet-500/30 text-white" : "bg-white/5 text-zinc-400 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <ul className="mt-4 space-y-2">
        {timetable[day].map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-3 py-2.5 text-sm"
          >
            <div>
              <p className="font-medium text-white">{item.name}</p>
              <p className="text-xs text-zinc-500">{item.time}</p>
            </div>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-[11px] text-cyan-200">
              {item.spots} spots
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
