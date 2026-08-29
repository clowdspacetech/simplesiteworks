export default function MobileAppCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="ssw-card ssw-card-hover p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-[0_0_24px_rgba(99,102,241,0.35)]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="7" y="3" width="10" height="18" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M10 18.5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div className="font-extrabold tracking-tight text-white">{title}</div>
          <div className="mt-1.5 text-sm leading-relaxed text-zinc-400">{desc}</div>
        </div>
      </div>
    </div>
  );
}
