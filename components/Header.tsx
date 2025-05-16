"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium">
          <Link href="/">Little Things for Her</Link>
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="text-xs font-medium text-gray-700 hover:text-black">
            ABOUT LTFH
          </Link>
          <Link href="/shop" className="text-xs font-medium text-gray-700 hover:text-black">
            SHOP
          </Link>
        </nav>
        {/* Contact Us Button */}
        <button className="text-xs font-medium text-gray-700 hover:text-black">
          Contact us
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-white shadow-md md:hidden">
          <div className="px-4 py-3 flex space-x-3.5 items-center justify-center">
            <Link
              href="/about"
              className="block py-2 text-lg font-medium text-black hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT LTFH
            </Link>
            <Link
              href="/shop"
              className="block py-2 text-lg font-medium text-black hover:text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              SHOP
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;