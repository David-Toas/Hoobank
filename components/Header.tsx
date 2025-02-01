import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <header className="bg-transparent py-10 mb-10 px-16">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="logo" height={35} width={35} />
              <div className="flex items-center">
                <span className="text-Hoo font-semibold text-xl">Hoo</span>
                <span className="text-[#57d3d9] font-semibold text-xl">
                  Bank
                </span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/Home"
              className="text-gray-300 font-poppins font-normal text-[16px] leadind-[21px] hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="text-gray-300 hover:text-white transition-colors font-poppins font-normal text-[16px] leadind-[21px]"
            >
              About Us
            </Link>
            <Link
              href="/Features"
              className="text-gray-300 hover:text-white transition-colors font-poppins font-normal text-[16px] leadind-[21px]"
            >
              Features
            </Link>
            <Link
              href="/Solutions"
              className="text-gray-300 hover:text-white transition-colors font-poppins font-normal text-[16px] leadind-[21px]"
            >
              Solutions
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
