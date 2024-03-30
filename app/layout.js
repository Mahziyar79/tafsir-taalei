import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Tafsir Taalei",
  description: "Quran App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className=" max-w-7xl lg:m-auto mx-3">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
