export default function PackageCard({ title, price, bullets, cta }: { title: string; price: string; bullets: string[]; cta?: string }) {
  return (
    <div className="card gradient-border p-6 hover:shadow-lg transition-transform transform hover:-translate-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="text-sm text-zinc-600">{price}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-zinc-700">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
      <div className="mt-6">
        <a href="#contact" className="inline-block gradient-btn">Learn More</a>
      </div>
    </div>
  );
}
