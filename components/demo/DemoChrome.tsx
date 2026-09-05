import Link from "next/link";

export default function DemoChrome({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`fixed inset-0 z-[100] overflow-y-auto antialiased ${className}`}>
      <div className="fixed top-0 z-[9999] flex w-full items-center justify-between border-b border-slate-200/60 bg-white/80 px-4 py-2 backdrop-blur-md">
        <p className="text-xs font-medium text-slate-600 sm:text-sm">
          Viewing SimpleSiteWorks Live Niche Template Demo
        </p>
        <Link
          href="/"
          className="inline-flex h-8 shrink-0 items-center rounded-md border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          ← Return to Agency Home
        </Link>
      </div>
      <div className="pt-12">{children}</div>
    </div>
  );
}
