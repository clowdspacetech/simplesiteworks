"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/demo/tradesman", label: "Demos" },
  { href: "/mobile-apps", label: "Apps" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/40 backdrop-blur-xl">
      <div className="ssw-container flex h-16 items-center justify-between md:h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity duration-500 ease-premium hover:opacity-80"
        >
          <Logo size={32} />
          <div className="leading-tight">
            <div className="text-[15px] font-extrabold tracking-tight text-white">SimpleSiteWorks</div>
            <div className="text-xs text-zinc-400">Websites made easy.</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-500 ease-premium hover:bg-white/10 hover:text-white ${
                  active ? "bg-white/10 text-white" : "text-zinc-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary ml-3 h-10 px-4">
            Contact
          </Link>
        </nav>

        <div className="flex items-center md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-100 transition-all duration-500 ease-premium hover:bg-white/10 active:scale-[0.97]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
      <div className={`mobile-menu ${open ? "open" : ""}`} role="dialog" aria-modal={open}>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <Logo size={28} />
              <div className="font-extrabold tracking-tight text-white">SimpleSiteWorks</div>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition-all duration-500 ease-premium hover:bg-white/10 hover:text-white active:scale-[0.97]"
            >
              ✕
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-zinc-300 transition-all duration-500 ease-premium hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
