import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-4 items-center justify-between mt-20 pt-8 pb-4 border-t-2 border-gray-200">
      <div className="flex items-center gap-7">
        <Link href={"/terms-and-conditions"}>Terms and Conditions</Link>
        <Link href={"/privacy-policy"}>Privacy Policy</Link>
      </div>
      <p>Copyright ©2024 forosha.ir</p>
    </footer>
  );
};

export default Footer;
