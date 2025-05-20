import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/Logo Mobile.png"

const Footer = () => {
  return (
    <div className="flex flex-col">
      
      {/* <Image src={pattern} alt="" className="place-self-end" /> */}
    
    <footer className="bg-black text-white font-['BL Melody'] text-sm ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section: Logo, Nav, Tagline */}
          <div className="space-y-6">
            {/* Logo */}
            <div>
              <Image
                src={logo} // Change this to your actual logo file path
                alt="LTFH Logo"
                width={100}
                height={30}
              />
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-2 uppercase text-[20px] leading-[24px]">
              <Link href="/about" className="hover:text-gray-300 hover:underline">
                About
              </Link>
              <Link href="/shop" className="hover:text-gray-300 hover:underline">
                Shop
              </Link>
              <Link href="/contact" className="hover:text-gray-300 hover:underline">
                Contact Us
              </Link>
            </nav>

            {/* Tagline */}
            <p className="pt-4 text-base font-light">
              Everything to complement her look.
            </p>
          </div>

          {/* Right Section: Contact Info + Socials */}
<div className="space-y-6">
  {/* Contact */}
  <div className="space-y-1">
    <h3 className="uppercase text-xs tracking-widest">Connect</h3>
    <p className="text-sm">Service@littlethingsforher.com</p>
    <a
      href="tel:+2342013306336"
      className="text-sm hover:text-gray-300 block"
    >
      +234 201 330 6336
    </a>
  </div>

  {/* Socials */}
  <div className="space-y-2">
    <h4 className="uppercase text-xs tracking-widest">Follow Us</h4>
    <div className="flex space-x-4 text-xl">
      <Link href="https://www.instagram.com/littlethings4her_/?hl=en" aria-label="Instagram">
        <FaInstagram />
      </Link>
      <Link href="https://www.tiktok.com/@littlethingsforher?lang=en" aria-label="TikTok">
        <FaTiktok />
      </Link>
      <Link href="https://x.com/ltlthings4her" aria-label="X (Twitter)">
        <FaXTwitter />
      </Link>
    </div>
  </div>
</div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-4 text-[10px] text-gray-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
          <Link href="/TermsOfUse" className="hover:text-white">
            Terms
          </Link>
          <span>©2025 LTFH Co. – All Rights Reserved.</span>
          <span className="text-xs tracking-wide">Little Things for Her</span>
        </div>
      </div>
      </footer>
      </div>
  );
};

export default Footer;
