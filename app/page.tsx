import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import PackageCard from "../components/PackageCard";
import DemoCard from "../components/DemoCard";
import PricingCard from "../components/PricingCard";
import MobileAppCard from "../components/MobileAppCard";
import FAQAccordion from "../components/FAQAccordion";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="hero-bg py-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[var(--ssw-primary)]">
                Simple websites for small local businesses
              </h1>
              <p className="text-lg text-zinc-600 max-w-xl">
                Clear pricing. Fast delivery. No technical stress — websites that help customers find and contact you.
              </p>
              <div className="flex items-center gap-4">
                <a href="/packages" className="inline-block">
                  <Button>View Packages</Button>
                </a>
                <a href="#contact" className="inline-block">
                  <Button variant="outline">Contact Us</Button>
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-ssw-lg">
              <div className="w-full h-72 bg-gradient-to-br from-[var(--ssw-accent-start)] to-[var(--ssw-accent-end)] flex items-center justify-center text-white text-xl">Your site, built fast</div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Packages</h2>
          <p className="text-sm text-zinc-600 mt-2">Choose the right package for your business — straightforward, affordable, and tailored.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PackageCard title="Basic" price="from £299" bullets={["One-page landing","Mobile-friendly","Contact form","Hosting setup","Delivery in 2–3 weeks"]} />
            <PackageCard title="Custom" price="from £499–£899" bullets={["3–5 pages","Gallery","Services","Branding"]} />
            <PackageCard title="Advanced" price="£999+" bullets={["Payments","Booking systems","Customer login","Photo upload system"]} />
          </div>
        </section>

        {/* Demos */}
        <section className="bg-[var(--ssw-card)] py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold">Sample Demo Websites</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <DemoCard title="Tradesman Demo" desc="Plumber, electrician, gardener" href="/demo/tradesman" src="/demos/tradesman.svg" />
              <DemoCard title="Shop/Café Demo" desc="Menu, opening hours, map" href="/demo/shop" src="/demos/shop.svg" />
              <DemoCard title="Professional Services" desc="Accountant, tutor, consultant" href="/demo/professional" src="/demos/professional.svg" />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Pricing explained simply</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard title="Basic" price="£299" />
            <PricingCard title="Custom" price="£499–£899" />
            <PricingCard title="Advanced" price="£999+" />
          </div>
        </section>

        {/* Mobile apps */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Mobile App Development</h2>
          <p className="text-sm text-zinc-600 mt-2">Booking, delivery, loyalty and customer apps built with React Native / Expo.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <MobileAppCard title="Booking Apps" desc="Appointment and schedule flows" />
            <MobileAppCard title="Customer Apps" desc="Profiles and messaging" />
            <MobileAppCard title="Delivery Apps" desc="Orders and tracking" />
            <MobileAppCard title="Loyalty Apps" desc="Points and rewards" />
          </div>
        </section>

        {/* FAQ & Contact */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold">FAQ</h2>
            <div className="mt-4">
              <FAQAccordion items={[
                { q: 'How long does it take?', a: 'Typical delivery is 2–3 weeks for basic sites; custom projects vary.' },
                { q: 'Do I need technical knowledge?', a: 'No — we handle setup and training.' },
                { q: 'Who buys the domain?', a: 'You can buy the domain or we can handle it on your behalf.' },
                { q: 'Can I update my website later?', a: 'Yes — we provide guides and optional support.' },
                { q: 'Do you offer SEO?', a: 'We include basic SEO and can provide advanced packages.' },
                { q: 'Can I upload photos?', a: 'Yes — galleries and upload features are supported.' },
                { q: 'Do you offer emergency support?', a: 'Yes — emergency support is available as an add-on.' },
              ]} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
