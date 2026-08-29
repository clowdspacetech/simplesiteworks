import MobileAppCard from "../../components/MobileAppCard";
import { APP_OFFERINGS } from "../../lib/site";

export default function MobileApps() {
  return (
    <main className="flex-1">
      <section className="ssw-section">
        <div className="ssw-container">
          <span className="ssw-kicker">React Native / Expo</span>
          <h1 className="ssw-h1 mt-5 max-w-3xl">Mobile app development</h1>
          <p className="ssw-lead mt-4">
            We build booking, customer, delivery and loyalty apps using React Native / Expo.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {APP_OFFERINGS.map((item) => (
              <MobileAppCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
