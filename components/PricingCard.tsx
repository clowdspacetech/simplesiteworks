export default function PricingCard({ title, price }: { title: string; price: string }) {
  return (
    <div className="card p-4 text-center">
      <div className="text-sm text-zinc-500">{title}</div>
      <div className="text-2xl font-bold mt-2">{price}</div>
    </div>
  );
}
