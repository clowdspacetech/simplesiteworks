"use client";

export default function PackageCard({
  title,
  price,
  bullets,
  cta = "Choose",
  featured = false,
  selected = false,
  onChoose,
}: {
  title: string;
  price: string;
  bullets: string[];
  cta?: string;
  featured?: boolean;
  selected?: boolean;
  onChoose?: (title: string) => void;
}) {
  return (
    <div
      className={`ssw-card ssw-card-hover flex h-full flex-col ${selected ? "ssw-card-selected" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {featured && (
            <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-200">
              Most chosen
            </div>
          )}
          {selected && !featured && (
            <div className="mb-3 inline-flex rounded-full border border-violet-400/25 bg-violet-400/10 px-2.5 py-1 text-[11px] font-medium text-violet-200">
              Selected
            </div>
          )}
          <h3 className="text-lg font-extrabold tracking-tight text-white">{title}</h3>
        </div>
        <div className="text-sm font-medium text-zinc-400">{price}</div>
      </div>
      <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-zinc-400">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center justify-between gap-3">
        {onChoose ? (
          <button
            type="button"
            onClick={() => onChoose(title)}
            className={featured || selected ? "btn-primary h-10 px-4" : "btn-secondary h-10 px-4"}
          >
            {cta}
          </button>
        ) : (
          <a
            href={`/contact?package=${encodeURIComponent(title)}`}
            className={featured ? "btn-primary h-10 px-4" : "btn-secondary h-10 px-4"}
          >
            {cta}
          </a>
        )}
        <div className="text-xs text-zinc-500">2–3 weeks</div>
      </div>
    </div>
  );
}
