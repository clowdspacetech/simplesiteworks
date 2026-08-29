"use client";

import Image from "next/image";

export default function DemoCard({
  title,
  desc,
  src,
  onView,
}: {
  title: string;
  desc: string;
  href: string;
  src?: string;
  onView?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onView}
      className="ssw-card ssw-card-hover group block w-full max-w-full overflow-hidden p-0 text-left"
    >
      <div className="relative h-48 w-full overflow-hidden bg-zinc-900/60">
        {src ? (
          <Image src={src} alt={title} width={520} height={240} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-zinc-500">Thumbnail</div>
        )}
        <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-zinc-950/70 to-transparent p-4 opacity-0 transition-opacity duration-500 ease-premium group-hover:opacity-100">
          <span className="btn-secondary h-9 bg-zinc-950/60 px-3.5 text-xs backdrop-blur-lg">View demo</span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-extrabold tracking-tight text-white">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
      </div>
    </button>
  );
}
