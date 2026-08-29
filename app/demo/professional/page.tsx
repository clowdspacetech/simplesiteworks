import Link from "next/link";

export default function ProfessionalDemo() {
  return (
    <main className="flex-1">
      <section className="ssw-section">
        <div className="ssw-container">
          <span className="ssw-kicker">Sample website</span>
          <h1 className="ssw-h1 mt-5">Professional services demo</h1>
          <p className="ssw-lead mt-4">
            Demo for accountants, tutors and consultants with services, testimonials and contact.
          </p>

          <div className="ssw-card mt-12 overflow-hidden p-0">
            <div className="border-b border-white/10 bg-white/5 px-6 py-8 md:px-10 md:py-12">
              <p className="text-xs font-medium uppercase tracking-wider text-violet-200">Advice you can act on</p>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Calm, credible, easy to enquire.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
                Services laid out clearly, a few client notes, and a form that doesn’t feel like paperwork.
              </p>
              <Link href="/contact?package=Custom&business=Professional" className="btn-primary mt-6">
                Request this style
              </Link>
            </div>
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {[
                { title: "Services", body: "Tax, tuition, or consulting — listed without clutter." },
                { title: "Testimonials", body: "Short quotes that build trust at a glance." },
                { title: "Contact", body: "A simple enquiry form and phone number." },
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
