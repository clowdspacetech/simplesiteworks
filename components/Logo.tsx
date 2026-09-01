"use client";

import { useId } from "react";

const LOGO_MARK_SRC = "/branding/logo-mark.png";
const LOGO_MARK_TRANSPARENT_SRC = "/branding/logo-mark-cropped.png";
/** Natural mark aspect (height / width) from cropped source asset. */
const MARK_ASPECT = 520 / 365;

type LogoProps = {
  /** Mark width in px; height follows natural aspect ratio. */
  width?: number;
  /** @deprecated Use `width` instead. */
  size?: number;
  variant?: "mark" | "full";
  /** Use transparent mark for light/any backgrounds; dark keeps the black tile. */
  background?: "transparent" | "dark";
  showTagline?: boolean;
  className?: string;
};

/** Inline wordmark matching the full logo typography. */
export function BrandWordmark({
  showTagline = false,
  className = "",
}: {
  showTagline?: boolean;
  className?: string;
}) {
  const gid = useId();

  return (
    <div className={`min-w-0 leading-tight ${className}`}>
      <div className="truncate font-[family-name:var(--font-poppins)] text-[15px] font-semibold tracking-tight sm:text-base">
        <span className="text-white">Simple</span>
        <span
          className="bg-gradient-to-r from-[#00D2FF] via-[#3A7BD5] to-[#8E2DE2] bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: "text" }}
        >
          Site
        </span>
        <span className="text-white">Works</span>
      </div>
      {showTagline && (
        <div className="mt-0.5 hidden truncate font-[family-name:var(--font-inter)] text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400 sm:block">
          Websites
          <span className="mx-1.5 bg-gradient-to-r from-[#00D2FF] to-[#8E2DE2] bg-clip-text text-transparent">•</span>
          Apps
          <span className="mx-1.5 bg-gradient-to-r from-[#00D2FF] to-[#8E2DE2] bg-clip-text text-transparent">•</span>
          Made Simple
        </div>
      )}
      <svg width="0" height="0" aria-hidden className="absolute overflow-hidden">
        <defs>
          <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D2FF" />
            <stop offset="100%" stopColor="#8E2DE2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function LogoMark({
  src,
  width,
  className = "",
  decorative = false,
}: {
  src: string;
  width: number;
  className?: string;
  decorative?: boolean;
}) {
  const height = Math.round(width * MARK_ASPECT);

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] p-1 shadow-[0_2px_10px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.04)] ${className}`}
    >
      <img
        src={src}
        alt={decorative ? "" : "SimpleSiteWorks"}
        width={width}
        height={height}
        aria-hidden={decorative || undefined}
        className="block"
        style={{ width, height: "auto", maxHeight: height }}
      />
    </span>
  );
}

export default function Logo({
  width,
  size,
  variant = "mark",
  background = "transparent",
  showTagline = true,
  className = "",
}: LogoProps) {
  const markWidth = width ?? size ?? 18;
  const src = background === "dark" ? LOGO_MARK_SRC : LOGO_MARK_TRANSPARENT_SRC;

  if (variant === "full") {
    const innerWidth = Math.max(18, Math.round(markWidth * 0.9));

    return (
      <div className={`flex flex-col items-center gap-3 ${className}`} role="img" aria-label="SimpleSiteWorks">
        <LogoMark src={src} width={innerWidth} decorative />
        <BrandWordmark showTagline={showTagline} className="text-center" />
      </div>
    );
  }

  return <LogoMark src={src} width={markWidth} className={className} />;
}
