"use client";

import SafeImage from "./SafeImage";

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
      <div className="relative h-44 w-full overflow-hidden bg-zinc-900/60 sm:h-48">
        {src ? (
          <SafeImage
            src={src}
            alt={`${title} preview`}
            width={640}
            height={360}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-zinc-500" role="img" aria-label="Demo thumbnail placeholder">
            Thumbnail
          </div>
        )}
        <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-zinc-950/80 to-transparent p-4 opacity-100 md:opacity-0 md:transition-opacity md:duration-500 md:ease-premium md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
          <span className="btn-secondary h-12 min-h-12 bg-zinc-950/70 px-4 text-xs backdrop-blur-lg">View demo</span>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <h4 className="text-lg font-extrabold tracking-tight text-white">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
      </div>
    </button>
  );
}
