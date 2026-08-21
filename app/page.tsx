import Header from "../components/Header";
import Footer from "../components/Footer";
import GradientButton from "../components/GradientButton";
import PackageCard from "../components/PackageCard";
import DemoCard from "../components/DemoCard";
import PricingCard from "../components/PricingCard";
import MobileAppCard from "../components/MobileAppCard";
import FAQAccordion from "../components/FAQAccordion";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">Simple websites for small local businesses.</h1>
            <p className="mt-4 text-lg text-zinc-600">Clear pricing. Fast delivery. No technical stress.</p>
            <div className="mt-6 flex gap-3">
              <a href="/packages" className="gradient-btn">View Packages</a>
              <a href="#contact" className="outline-btn">Contact Us</a>
            </div>
          </div>
          <div className="w-full h-64 bg-gradient-to-r from-[var(--ssw-accent-start)] to-[var(--ssw-accent-end)] rounded-xl shadow-lg" />
        </section>

        {/* Packages */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Packages</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PackageCard title="Basic" price="from £299" bullets={["One-page landing","Mobile-friendly","Contact form","Hosting setup","Delivery in 2–3 weeks"]} />
            <PackageCard title="Custom" price="from £499–£899" bullets={["3–5 pages","Gallery","Services","Branding"]} />
            <PackageCard title="Advanced" price="£999+" bullets={["Payments","Booking systems","Customer login","Photo upload system"]} />
          </div>
        </section>

        {/* Demos */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Sample Demo Websites</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <DemoCard title="Tradesman Demo" desc="Plumber, electrician, gardener" href="/demo/tradesman" src="/demos/tradesman.svg" />
            <DemoCard title="Shop/Café Demo" desc="Menu, opening hours, map" href="/demo/shop" src="/demos/shop.svg" />
            <DemoCard title="Professional Services" desc="Accountant, tutor, consultant" href="/demo/professional" src="/demos/professional.svg" />
          </div>
        </section>

        {/* Pricing explained */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Pricing explained simply</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard title="Basic" price="£299" />
            <PricingCard title="Custom" price="£499–£899" />
            <PricingCard title="Advanced" price="£999+" />
          </div>
          <p className="mt-4 text-sm text-zinc-600">Domain: £10–£15/year · Hosting: £5–£10/month</p>
        </section>

        {/* Mobile apps */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Mobile App Development</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <MobileAppCard title="Booking Apps" desc="React Native / Expo booking experiences" />
            <MobileAppCard title="Customer Apps" desc="Loyalty and profile management" />
            <MobileAppCard title="Delivery Apps" desc="Order and tracking flows" />
            <MobileAppCard title="Loyalty Apps" desc="Rewards and offers" />
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
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
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />

      <a href="/contact" className="floating-contact">
        <div className="gradient-btn p-3 rounded-full">Contact Us</div>
      </a>
    </div>
  );
}
