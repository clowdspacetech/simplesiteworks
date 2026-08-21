import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function TradesmanDemo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Tradesman Demo</h1>
        <p className="mt-3 text-zinc-600">A simple demo site for plumbers, electricians and gardeners with contact, services and gallery.</p>
      </main>
      <Footer />
    </div>
  );
}
