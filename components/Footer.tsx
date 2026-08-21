export default function Footer() {
  return (
    <footer className="mt-12 border-t pt-8 pb-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <div className="font-bold text-lg">SimpleSiteWorks</div>
          <div className="text-sm text-zinc-500 mt-1">Websites made easy.</div>
        </div>

        <div className="text-sm text-zinc-600">© {new Date().getFullYear()} SimpleSiteWorks — Powered by ClowdSpace</div>
      </div>
    </footer>
  );
}
