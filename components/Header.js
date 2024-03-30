import Image from "next/image";
import logo from "@/public/assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between my-5">
      <Image src={logo} alt="logo" width={165} height={47} />
      <button className="bg-[#3658B9] px-[35px] py-[9px] text-white rounded-lg">
        Download
      </button>
    </div>
  );
};

export default Header;
