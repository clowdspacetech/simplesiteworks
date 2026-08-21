import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/75 backdrop-blur-md border-b border-transparent">
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
          <Link href="/packages" className="hover:underline">Packages</Link>
          <Link href="/demo/tradesman" className="hover:underline">Demos</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="px-3 py-1 rounded-full gradient-btn text-sm">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
