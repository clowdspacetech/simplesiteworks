export default function PricingCard({ title, price }: { title: string; price: string }) {
  return (
    <div className="card p-6 text-center rounded-xl bg-white">
      <div className="text-sm text-zinc-500">{title}</div>
      <div className="text-3xl font-extrabold mt-2">{price}</div>
      <ul className="mt-4 text-sm text-zinc-600">
        <li className="py-1">Clear pricing</li>
        <li className="py-1">Fast delivery</li>
        <li className="py-1">Support available</li>
      </ul>
      <div className="mt-6">
        <a className="inline-block gradient-btn">Choose</a>
      </div>
    </div>
  );
}
