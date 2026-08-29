"use client";
import Link from "next/link";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md">
      <div className="ssw-container flex h-16 items-center justify-between md:h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity duration-200 ease-out hover:opacity-80"
        >
          <Logo size={32} />
          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-tight text-zinc-950">SimpleSiteWorks</div>
            <div className="text-xs text-zinc-500">Websites made easy.</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-zinc-500 transition-all duration-200 ease-out hover:bg-zinc-100 hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-3 h-10 px-4">
            Contact
          </Link>
        </nav>

        <div className="flex items-center md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/80 text-zinc-900 transition-all duration-200 ease-out hover:bg-zinc-50"
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
              <div className="font-semibold tracking-tight">SimpleSiteWorks</div>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-all duration-200 ease-out hover:bg-zinc-100 hover:text-zinc-950"
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
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-zinc-700 transition-all duration-200 ease-out hover:bg-zinc-50"
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
