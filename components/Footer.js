import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center mt-20 pt-8 pb-4 border-t-2 border-gray-200">
      <div className="flex items-center gap-7">
        <Link href={"/terms-and-conditions"}>Terms and Conditions</Link>
        <Link href={"/privacy-policy"}>Privacy Policy</Link>
      </div>
      
    </footer>
  );
};

export default Footer;
