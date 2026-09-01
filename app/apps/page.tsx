import type { Metadata } from "next";
import MobileAppCard from "../../components/MobileAppCard";
import SafeImage from "../../components/SafeImage";
import { APP_OFFERINGS } from "../../lib/site";

export const metadata: Metadata = {
  title: "Mobile Apps — SimpleSiteWorks",
  robots: { index: false, follow: false },
};

/** Hidden route — mobile app development kept off the core web design funnel */
export default function AppsPage() {
  return (
    <main className="min-w-0 flex-1 overflow-x-clip">
      <section className="ssw-section">
        <div className="ssw-container">
          <span className="ssw-kicker">React Native / Expo</span>
          <h1 className="ssw-h1 mt-5 max-w-3xl">Mobile app development</h1>
          <p className="ssw-lead mt-4">
            Booking, delivery, loyalty and customer apps — available as a separate engagement from our core web packages.
          </p>
          <div className="mt-10 grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div className="ssw-card min-w-0 overflow-hidden p-0">
              <SafeImage
                src="/illustrations/apps-pipeline.svg"
                alt="Delivery pipeline and mobile app preview graphic"
                width={480}
                height={280}
                className="w-full max-w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="ssw-grid grid grid-cols-1 gap-5 sm:grid-cols-2">
              {APP_OFFERINGS.map((item) => (
                <MobileAppCard key={item.title} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
