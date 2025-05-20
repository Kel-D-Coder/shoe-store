"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import "animate.css";
import Image from "next/image";
import logo from "../assets/Logotype on Banner.png";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_fhjdast",
        "template_ephzb7r",
        formRef.current,
        "ZZ5lIC36teQlPiL5w"
      )
      .then(
        () => {
          setMessage("Request sent successfully!");
          setIsSending(false);
          formRef.current?.reset();
        },
        () => {
          setMessage("Failed to send request. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="bg-white">
      <header className="flex justify-between items-center py-4 px-6 bg-white text-black relative z-50" style={{ fontFamily: "BLmelody-light" }}>
        {/* Mobile Menu Icon & Logo (left) */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars2Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
          <Link href="/">
            <Image
              src={logo}
              alt="LTFH Logo"
              width={100}
              height={30}
              className="w-20 h-auto object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/about"
            className="text-xs font-medium text-gray-700 hover:text-black"
          >
            ABOUT LTFH
          </Link>
          <Link
            href="/shop"
            className="text-xs font-medium text-gray-700 hover:text-black"
          >
            SHOP
          </Link>
        </div>

        {/* Desktop Logo (centered) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-sm font-medium">
          <Link href="/">
            <Image
              src={logo}
              alt="LTFH Logo"
             
              className="w-32 h-auto object-contain"
            />
          </Link>
        </div>

        <button
          onClick={() => setIsPanelOpen(true)}
          className="text-xs font-medium text-gray-700 hover:text-black md:block"
        >
          CONTACT US
        </button>
      </header>

      {/* Mobile Navigation Menu */}

      {/* Double underline under header */}
      <div className="w-full">
        <div className="h-[1.5px] bg-[#ba4471]"></div>
        <div className="h-[1.5px] bg-[#ba4471] mt-1"></div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden top-10 left-0 right-0 bg-white shadow-md z-10">
          {/* Nav links */}
          <div className="flex flex-row px-6 py-4 gap-6">
            <Link
              href="/about"
              className="text-base font-bold text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT LTFH
            </Link>
            <Link
              href="/shop"
              className="text-base font-bold text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SHOP
            </Link>
          </div>
        </div>
      )}

      {isPanelOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsPanelOpen(false)}
            className="fixed inset-0 bg-opacity-40 z-40 animate__animated animate__fadeIn"
          ></div>

          {/* Slide-in Panel */}
          <div className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg z-50 animate__animated animate__fadeInRight overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-sm font-medium">Order Catalogue</h2>
              <button
                onClick={() => setIsPanelOpen(false)}
                className="text-sm font-semibold"
              >
                Close
              </button>
            </div>

            <div className="p-6 text-black">
              <h1 className="text-2xl font-semibold mb-4 text-center">REQUEST SHEET</h1>
              <p className="text-sm text-gray-600 mb-10 text-center max-w-xs mx-auto">
                Explore our curated collection through our exclusive physical catalogue. Submit your details, and we’ll arrange delivery.
              </p>

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-7 text-sm text-black mt-2"
              >
                {/* All fields required */}
                <p className="text-[15px] mb-4 font-normal text-black">
                  All fields required<span className="text-red-500">*</span>
                </p>

                {/* Civility and Full Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="mb-1 text-[15px] font-normal text-black" htmlFor="civility">
                      Civility*
                    </label>
                    <input
                      id="civility"
                      name="civility"
                      placeholder="Mr/Mrs/Miss"
                      required
                      className="border border-gray-300 px-3 py-2 w-full bg-white text-black placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-[15px] font-normal text-black" htmlFor="full_name">
                      Full name*
                    </label>
                    <input
                      id="full_name"
                      name="full_name"
                      placeholder="Full Name"
                      required
                      className="border border-gray-300 px-3 py-2 w-full bg-white text-black placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col mt-2">
                  <label className="mb-1 text-[15px] font-normal text-black" htmlFor="phone">
                    Phone number*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    required
                    className="border border-gray-300 px-3 py-2 w-full bg-white text-black placeholder-gray-400"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col mt-2">
                  <label className="mb-1 text-[15px] font-normal text-black" htmlFor="email">
                    Email address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your address"
                    required
                    className="border border-gray-300 px-3 py-2 w-full bg-white text-black placeholder-gray-400"
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col mt-2">
                  <label className="mb-1 text-[15px] font-normal text-black" htmlFor="address">
                    Address *
                  </label>
                  <input
                    id="address"
                    name="address"
                    placeholder="Find your address"
                    required
                    className="border border-gray-300 px-3 py-2 w-full bg-white text-black placeholder-gray-400"
                  />
                </div>

                {/* State and Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="mb-1 text-[15px] font-normal text-black" htmlFor="state">
                      State*
                    </label>
                    <input
                      id="state"
                      name="state"
                      placeholder="Add state"
                      required
                      className="border border-gray-300 px-3 py-2 w-full bg-white text-black placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-[15px] font-normal text-black" htmlFor="country">
                      Country*
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      className="border border-gray-300 px-3 py-2 w-full bg-white text-black"
                    >
                      <option value="">Choose country</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-700 text-white py-3 mt-4 text-sm font-semibold"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "REQUEST CATALOGUE"}
                </button>

                {message && (
                  <p className="text-center text-sm text-gray-600 mt-2">
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;