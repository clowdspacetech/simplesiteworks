"use client";

import { Check, ChevronLeft, ChevronRight } from "lucide-react";
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
          Preview industry-ready website templates in a desktop browser frame — each slide shows a clean homepage screenshot.
        </p>
      </Reveal>

      <div
        className="ssw-card mt-10 overflow-hidden p-0"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid min-w-0 items-stretch lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_55%),linear-gradient(180deg,rgba(24,24,27,0.55),rgba(9,9,11,0.9))] p-5 md:min-h-[440px] md:p-8 lg:border-b-0 lg:border-r">
            <BrowserFrame
              src={active.screenshot || active.src}
              alt={`${active.title} website screenshot`}
            />
          </div>

          <div className="flex min-w-0 flex-col p-5 md:p-7">
            <span className="ssw-kicker w-fit">{active.kicker}</span>
            <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              {active.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{active.industry}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">{active.summary}</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/15">
                  <Check className="h-3 w-3 text-cyan-300" strokeWidth={3} />
                </span>
                <span>{active.bulletFocus}</span>
              </li>
              {active.features.slice(0, 2).map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/15">
                    <Check className="h-3 w-3 text-cyan-300" strokeWidth={3} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
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
                      i === index
                        ? "w-7 bg-gradient-to-r from-indigo-400 to-cyan-300"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
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

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/40">
      <div className="flex h-8 w-full items-center gap-1.5 border-b border-white/10 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <div className="ml-3 h-4 flex-1 rounded-md border border-white/5 bg-white/5" />
      </div>
      <div className="overflow-hidden bg-zinc-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>
    </div>
  );
}
