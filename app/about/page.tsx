import SafeImage from "../../components/SafeImage";

export default function AboutPage() {
  return (
    <main className="min-w-0 flex-1 overflow-x-clip">
      <section className="ssw-section">
        <div className="ssw-container">
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <span className="ssw-kicker">Global local web agency</span>
              <h1 className="ssw-h1 mt-5 max-w-3xl">About SimpleSiteWorks</h1>
              <p className="ssw-lead mt-5 max-w-2xl">
                We build high-converting digital storefronts for local businesses worldwide — engineered for enquiries, automation, and measurable ROI.
              </p>
            </div>
            <div className="ssw-card min-w-0 overflow-hidden p-0">
              <SafeImage
                src="/illustrations/about-team.svg"
                alt="Illustration of a local business website and partnership overview"
                width={720}
                height={400}
                className="w-full max-w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="ssw-grid mt-14 grid gap-6 md:grid-cols-3">
            {[
              { title: "ROI-first", body: "Every layout decision is tied to enquiries captured and hours saved — not vanity metrics." },
              { title: "Global pricing", body: "Localized tiers in six currencies with transparent monthly maintenance." },
              { title: "Done-for-you", body: "Copy, imagery, hosting, and launch — so you focus on clients, not CMS settings." },
            ].map((item) => (
              <div key={item.title} className="ssw-card ssw-card-hover">
                <h2 className="text-lg font-extrabold tracking-tight text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
