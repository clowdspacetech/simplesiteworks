import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="ssw-section">
          <div className="ssw-container">
            <span className="ssw-kicker">Our approach</span>
            <h1 className="ssw-h1 mt-5 max-w-3xl">About SimpleSiteWorks</h1>
            <p className="ssw-lead mt-5 max-w-2xl">
              We build simple, fast websites for small local businesses. Our mission is to make websites approachable and affordable.
            </p>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                { title: "Approachable", body: "No jargon. You always know what you’re getting and when it goes live." },
                { title: "Affordable", body: "Clear packages from £299, with optional extras only if you need them." },
                { title: "Local-first", body: "Designed for trades, shops, and professional services in your area." },
              ].map((item) => (
                <div key={item.title} className="ssw-card">
                  <h2 className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
