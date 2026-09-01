import Link from "next/link";

export default function ShopDemo() {
  return (
    <main className="flex-1">
      <section className="ssw-section">
        <div className="ssw-container">
          <span className="ssw-kicker">Sample website</span>
          <h1 className="ssw-h1 mt-5">Shop / café demo</h1>
          <p className="ssw-lead mt-4">Demo with menu, opening hours, map and a simple ordering/contact system.</p>

          <div className="ssw-card mt-12 overflow-hidden p-0">
            <div className="border-b border-white/10 bg-white/5 px-6 py-8 md:px-10 md:py-12">
              <p className="text-xs font-medium uppercase tracking-wider text-cyan-200">Open today · 8:00–16:00</p>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Coffee, pastry, and a table by the window.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
                Menu, hours, and a map so regulars and visitors know exactly where you are.
              </p>
              <Link href="/contact?package=Growth&business=Shop%20%2F%20caf%C3%A9" className="btn-primary mt-6">
                Request this style
              </Link>
            </div>
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {[
                { title: "Menu", body: "Seasonal drinks and food, easy to update." },
                { title: "Hours", body: "Today’s opening times, front and centre." },
                { title: "Find us", body: "Map pin and a short note for parking." },
              ].map((item) => (
                <div key={item.title} className="bg-zinc-950/40 px-6 py-8 backdrop-blur-xl">
                  <div className="text-sm font-extrabold tracking-tight text-white">{item.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
