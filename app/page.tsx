import Header from "../components/Header";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";
import DemoCard from "../components/DemoCard";
import PricingCard from "../components/PricingCard";
import MobileAppCard from "../components/MobileAppCard";
import FAQAccordion from "../components/FAQAccordion";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(63,81,181,0.07),transparent_55%)]" />
          <div className="ssw-container grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
            <div className="space-y-7">
              <span className="ssw-kicker">Built for local businesses</span>
              <h1 className="ssw-h1">
                Simple websites
                <br className="hidden md:block" /> for small local businesses
              </h1>
              <p className="ssw-lead">
                Clear pricing. Fast delivery. No technical stress — websites that help customers find and contact you.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="/packages" className="btn-primary">
                  View packages
                </a>
                <a href="#contact" className="btn-secondary">
                  Contact us
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-zinc-500">
                <span>From £299</span>
                <span>Typical delivery 2–3 weeks</span>
                <span>No technical knowledge needed</span>
              </div>
            </div>

            <div className="ssw-card p-0">
              <div className="flex items-center gap-1.5 border-b border-zinc-200/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                <span className="ml-3 rounded-md bg-zinc-100 px-3 py-1 text-[11px] text-zinc-400">yoursite.co.uk</span>
              </div>
              <div className="space-y-5 p-6 md:p-8">
                <div className="text-xs font-medium uppercase tracking-wider text-zinc-400">Local & trusted</div>
                <div className="text-2xl font-semibold tracking-tight text-zinc-950">Your business, found online.</div>
                <p className="text-sm leading-relaxed text-zinc-500">
                  A calm, mobile-friendly site with services, photos, and a contact form — ready for customers this month.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Services", "Gallery", "Contact"].map((label) => (
                    <div
                      key={label}
                      className="rounded-xl border border-zinc-200/60 bg-zinc-50 px-3 py-4 text-center text-xs font-medium text-zinc-600"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200/60 bg-zinc-50/70">
          <div className="ssw-container grid gap-8 py-12 md:grid-cols-3 md:py-16">
            {[
              { title: "Clear pricing", body: "Packages from £299. No surprise invoices." },
              { title: "Fast delivery", body: "Most sites live in two to three weeks." },
              { title: "No tech stress", body: "We handle setup, hosting, and training." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="ssw-section">
          <div className="ssw-container">
            <div className="max-w-2xl">
              <h2 className="ssw-h2">Packages</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-500">
                Choose the right package for your business — straightforward, affordable, and tailored.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <PackageCard
                title="Basic"
                price="from £299"
                bullets={["One-page landing", "Mobile-friendly", "Contact form", "Hosting setup", "Delivery in 2–3 weeks"]}
              />
              <PackageCard
                title="Custom"
                price="from £499–£899"
                bullets={["3–5 pages", "Gallery", "Services", "Branding"]}
                featured
              />
              <PackageCard
                title="Advanced"
                price="£999+"
                bullets={["Payments", "Booking systems", "Customer login", "Photo upload system"]}
              />
            </div>
          </div>
        </section>

        <section className="ssw-section bg-zinc-50/80">
          <div className="ssw-container">
            <div className="max-w-2xl">
              <h2 className="ssw-h2">Sample demo websites</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-500">
                See the kind of site we build — then pick a package that matches your trade.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <DemoCard title="Tradesman Demo" desc="Plumber, electrician, gardener" href="/demo/tradesman" src="/demos/tradesman.svg" />
              <DemoCard title="Shop/Café Demo" desc="Menu, opening hours, map" href="/demo/shop" src="/demos/shop.svg" />
              <DemoCard title="Professional Services" desc="Accountant, tutor, consultant" href="/demo/professional" src="/demos/professional.svg" />
            </div>
          </div>
        </section>

        <section className="ssw-section">
          <div className="ssw-container">
            <div className="max-w-2xl">
              <h2 className="ssw-h2">Pricing explained simply</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-500">
                One number. What’s included is written in plain English.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <PricingCard title="Basic" price="£299" />
              <PricingCard title="Custom" price="£499–£899" />
              <PricingCard title="Advanced" price="£999+" />
            </div>
          </div>
        </section>

        <section className="ssw-section pt-0">
          <div className="ssw-container">
            <div className="max-w-2xl">
              <h2 className="ssw-h2">Mobile app development</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-500">
                Booking, delivery, loyalty and customer apps built with React Native / Expo.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              <MobileAppCard title="Booking Apps" desc="Appointment and schedule flows" />
              <MobileAppCard title="Customer Apps" desc="Profiles and messaging" />
              <MobileAppCard title="Delivery Apps" desc="Orders and tracking" />
              <MobileAppCard title="Loyalty Apps" desc="Points and rewards" />
            </div>
          </div>
        </section>

        <section className="ssw-section border-t border-zinc-200/60 bg-zinc-50/60">
          <div className="ssw-container grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="ssw-h2">FAQ</h2>
              <p className="mt-3 mb-8 text-base leading-relaxed text-zinc-500">
                Straight answers before you get in touch.
              </p>
              <FAQAccordion
                items={[
                  { q: "How long does it take?", a: "Typical delivery is 2–3 weeks for basic sites; custom projects vary." },
                  { q: "Do I need technical knowledge?", a: "No — we handle setup and training." },
                  { q: "Who buys the domain?", a: "You can buy the domain or we can handle it on your behalf." },
                  { q: "Can I update my website later?", a: "Yes — we provide guides and optional support." },
                  { q: "Do you offer SEO?", a: "We include basic SEO and can provide advanced packages." },
                  { q: "Can I upload photos?", a: "Yes — galleries and upload features are supported." },
                  { q: "Do you offer emergency support?", a: "Yes — emergency support is available as an add-on." },
                ]}
              />
            </div>

            <div>
              <h2 className="ssw-h2">Contact</h2>
              <p className="mt-3 mb-8 text-base leading-relaxed text-zinc-500">
                Tell us about the business. We’ll recommend a package.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
