"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
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
        className="modal-enter relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/50 shadow-[0_0_80px_rgba(99,102,241,0.25)] backdrop-blur-xl"
      >
        <div className="relative h-52 overflow-hidden md:h-64">
          <Image src={demo.src} alt={demo.title} width={960} height={420} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-zinc-950/50 text-zinc-200 backdrop-blur-lg transition-all duration-500 ease-premium hover:bg-white/10 active:scale-[0.97]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4 p-6 md:p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-indigo-300">{demo.kicker}</p>
          <h3 id="demo-modal-title" className="font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            {demo.headline}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">{demo.summary}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {demo.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            <Link href={demo.href} className="btn-primary" onClick={onClose}>
              Open full demo
            </Link>
            <Link href="/contact" className="btn-secondary" onClick={onClose}>
              Request this style
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
