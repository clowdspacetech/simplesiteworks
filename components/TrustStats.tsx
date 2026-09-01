"use client";

import Reveal from "./Reveal";
import { TRUST_STATS } from "../lib/site";

export default function TrustStats() {
  return (
    <section className="max-w-full overflow-x-clip border-y border-white/10 bg-white/[0.02]">
      <div className="ssw-container py-12 md:py-16">
        <Reveal className="mb-10 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wider text-indigo-300">Trust & ROI</p>
          <h2 className="ssw-h2 mt-2">Results that compound for local businesses</h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            Every build is engineered for measurable outcomes — more enquiries, less admin, faster load times.
          </p>
        </Reveal>
        <div className="ssw-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={(index % 4) as 0 | 1 | 2 | 3}>
              <div className="ssw-card h-full text-center sm:text-left">
                <div className="font-display text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-indigo-300 via-cyan-300 to-violet-300 bg-clip-text sm:text-5xl">
                  {stat.value}
                </div>
                <h3 className="mt-3 text-sm font-extrabold tracking-tight text-white">{stat.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{stat.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
