import Link from "next/link";
import Logo, { BrandWordmark } from "./Logo";
import SocialLinks from "./SocialLinks";

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
            <SocialLinks className="pt-2" />
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
