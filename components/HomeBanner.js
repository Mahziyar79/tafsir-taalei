import Image from "next/image";
import appleStore from "@/public/assets/images/apple-store.svg";

const HomeBanner = () => {
  return (
    <section className="bg-[#1E3A8A] p-10 rounded-[20px]">
      <div className="flex flex-col items-center justify-center py-[30px] px-[40px] rounded-[20px] bg-[url('../public/assets/images/bg.jpg')]">
        <h1 className="text-6xl mb-12 text-white">Quran Hadi</h1>
        <p className="mb-8 text-white">
          With English Translation and Interpretation (Tafsir) (Ahlul‑Bayt)
        </p>
        <Image
          src={appleStore}
          alt="apple store logo"
          width={262}
          height={78}
        />
      </div>
    </section>
  );
};

export default HomeBanner;
