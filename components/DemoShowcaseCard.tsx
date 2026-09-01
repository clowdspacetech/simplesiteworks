"use client";

import SafeImage from "./SafeImage";
import type { DemoId } from "../lib/site";
import { DEMOS } from "../lib/site";

export default function DemoShowcaseCard({
  demoId,
  onView,
}: {
  demoId: DemoId;
  onView?: () => void;
}) {
  const demo = DEMOS.find((d) => d.id === demoId)!;

  return (
    <article className="ssw-card ssw-card-hover flex h-full flex-col overflow-hidden p-0">
      <button type="button" onClick={onView} className="group block w-full text-left">
        <div className="relative h-44 w-full overflow-hidden bg-zinc-900/60 sm:h-48">
          <SafeImage
            src={demo.src}
            alt={`${demo.title} website preview`}
            width={640}
            height={360}
            className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
          <span className="absolute bottom-4 right-4 btn-secondary h-12 min-h-12 bg-zinc-950/70 px-4 text-xs backdrop-blur-lg">
            View live demo
          </span>
        </div>
      </button>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-extrabold tracking-tight text-white">{demo.title}</h3>
        <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-indigo-300">{demo.industry}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{demo.desc}</p>
        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Design style</p>
          <p className="mt-1.5 text-xs leading-relaxed text-zinc-300">{demo.aesthetic}</p>
        </div>
      </div>
    </article>
  );
}
