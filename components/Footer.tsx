import Link from "next/link";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Navigation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif">👑 LTFH</h2>
            <ul className="space-y-2 uppercase text-xs tracking-wider">
              <li>
                <Link href="/about" className="underline hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-gray-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Center Text */}
          <div className="hidden md:flex items-end justify-center text-center">
            <p className="font-serif text-lg md:text-xl">
              Everything to complement her look.
            </p>
          </div>

          {/* Contact + Socials */}
          <div className="space-y-4 md:text-right">
            <div>
              <h3 className="uppercase text-xs font-semibold tracking-widest mb-1">Connect</h3>
              <p>Service@littlethingsforher.com</p>
              <a href="tel:+2342013306336" className="hover:text-gray-300 block">
                +234 201 330 6336
              </a>
            </div>
            <div className="flex md:justify-end space-x-4 text-xl">
              <Link href="https://www.instagram.com/littlethings4her_/?hl=en">
                <FaInstagram />
              </Link>
              <Link href="https://www.tiktok.com/@littlethingsforher?lang=en">
                <FaTiktok />
              </Link>
              <Link href="https://x.com/ltlthings4her">
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-800 mt-10 pt-4 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-500 gap-2 sm:gap-0">
          <Link href="/TermsOfUse" className="hover:text-white">
            Terms
          </Link>
          <span>©2025 LTFH Co. – All Rights Reserved.</span>
          <span className="text-xs tracking-wide">Little Things for Her</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
