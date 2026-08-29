import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function TradesmanDemo() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="ssw-section">
          <div className="ssw-container">
            <span className="ssw-kicker">Sample website</span>
            <h1 className="ssw-h1 mt-5">Tradesman demo</h1>
            <p className="ssw-lead mt-4">
              A simple demo site for plumbers, electricians and gardeners with contact, services and gallery.
            </p>

            <div className="ssw-card mt-12 overflow-hidden p-0">
              <div className="border-b border-zinc-200/60 bg-zinc-50 px-6 py-8 md:px-10 md:py-12">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">Reliable · Local · Insured</p>
                <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                  Plumbing, electrics and garden work — done properly.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-500 md:text-base">
                  Call-outs, quoted jobs, and a photo gallery of recent work. Customers can reach you in one tap.
                </p>
                <Link href="/contact" className="btn-primary mt-6">
                  Request this style
                </Link>
              </div>
              <div className="grid gap-px bg-zinc-200/60 md:grid-cols-3">
                {["Emergency call-outs", "Quoted installations", "Aftercare & guarantees"].map((item) => (
                  <div key={item} className="bg-white px-6 py-8">
                    <div className="text-sm font-semibold tracking-tight text-zinc-950">{item}</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                      Clear services, photos of the job, and a simple contact form.
                    </p>
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
