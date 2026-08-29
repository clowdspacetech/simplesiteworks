export default function PackageCard({
  title,
  price,
  bullets,
  cta = "Learn more",
  featured = false,
}: {
  title: string;
  price: string;
  bullets: string[];
  cta?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`ssw-card ssw-card-hover flex h-full flex-col ${
        featured ? "border-zinc-900/10 ring-1 ring-zinc-950/5" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {featured && (
            <div className="mb-3 inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-700">
              Most chosen
            </div>
          )}
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{title}</h3>
        </div>
        <div className="text-sm font-medium text-zinc-500">{price}</div>
      </div>
      <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-zinc-500">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center justify-between gap-3">
        <a href="/contact" className={featured ? "btn-primary h-10 px-4" : "btn-secondary h-10 px-4"}>
          {cta}
        </a>
        <div className="text-xs text-zinc-400">2–3 weeks</div>
      </div>
    </div>
  );
}
