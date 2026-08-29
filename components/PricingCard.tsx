"use client";

export default function PricingCard({
  title,
  price,
  selected = false,
  onChoose,
}: {
  title: string;
  price: string;
  selected?: boolean;
  onChoose?: (title: string) => void;
}) {
  return (
    <div className={`ssw-card ssw-card-hover text-center ${selected ? "ssw-card-selected" : ""}`}>
      <div className="text-sm font-medium text-zinc-400">{title}</div>
      <div className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white">{price}</div>
      <ul className="mt-6 space-y-2 text-sm leading-relaxed text-zinc-400">
        <li>Clear pricing</li>
        <li>Fast delivery</li>
        <li>Support available</li>
      </ul>
      <div className="mt-8">
        {onChoose ? (
          <button type="button" onClick={() => onChoose(title)} className="btn-primary w-full">
            Choose
          </button>
        ) : (
          <a href={`/contact?package=${encodeURIComponent(title)}`} className="btn-primary w-full">
            Choose
          </a>
        )}
      </div>
    </div>
  );
}
