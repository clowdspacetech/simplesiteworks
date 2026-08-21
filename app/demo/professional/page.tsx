import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProfessionalDemo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Professional Services Demo</h1>
        <p className="mt-3 text-zinc-600">Demo for accountants, tutors and consultants with services, testimonials and contact.</p>
      </main>
      <Footer />
    </div>
  );
}
