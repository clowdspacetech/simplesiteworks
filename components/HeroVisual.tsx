import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="hero-visual ssw-card overflow-hidden p-0">
      <div className="relative">
        <Image
          src="/illustrations/hero-workspace.svg"
          alt="Preview of a calm local business website in a browser frame"
          width={640}
          height={420}
          className="motion-float w-full max-w-full"
          priority
        />
        <div
          className="motion-float-slow pointer-events-none absolute bottom-6 right-6 hidden h-16 w-16 rounded-2xl border border-white/15 bg-cyan-400/20 shadow-[0_0_32px_rgba(34,211,238,0.25)] backdrop-blur-md sm:block"
          aria-hidden
        />
        <div
          className="motion-float pointer-events-none absolute left-6 top-20 hidden h-10 w-10 rounded-full border border-white/10 bg-violet-400/20 backdrop-blur-md sm:block"
          aria-hidden
        />
      </div>
    </div>
  );
}
