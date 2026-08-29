import Image from 'next/image';

export default function DemoCard({ title, desc, href, src }: { title: string; desc: string; href: string; src?: string }) {
  return (
    <div className="card overflow-hidden rounded-xl bg-white">
      <div className="relative w-full h-44 bg-zinc-100 flex items-center justify-center">
        {src ? (
          <Image src={src} alt={title} width={520} height={240} className="object-cover w-full h-full" />
        ) : (
          <div className="text-zinc-400">Thumbnail</div>
        )}
        <a href={href} className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-end justify-end p-4">
          <span className="outline-btn">View Demo</span>
        </a>
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-zinc-600 mt-2">{desc}</p>
      </div>
    </div>
  );
}
