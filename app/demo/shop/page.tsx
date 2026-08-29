import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function ShopDemo() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="ssw-section">
          <div className="ssw-container">
            <span className="ssw-kicker">Sample website</span>
            <h1 className="ssw-h1 mt-5">Shop / café demo</h1>
            <p className="ssw-lead mt-4">
              Demo with menu, opening hours, map and a simple ordering/contact system.
            </p>

            <div className="ssw-card mt-12 overflow-hidden p-0">
              <div className="border-b border-zinc-200/60 bg-zinc-50 px-6 py-8 md:px-10 md:py-12">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">Open today · 8:00–16:00</p>
                <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                  Coffee, pastry, and a table by the window.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-500 md:text-base">
                  Menu, hours, and a map so regulars and visitors know exactly where you are.
                </p>
                <Link href="/contact" className="btn-primary mt-6">
                  Request this style
                </Link>
              </div>
              <div className="grid gap-px bg-zinc-200/60 md:grid-cols-3">
                {[
                  { title: "Menu", body: "Seasonal drinks and food, easy to update." },
                  { title: "Hours", body: "Today’s opening times, front and centre." },
                  { title: "Find us", body: "Map pin and a short note for parking." },
                ].map((item) => (
                  <div key={item.title} className="bg-white px-6 py-8">
                    <div className="text-sm font-semibold tracking-tight text-zinc-950">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
