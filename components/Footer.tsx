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
            Done-for-you simple websites for local businesses — build without tech knowledge, launch fast, convert more.
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
                aria-label="Facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:text-white active:scale-[0.97]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.4V9.41c0-2.37 1.4-3.69 3.56-3.69 1.03 0 2.11.19 2.11.19v2.33h-1.19c-1.17 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.9h-2.2V22c4.78-.75 8.44-4.91 8.44-9.93z" />
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
