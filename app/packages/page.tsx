import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PackageCard from "../../components/PackageCard";

export default function PackagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Packages</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <PackageCard title="Basic" price="from £299" bullets={["One-page landing","Mobile-friendly","Contact form","Hosting setup","Delivery in 2–3 weeks"]} />
          <PackageCard title="Custom" price="from £499–£899" bullets={["3–5 pages","Gallery","Services","Branding"]} />
          <PackageCard title="Advanced" price="£999+" bullets={["Payments","Booking systems","Customer login","Photo upload system"]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
