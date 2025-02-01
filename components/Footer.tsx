import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-6">
          {/* Logo & Description */}
          <div>
            <Link href="/Home" className="mb-6">
              <div className="text-[40.58px] leading-[52.75px] font-semibold flex items-center font-poppins">
                <Image src="/logo.svg" alt="logo" height={72} width={72} />
                <span className="">Hoo</span>
                <span className="text-[#57d3d9]">Bank</span>
              </div>
            </Link>
            <p className="text-gray-400 mt-6 ml-5">
              A new way to make payments easy, reliable and secure.
            </p>
          </div>
          {/* Useful Links */}
          <div className="items-center ml-11">
            <h3 className="font-poppins text-[18px] leading-[27px] font-semibold mb-3">
              Useful Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">Content</Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">How it Works</Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">Create</Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">Explore</Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">Terms & Services</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="ml-11">
            <h3 className="font-poppins text-[18px] leading-[27px] font-semibold mb-3">
              Community
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">Help Center</Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">Partners</Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">Suggestions</Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">Blog</Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">Newsletters</Link>
              </li>
            </ul>
          </div>

          {/* Partner */}
          <div className="ml-11">
            <h3 className="font-poppins text-[18px] leading-[27px] font-semibold mb-3">
              Partner
            </h3>
            <ul className="space-y-2 text-gray-400 ">
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">Our Partner</Link>
              </li>
              <li className="text-[16px] leading-[24px] font-normal font-poppins">
                <Link href="/" className="hover:text-cyan-400">Become a Partner</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">
          <p>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaInstagram className="text-white hover:text-cyan-400 cursor-pointer" />
            <FaFacebookF className="text-white hover:text-cyan-400 cursor-pointer" />
            <FaTwitter className="text-white hover:text-cyan-400 cursor-pointer" />
            <FaLinkedinIn className="text-white hover:text-cyan-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
