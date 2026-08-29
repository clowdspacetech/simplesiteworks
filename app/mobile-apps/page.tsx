import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileAppCard from "../../components/MobileAppCard";

export default function MobileApps() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="ssw-section">
          <div className="ssw-container">
            <span className="ssw-kicker">React Native / Expo</span>
            <h1 className="ssw-h1 mt-5 max-w-3xl">Mobile app development</h1>
            <p className="ssw-lead mt-4">
              We build booking, customer, delivery and loyalty apps using React Native / Expo.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              <MobileAppCard title="Booking Apps" desc="Appointment and schedule flows" />
              <MobileAppCard title="Customer Apps" desc="Profiles and messaging" />
              <MobileAppCard title="Delivery Apps" desc="Orders and tracking" />
              <MobileAppCard title="Loyalty Apps" desc="Points and rewards" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
