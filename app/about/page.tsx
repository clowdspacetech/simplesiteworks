import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">About SimpleSiteWorks</h1>
        <p className="mt-4 text-zinc-600">We build simple, fast websites for small local businesses. Our mission is to make websites approachable and affordable.</p>
      </main>
      <Footer />
    </div>
  );
}
