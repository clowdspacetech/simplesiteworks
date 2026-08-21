import Image from 'next/image';

export default function DemoCard({ title, desc, href, src }: { title: string; desc: string; href: string; src?: string }) {
  return (
    <div className="card overflow-hidden">
      <div className="w-full h-40 bg-zinc-100 flex items-center justify-center">
        {src ? <Image src={src} alt={title} width={520} height={240} /> : <div className="text-zinc-400">Thumbnail</div>}
      </div>
      <div className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-zinc-600 mt-2">{desc}</p>
        <div className="mt-4">
          <a href={href} className="inline-block outline-btn">View Demo</a>
        </div>
      </div>
    </div>
  );
}
