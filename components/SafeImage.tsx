"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

type SafeImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
  fallbackLabel?: string;
  wrapperClassName?: string;
};

/**
 * next/image wrapper with onError fallback + required alt text.
 * Prefer SVG/WebP assets under /public for reliability.
 */
export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/illustrations/image-fallback.svg",
  fallbackLabel = "Image unavailable",
  wrapperClassName = "",
  className = "",
  ...rest
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setFailed(false);
  }, [src]);

  if (failed && !fallbackSrc) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-zinc-900/80 text-sm text-zinc-500 ${wrapperClassName}`}
        role="img"
        aria-label={alt || fallbackLabel}
      >
        {fallbackLabel}
      </div>
    );
  }

  return (
    <Image
      {...rest}
      src={failed ? fallbackSrc : currentSrc}
      alt={alt}
      className={`max-w-full ${className}`}
      onError={() => {
        if (!failed) {
          console.warn("[SafeImage] Failed to load", currentSrc);
          setFailed(true);
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
