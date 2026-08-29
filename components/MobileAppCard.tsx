export default function MobileAppCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card p-5 rounded-xl bg-white">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[var(--ssw-accent-start)] to-[var(--ssw-accent-end)] flex items-center justify-center text-white">📱</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-zinc-600 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}
