"use client";

export default function PricingCard({
  title,
  price,
  mrrLabel,
  bullets,
  packageId,
  selected = false,
  onChoose,
}: {
  title: string;
  price: string;
  mrrLabel: string;
  bullets: string[];
  packageId: string;
  selected?: boolean;
  onChoose?: (id: string) => void;
}) {
  return (
    <div className={`ssw-card ssw-card-hover text-center ${selected ? "ssw-card-selected" : ""}`}>
      <div className="text-sm font-medium text-zinc-400">{title}</div>
      <div className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{price}</div>
      <p className="mt-2 text-xs text-zinc-500">{mrrLabel}</p>
      <ul className="mt-6 space-y-2 text-left text-sm leading-relaxed text-zinc-400">
        {bullets.slice(0, 3).map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        {onChoose ? (
          <button type="button" onClick={() => onChoose(packageId)} className="btn-primary w-full">
            Choose {title.split(" ")[0]}
          </button>
        ) : (
          <a href={`/contact?package=${encodeURIComponent(packageId)}`} className="btn-primary w-full">
            Choose
          </a>
        )}
      </div>
    </div>
  );
}
