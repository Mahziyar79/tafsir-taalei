import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between mt-5 mb-8">
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={165} height={47} />
      </Link>
      <Link href={"https://www.apple.com/uk/app-store/"}>
        <button className="bg-[#1E3A8A] px-[35px] py-[9px] text-white rounded-lg">
          Download
        </button>
      </Link>
    </div>
  );
};

export default Header;
