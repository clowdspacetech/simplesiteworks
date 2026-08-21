import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileAppCard from "../../components/MobileAppCard";

export default function MobileApps() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Mobile App Development</h1>
        <p className="mt-2 text-zinc-600">We build booking, customer, delivery and loyalty apps using React Native / Expo.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <MobileAppCard title="Booking Apps" desc="Appointment and schedule flows" />
          <MobileAppCard title="Customer Apps" desc="Profiles and messaging" />
          <MobileAppCard title="Delivery Apps" desc="Orders and tracking" />
          <MobileAppCard title="Loyalty Apps" desc="Points and rewards" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
