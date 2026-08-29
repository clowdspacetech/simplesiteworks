import Image from "next/image";
import Link from "next/link";

export default function DemoCard({
  title,
  desc,
  href,
  src,
}: {
  title: string;
  desc: string;
  href: string;
  src?: string;
}) {
  return (
    <Link
      href={href}
      className="ssw-card ssw-card-hover group block overflow-hidden p-0"
    >
      <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
        {src ? (
          <Image src={src} alt={title} width={520} height={240} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-zinc-400">Thumbnail</div>
        )}
        <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-zinc-950/30 to-transparent p-4 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100">
          <span className="btn-secondary h-9 bg-white/95 px-3.5 text-xs">View demo</span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold tracking-tight text-zinc-950">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">{desc}</p>
      </div>
    </Link>
  );
}
