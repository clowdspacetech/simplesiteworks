import Link from "next/link";

export default function WellnessDemo() {
  return (
    <main className="flex-1">
      <section className="ssw-section">
        <div className="ssw-container">
          <span className="ssw-kicker">Sample website</span>
          <h1 className="ssw-h1 mt-5">Wellness demo</h1>
          <p className="ssw-lead mt-4">
            A scheduling-first demo for gyms, yoga studios, and personal trainers with class timetables and membership CTAs.
          </p>

          <div className="ssw-card mt-12 overflow-hidden p-0">
            <div className="border-b border-white/10 bg-white/5 px-6 py-8 md:px-10 md:py-12">
              <p className="text-xs font-medium uppercase tracking-wider text-cyan-200">Train · Recover · Repeat</p>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Classes, coaching, and a timetable that fills itself.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base">
                Dynamic class schedules, membership calls-to-action, and mobile booking flows that keep trainers free of admin.
              </p>
              <Link href="/contact?package=Automation&business=Wellness" className="btn-primary mt-6">
                Request this style
              </Link>
            </div>
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {[
                { title: "Class timetable", body: "Day switcher with live spot counts so members book before classes fill." },
                { title: "Membership CTAs", body: "Clear paths from browse → book → join without endless chat back-and-forth." },
                { title: "Mobile booking", body: "Built for phones — where most fitness searches and last-minute bookings happen." },
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
