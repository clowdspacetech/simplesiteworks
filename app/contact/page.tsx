import ContactForm from "../../components/ContactForm";
import { isPackageId } from "../../lib/site";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const pkg = typeof params.package === "string" && isPackageId(params.package) ? params.package : undefined;
  const business = typeof params.business === "string" ? params.business : undefined;

  return (
    <main className="flex-1">
      <section id="contact" className="ssw-section">
        <div className="ssw-container grid items-start gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <span className="ssw-kicker">We reply promptly</span>
            <h1 className="ssw-h1 mt-5">Get in touch</h1>
            <p className="ssw-lead mt-4">Tell us about your business and we’ll suggest the best package.</p>
          </div>
          <ContactForm selectedPackage={pkg} businessType={business} />
        </div>
      </section>
    </main>
  );
}
