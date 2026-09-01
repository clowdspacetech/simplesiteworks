import SafeImage from "./SafeImage";

export default function HeroVisual() {
  return (
    <div className="hero-visual ssw-card overflow-hidden p-0">
      <div className="relative">
        <SafeImage
          src="/illustrations/hero-workspace.svg"
          alt="Preview of a calm local business website in a browser frame"
          width={640}
          height={420}
          className="motion-float w-full max-w-full"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div
          className="motion-float-slow pointer-events-none absolute bottom-4 right-4 hidden h-14 w-14 rounded-2xl border border-white/15 bg-cyan-400/20 shadow-[0_0_32px_rgba(34,211,238,0.25)] backdrop-blur-md sm:bottom-6 sm:right-6 sm:block sm:h-16 sm:w-16"
          aria-hidden
        />
        <div
          className="motion-float pointer-events-none absolute left-4 top-16 hidden h-9 w-9 rounded-full border border-white/10 bg-violet-400/20 backdrop-blur-md sm:left-6 sm:top-20 sm:block sm:h-10 sm:w-10"
          aria-hidden
        />
      </div>
    </div>
  );
}
