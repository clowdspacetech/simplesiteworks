export default function MobileAppCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card p-4">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-zinc-600 mt-2">{desc}</div>
    </div>
  );
}
