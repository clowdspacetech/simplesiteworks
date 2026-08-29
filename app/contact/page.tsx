import ContactForm from "../../components/ContactForm";
import { ENQUIRY_EMAIL, isPackageId } from "../../lib/site";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const pkg = typeof params.package === "string" && isPackageId(params.package) ? params.package : undefined;
  const business = typeof params.business === "string" ? params.business : undefined;

  return (
    <main className="min-w-0 flex-1 overflow-x-clip">
      <section id="contact" className="ssw-section">
        <div className="ssw-container grid min-w-0 items-start gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className="min-w-0">
            <span className="ssw-kicker">We reply promptly</span>
            <h1 className="ssw-h1 mt-5">Get in touch</h1>
            <p className="ssw-lead mt-4">Tell us about your business and we’ll suggest the best package.</p>
          </div>
          <ContactForm selectedPackage={pkg} businessType={business} enquiryEmail={ENQUIRY_EMAIL} />
        </div>
      </section>
    </main>
  );
}
