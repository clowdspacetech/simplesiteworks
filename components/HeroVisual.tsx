"use client";

import Image from "next/image";

type FloatCard = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  frameClass: string;
  floatClass: string;
  label?: string;
  caption?: string;
};

const FLOAT_CARDS: FloatCard[] = [
  {
    id: "layout",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=960&q=80",
    alt: "Website layout dashboard showcase",
    width: 640,
    height: 440,
    frameClass: "left-[6%] top-[16%] z-10 w-[min(320px,72%)] h-[220px] sm:left-[10%] sm:top-[20%]",
    floatClass: "animate-float-a hover:[animation-play-state:paused]",
    label: "Site preview",
  },
  {
    id: "booking",
    src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=640&q=80",
    alt: "Booking calendar interface",
    width: 320,
    height: 360,
    frameClass: "right-[2%] top-[2%] z-20 w-[160px] h-[180px] sm:right-[5%] sm:top-[5%]",
    floatClass: "animate-float-b hover:[animation-play-state:paused]",
    label: "Bookings",
  },
  {
    id: "reviews",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    alt: "Five-star customer reviews card",
    width: 400,
    height: 220,
    frameClass: "left-[2%] bottom-[4%] z-30 w-[200px] h-[110px] sm:left-[5%] sm:bottom-[8%]",
    floatClass: "animate-float-c hover:[animation-play-state:paused]",
    label: "5.0 · Reviews",
    caption: "Trusted by local clients",
  },
  {
    id: "metrics",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&q=80",
    alt: "Revenue and growth analytics badge",
    width: 280,
    height: 280,
    frameClass: "right-[6%] bottom-[6%] z-10 w-[140px] h-[140px] sm:right-[12%] sm:bottom-[12%]",
    floatClass: "animate-float-d hover:[animation-play-state:paused]",
    label: "+2× enquiries",
  },
];

export default function HeroVisual() {
  return (
    <div
      className="relative w-full min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] sm:min-h-[480px] lg:flex-1"
      aria-label="Interactive product feature canvas"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(228,228,231,0.12) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      {FLOAT_CARDS.map((card) => (
        <div
          key={card.id}
          className={`absolute overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl transition-all duration-300 ease-out hover:z-50 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${card.frameClass} ${card.floatClass}`}
        >
          <Image
            src={card.src}
            alt={card.alt}
            width={card.width}
            height={card.height}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 70vw, 320px"
            priority={card.id === "layout"}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-2.5">
            <p className="text-[11px] font-semibold tracking-tight text-white">{card.label}</p>
            {card.caption && <p className="mt-0.5 text-[10px] text-white/80">{card.caption}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
