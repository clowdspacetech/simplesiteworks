import Link from "next/link";
import Logo, { BrandWordmark } from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-zinc-950/40 backdrop-blur-xl">
      <div className="ssw-container grid gap-10 py-12 md:grid-cols-3 md:py-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Logo width={18} />
            <BrandWordmark showTagline />
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
            Simple websites for small local businesses. Clear pricing. Fast delivery.
          </p>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Explore</div>
          <div className="mt-4 flex flex-col gap-2.5 text-sm">
            <Link href="/packages" className="text-zinc-400 transition-colors duration-500 hover:text-white">
              Packages
            </Link>
            <Link href="/demo/local-plumbing" className="text-zinc-400 transition-colors duration-500 hover:text-white">
              Demos
            </Link>
            <Link href="/about" className="text-zinc-400 transition-colors duration-500 hover:text-white">
              About
            </Link>
          </div>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Contact</div>
          <div className="mt-4 flex flex-col gap-2.5 text-sm">
            <Link href="/contact" className="text-zinc-400 transition-colors duration-500 hover:text-white">
              Get in touch
            </Link>
            <div className="flex items-center gap-2 pt-2">
              <a
                aria-label="Twitter"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:text-white active:scale-[0.97]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M21 6.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.8-.7.4-1.4.6-2.2.8C17.3 5 16 4.5 14.6 4.5c-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9C7.8 9.2 5.2 7.7 3.5 5.4c-.4.7-.6 1.4-.6 2.2 0 1.5.8 2.9 2 3.7-.5 0-1-.2-1.4-.4v.1c0 2.1 1.5 3.8 3.6 4.2-.4.1-.8.1-1.2.1-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.6 3.3-1.6 1.2-3.6 1.9-5.8 1.9-.4 0-.8 0-1.2-.1C4.8 21.6 7.4 22.5 10.2 22.5c7.2 0 11.2-6 11.2-11.2v-.5c.8-.6 1.5-1.3 2-2.1-.7.3-1.4.6-2.1.7z" />
                </svg>
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:text-white active:scale-[0.97]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12.1C22 6.6 17.5 2 12 2S2 6.6 2 12.1c0 5 3.7 9.2 8.5 9.9v-7h-2.6v-2.9H10.5V9.1c0-2.6 1.5-4 3.8-4 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.6h2.3l-.4 2.9h-1.9v7C18.3 21.2 22 17.1 22 12.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="ssw-container flex flex-col gap-2 py-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} SimpleSiteWorks</div>
          <div>Powered by ClowdSpace</div>
        </div>
      </div>
    </footer>
  );
}
