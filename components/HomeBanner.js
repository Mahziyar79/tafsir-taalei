import Image from "next/image";
import appleStore from "@/public/assets/images/apple-store.svg";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="bg-[#1E3A8A] p-10 rounded-[20px]">
      <div className="flex flex-col items-center justify-center py-[20px] px-[30px md:py-[30px] md:px-[40px] rounded-[20px] bg-cover bg-[url('../public/assets/images/bg.png')]">
        <h1 className="text-4xl md:text-6xl mb-12 text-white font-bold">
          Quran Tafsir
        </h1>
        <p className="mb-6 text-white text-center">
          with Translation and Interpretationtation
        </p>
        <Link href={"https://www.apple.com/uk/app-store/"}>
          <Image
            src={appleStore}
            alt="apple store logo"
            width={230}
            height={78}
          />
        </Link>
      </div>
    </section>
  );
};

export default HomeBanner;
