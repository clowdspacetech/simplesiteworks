export default function Footer() {
  return (
    <footer className="mt-12 border-t pt-8 pb-12 bg-white relative">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--ssw-accent-start)] to-[var(--ssw-accent-end)]" />
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <div className="font-bold text-lg">SimpleSiteWorks</div>
          <div className="text-sm text-zinc-500 mt-1">Websites made easy.</div>
        </div>

        <div className="text-sm text-zinc-600 flex items-center gap-4">
          <div>© {new Date().getFullYear()} SimpleSiteWorks</div>
          <div className="text-zinc-500">— Powered by ClowdSpace</div>
          <div className="flex items-center gap-3 ml-4">
            <a aria-label="Twitter" href="#" className="p-2 rounded-full hover:shadow-ssw-lg transition-shadow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 6.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.8-.7.4-1.4.6-2.2.8C17.3 5 16 4.5 14.6 4.5c-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9C7.8 9.2 5.2 7.7 3.5 5.4c-.4.7-.6 1.4-.6 2.2 0 1.5.8 2.9 2 3.7-.5 0-1-.2-1.4-.4v.1c0 2.1 1.5 3.8 3.6 4.2-.4.1-.8.1-1.2.1-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.6 3.3-1.6 1.2-3.6 1.9-5.8 1.9-.4 0-.8 0-1.2-.1C4.8 21.6 7.4 22.5 10.2 22.5c7.2 0 11.2-6 11.2-11.2v-.5c.8-.6 1.5-1.3 2-2.1-.7.3-1.4.6-2.1.7z" fill="#0F172A"/></svg>
            </a>
            <a aria-label="Facebook" href="#" className="p-2 rounded-full hover:shadow-ssw-lg transition-shadow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 12.1C22 6.6 17.5 2 12 2S2 6.6 2 12.1c0 5 3.7 9.2 8.5 9.9v-7h-2.6v-2.9H10.5V9.1c0-2.6 1.5-4 3.8-4 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.6h2.3l-.4 2.9h-1.9v7C18.3 21.2 22 17.1 22 12.1z" fill="#0F172A"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
