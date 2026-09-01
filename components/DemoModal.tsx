"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import SafeImage from "./SafeImage";
import { DEMOS, type DemoId } from "../lib/site";

export default function DemoModal({
  demoId,
  onClose,
}: {
  demoId: DemoId | null;
  onClose: () => void;
}) {
  const demo = DEMOS.find((item) => item.id === demoId) ?? null;
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!demo) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [demo]);

  if (!demo) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center overflow-x-clip p-0 sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Close demo preview"
        className="absolute inset-0 bg-zinc-950/70 backdrop-blur-md"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        className="modal-enter relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-zinc-950/80 shadow-[0_0_80px_rgba(99,102,241,0.25)] backdrop-blur-xl sm:rounded-3xl"
      >
        <div className="relative h-44 shrink-0 overflow-hidden sm:h-52 md:h-64">
          <SafeImage
            src={demo.src}
            alt={`${demo.title} preview`}
            width={960}
            height={420}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-zinc-950/50 text-zinc-200 backdrop-blur-lg transition-all duration-500 ease-premium hover:bg-white/10 active:scale-[0.97] sm:right-4 sm:top-4"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4 overflow-y-auto p-5 sm:p-6 md:p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-indigo-300">{demo.industry ?? demo.kicker}</p>
          <h3 id="demo-modal-title" className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl">
            {demo.headline}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">{demo.summary}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {demo.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300"
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap">
            <Link href={demo.href} className="btn-primary w-full sm:w-auto" onClick={onClose}>
              Open full demo
            </Link>
            <Link href="/contact" className="btn-secondary w-full sm:w-auto" onClick={onClose}>
              Request this style
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
