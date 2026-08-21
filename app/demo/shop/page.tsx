import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ShopDemo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Shop / Café Demo</h1>
        <p className="mt-3 text-zinc-600">Demo with menu, opening hours, map and a simple ordering/contact system.</p>
      </main>
      <Footer />
    </div>
  );
}
