export default function PricingCard({ title, price }: { title: string; price: string }) {
  return (
    <div className="ssw-card ssw-card-hover text-center">
      <div className="text-sm font-medium text-zinc-500">{title}</div>
      <div className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950">{price}</div>
      <ul className="mt-6 space-y-2 text-sm leading-relaxed text-zinc-500">
        <li>Clear pricing</li>
        <li>Fast delivery</li>
        <li>Support available</li>
      </ul>
      <div className="mt-8">
        <a href="/contact" className="btn-primary w-full">
          Choose
        </a>
      </div>
    </div>
  );
}
