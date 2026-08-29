import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PackageCard from "../../components/PackageCard";

export default function PackagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="ssw-section">
          <div className="ssw-container">
            <span className="ssw-kicker">Straightforward pricing</span>
            <h1 className="ssw-h1 mt-5 max-w-3xl">Packages</h1>
            <p className="ssw-lead mt-4">
              Choose the right package for your business — straightforward, affordable, and tailored.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
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
      </main>
      <Footer />
    </div>
  );
}
