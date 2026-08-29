import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function ProfessionalDemo() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="ssw-section">
          <div className="ssw-container">
            <span className="ssw-kicker">Sample website</span>
            <h1 className="ssw-h1 mt-5">Professional services demo</h1>
            <p className="ssw-lead mt-4">
              Demo for accountants, tutors and consultants with services, testimonials and contact.
            </p>

            <div className="ssw-card mt-12 overflow-hidden p-0">
              <div className="border-b border-zinc-200/60 bg-zinc-50 px-6 py-8 md:px-10 md:py-12">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">Advice you can act on</p>
                <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                  Calm, credible, easy to enquire.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-500 md:text-base">
                  Services laid out clearly, a few client notes, and a form that doesn’t feel like paperwork.
                </p>
                <Link href="/contact" className="btn-primary mt-6">
                  Request this style
                </Link>
              </div>
              <div className="grid gap-px bg-zinc-200/60 md:grid-cols-3">
                {[
                  { title: "Services", body: "Tax, tuition, or consulting — listed without clutter." },
                  { title: "Testimonials", body: "Short quotes that build trust at a glance." },
                  { title: "Contact", body: "A simple enquiry form and phone number." },
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
