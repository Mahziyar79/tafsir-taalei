import Image from "next/image";
import appleStore from "@/public/assets/images/apple-store.svg";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="bg-[#1E3A8A] p-10 rounded-[20px]">
      <div className="flex flex-col items-center justify-center py-[30px] px-[40px] rounded-[20px] bg-cover bg-[url('../public/assets/images/bg.png')]">
        <h1 className="text-3xl md:text-6xl mb-12 text-white font-bold">Quran Hadi</h1>
        <p className="mb-6 text-white text-center">
          With English Translation and Interpretation (Tafsir) (Ahlul‑Bayt)
        </p>
        <Link href={"https://www.apple.com/uk/app-store/"}>
          <Image
            src={appleStore}
            alt="apple store logo"
            width={262}
            height={78}
          />
        </Link>
      </div>
    </section>
  );
};

export default HomeBanner;
