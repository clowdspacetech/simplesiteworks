import Link from "next/link";

export default function TradesmanDemo() {
  return (
    <main className="flex-1">
      <section className="ssw-section">
        <div className="ssw-container">
          <span className="ssw-kicker">Sample website</span>
          <h1 className="ssw-h1 mt-5">Tradesman demo</h1>
          <p className="ssw-lead mt-4">
            A simple demo site for plumbers, electricians and gardeners with contact, services and gallery.
          </p>

          <div className="ssw-card mt-12 overflow-hidden p-0">
            <div className="border-b border-white/10 bg-white/5 px-6 py-8 md:px-10 md:py-12">
              <p className="text-xs font-medium uppercase tracking-wider text-indigo-300">Reliable · Local · Insured</p>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Plumbing, electrics and garden work — done properly.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
                Call-outs, quoted jobs, and a photo gallery of recent work. Customers can reach you in one tap.
              </p>
              <Link href="/contact?package=Custom&business=Trades" className="btn-primary mt-6">
                Request this style
              </Link>
            </div>
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {["Emergency call-outs", "Quoted installations", "Aftercare & guarantees"].map((item) => (
                <div key={item} className="bg-zinc-950/40 px-6 py-8 backdrop-blur-xl">
                  <div className="text-sm font-extrabold tracking-tight text-white">{item}</div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Clear services, photos of the job, and a simple contact form.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
