import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl m-auto">
      <Header />
      <HomeBanner />
      <Footer />
    </main>
  );
}
