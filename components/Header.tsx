"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent pt-10 pb-28 px-6 md:px-16 relative z-50">
      <div className="flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center relative z-50">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="logo" height={35} width={35} />
            <div className="flex items-center">
              <span className="text-Hoo font-semibold text-xl">Hoo</span>
              <span className="text-[#57d3d9] font-semibold text-xl">Bank</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center space-x-8 relative z-50">
          <Link
            href="/Home"
            className="text-gray-300 text-lg hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-gray-300 text-lg hover:text-white transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/Features"
            className="text-gray-300 text-lg hover:text-white transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="/Solutions"
            className="text-gray-300 text-lg hover:text-white transition-colors duration-200"
          >
            Solutions
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden z-40`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#080808] text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-center justify-center space-y-8 shadow-xl`}
      >
        <Link 
          href="/Home" 
          className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200" 
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="/About"
          className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          href="/Features"
          className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200"
          onClick={toggleMenu}
        >
          Features
        </Link>
        <Link
          href="/Solutions"
          className="text-lg font-medium hover:text-[#57d3d9] transition-colors duration-200"
          onClick={toggleMenu}
        >
          Solutions
        </Link>
      </div>
    </header>
  );
}

export default Header;