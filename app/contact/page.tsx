import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="ssw-section">
          <div className="ssw-container grid items-start gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <div>
              <span className="ssw-kicker">We reply promptly</span>
              <h1 className="ssw-h1 mt-5">Get in touch</h1>
              <p className="ssw-lead mt-4">
                Tell us about your business and we’ll suggest the best package.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
