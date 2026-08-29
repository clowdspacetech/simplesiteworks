"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-transparent">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <Logo size={36} />
          </div>
          <div>
            <div className="text-primary font-bold text-lg">SimpleSiteWorks</div>
            <div className="text-xs text-zinc-500">Websites made easy.</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="text-sm text-zinc-700 hover:text-primary transition-colors">Home</Link>
          <Link href="/packages" className="text-sm text-zinc-700 hover:text-primary transition-colors">Packages</Link>
          <Link href="/demo/tradesman" className="text-sm text-zinc-700 hover:text-primary transition-colors">Demos</Link>
          <Link href="/mobile-apps" className="text-sm text-zinc-700 hover:text-primary transition-colors">Apps</Link>
          <Link href="/about" className="text-sm text-zinc-700 hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="ml-4"><button className="gradient-btn text-sm">Contact</button></Link>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="p-2 rounded-md hover:bg-zinc-100">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
      <div className={`mobile-menu ${open ? 'open' : ''}`} role="dialog" aria-modal={open}>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <Logo size={28} />
              <div className="font-bold">SimpleSiteWorks</div>
            </Link>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
              ✕
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <Link href="/packages" onClick={() => setOpen(false)} className="py-2">Packages</Link>
            <Link href="/demo/tradesman" onClick={() => setOpen(false)} className="py-2">Demos</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-2">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
