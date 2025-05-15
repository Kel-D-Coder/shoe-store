"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import "animate.css";

const Header = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_fhjdast",     // Replace with your EmailJS service ID
        "template_ephzb7r",    // Replace with your EmailJS template ID
        formRef.current,
        "ZZ5lIC36teQlPiL5w"      // Replace with your EmailJS public key
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
    <>
      <header className="flex justify-between items-center py-4 px-6 border-b border-gray-100 bg-white text-black relative z-50">
        <div className="flex space-x-6">
          <Link href="/about" className="text-xs font-medium text-gray-700 hover:text-black">ABOUT LTFH</Link>
          <Link href="/shop" className="text-xs font-medium text-gray-700 hover:text-black">SHOP</Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium">
          <Link href="/">Little Things for Her</Link>
        </div>

        <button
          onClick={() => setIsPanelOpen(true)}
          className="text-xs font-medium text-gray-700 hover:text-black"
        >
          CONTACT US
        </button>
      </header>

      {isPanelOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsPanelOpen(false)}
            className="fixed inset-0 z-40 animate__animated animate__fadeIn"
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

            <div className="p-6">
              <h1 className="text-2xl font-semibold mb-2">REQUEST SHEET</h1>
              <p className="text-sm text-gray-600 mb-6">
                Explore our curated collection through our exclusive physical catalogue. Submit your details, and we’ll arrange delivery.
              </p>

              <p className="text-xs mb-4">All fields required<span className="text-red-500">*</span></p>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4 text-sm text-black">
                <div className="grid grid-cols-2 gap-4">
                  <input name="civility" placeholder="Mr/Mrs/Miss" required className="border px-3 py-2 w-full" />
                  <input name="full_name" placeholder="Full Name*" required className="border px-3 py-2 w-full" />
                </div>

                <input name="phone" placeholder="Phone number*" required className="border px-3 py-2 w-full" />
                <input name="email" type="email" placeholder="Email address*" required className="border px-3 py-2 w-full" />
                <input name="address" placeholder="Your address" required className="border px-3 py-2 w-full" />

                <div className="grid grid-cols-2 gap-4">
                  <input name="state" placeholder="Add state" required className="border px-3 py-2 w-full" />
                  <select name="country" required className="border px-3 py-2 w-full">
                    <option value="">Choose country</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="United States">United States</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-700 text-white py-3 mt-4 text-sm font-semibold"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "REQUEST CATALOGUE"}
                </button>

                {message && <p className="text-center text-sm text-gray-600 mt-2">{message}</p>}
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};


export default Header