import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Get in touch</h1>
        <p className="mt-2 text-zinc-600">Tell us about your business and we'll suggest the best package.</p>
        <div className="mt-6"><ContactForm /></div>
      </main>
      <Footer />
    </div>
  );
}
