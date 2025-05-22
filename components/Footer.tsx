import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/Logo Mobile.png";
import textLogo from "../assets/Desktop.png";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-black text-white font-['BL Melody'] text-sm">
        {/* Top Container */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Left Section: Logo, Nav, Tagline */}
            <div className="space-y-6">
              {/* Logo */}
              <div>
                <Image
                  src={logo}
                  alt="LTFH Logo"
                  width={100}
                  height={30}
                />
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col space-y-2 uppercase text-[20px] leading-[24px] text-8xl">
                <Link href="/about" className="hover:text-gray-300 hover:underline text-[15px]">
                  About
                </Link>
                <Link href="/shop" className="hover:text-gray-300 hover:underline text-[15px]">
                  Shop
                </Link>
                <Link href="/contact" className="hover:text-gray-300 hover:underline text-[15px]">
                  Contact Us
                </Link>
              </nav>

              {/* Tagline */}
              <p className="pt-4 text-[23px] font-light sm:block hidden" style={{ fontFamily: "Belgan Aesthetic" }}>
                Everything to complement her look.
              </p>
            </div>

            {/* Right Section: Contact Info + Socials */}
            <div className="space-y-6">
              {/* Contact */}
              <div className="space-y-1">
                <h3 className="uppercase text-xs tracking-widest font-bold">Connect</h3>
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
                <h4 className="uppercase text-xs tracking-widest font-bold">Follow Us</h4>
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
        </div>

        <p className="pt-4 text-base font-light ml-6 sm:hidden" style={{ fontFamily: "Belgan Aesthetic" }}>
                Everything to complement her look.
              </p>

        {/* Full-width Bottom Footer */}
        <div className="w-full border-t border-white px-6 mt-12 pt-4 text-[10px] text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-10">
          <Link href="/TermsOfUse" className="hover:text-white place-self-end sm:ml-12 hidden sm:block">
            Terms
          </Link>
          <div className="flex flex-col sm:flex-row sm:gap-0 items-start sm:items-center">
            <div className="mr-1">©2025 LTFH Co. -</div>
            <div>All Rights Reserved.</div>
          </div>
          <Link href="#top">
            <Image src={textLogo} alt="" className="w-40 mr-24" />
          </Link>

          <Link href="/TermsOfUse" className="hover:text-white place-self-end sm:ml-12 sm:hidden">
            Terms
          </Link>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
