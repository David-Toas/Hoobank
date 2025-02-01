"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing Lucide icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent pt-10 pb-28 px-6 md:px-16">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="logo" height={35} width={35} />
            <div className="flex items-center">
              <span className="text-Hoo font-semibold text-xl">Hoo</span>
              <span className="text-[#57d3d9] font-semibold text-xl">Bank</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/Home"
            className="text-gray-300 text-lg hover:text-white transition"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-gray-300 text-lg hover:text-white transition"
          >
            About Us
          </Link>
          <Link
            href="/Features"
            className="text-gray-300 text-lg hover:text-white transition"
          >
            Features
          </Link>
          <Link
            href="/Solutions"
            className="text-gray-300 text-lg hover:text-white transition"
          >
            Solutions
          </Link>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-black backdrop:blur-3xl text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-center justify-center space-y-6 shadow-lg`}
      >
        <Link href="/Home" className="text-lg font-medium" onClick={toggleMenu}>
          Home
        </Link>
        <Link
          href="/About"
          className="text-lg font-medium"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          href="/Features"
          className="text-lg font-medium"
          onClick={toggleMenu}
        >
          Features
        </Link>
        <Link
          href="/Solutions"
          className="text-lg font-medium"
          onClick={toggleMenu}
        >
          Solutions
        </Link>
      </div>
    </header>
  );
}

export default Header;
