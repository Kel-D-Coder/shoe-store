"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaPhone } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { JSX } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Pic1 from "../../assets/940d77c737e65e1666229eaadb10bf94290769d1.jpg";
import Pic2 from "../../assets/3b486a6a037a228408d0100b08a5930c53377346.jpg";
import Pic3 from "../../assets/a86c1d678106450bd9b40d076f9625dc37b488ea.jpg";

import LeftArrow from "../../assets/Backward-mobile.png";
import RightArrow from "../../assets/Forward-Mobile.png";
import PatternLayout from "@/components/PatternLayout";


type Section = {
    title: string;
    content: JSX.Element;
  };

const ProductPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    details: false,
    care: false,
    shipping: false,
  });

  const prevRef = React.useRef<HTMLButtonElement | null>(null);
  const nextRef = React.useRef<HTMLButtonElement | null>(null);


  const images = [Pic1, Pic2, Pic3];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <PatternLayout>
    <div className="flex flex-col h-[200vh] sm:h-[150vh] bg-white">
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex">
          {isMobile ? (
           <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
  onBeforeInit={(swiper) => {
    if (swiper.params.navigation) {
      if (typeof swiper.params.navigation !== "boolean") {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }
    }
  }}
  className="w-full relative"
>
  {images.map((img, idx) => (
    <SwiperSlide key={idx}>
      <Image
        src={img}
        alt={`Tatam Sandal slide ${idx + 1}`}
        className="w-full h-auto object-contain"
      />
    </SwiperSlide>
  ))}

  {/* Custom arrows for mobile */}
  {isMobile && (
    <>
      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
      >
        <Image src={LeftArrow} alt="Previous" width={30} height={30} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
      >
        <Image src={RightArrow} alt="Next" width={30} height={30} />
      </button>
    </>
  )}
</Swiper>

          ) : (
            <>
              <div className="flex flex-col mr-4 space-y-3 w-20">
                {images.map((img, idx) => (
                  <div key={idx} className="border border-gray-200 cursor-pointer">
                    <Image src={img} alt={`Tatam Sandal thumbnail ${idx + 1}`} className="w-full h-auto object-contain" />
                  </div>
                ))}
              </div>
              <div className="flex-grow">
                <Image src={Pic1} alt="Tatam Sandal" className="w-full h-auto object-contain" />
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col text-black">
          <h1 className="text-2xl font-medium mb-2">Tatam Sandal</h1>
          <p className="text-sm mb-6">
            Tatam by LTFH — a sandal shaped with grace and quiet strength, capturing effortless style in every step.
          </p>

          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                window.location.href = "tel:+2342013306336";
              } else {
                setShowModal(true);
              }
            }}
            className="bg-black hover:bg-gray-800 text-white w-full mb-[88px] cursor-pointer h-10 rounded"
          >
            ORDER BY PHONE
          </button>

          {showModal && (
            <div className="fixed inset-0 z-50 flex">
              {/* Overlay */}
              <div
                className="flex-1 bg-black/10"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              />
              {/* Sliding Panel */}
              <div className="relative w-full max-w-md h-full bg-white shadow-lg border-l border-gray-200 animate__animated animate__slideInRight flex flex-col px-6 py-8">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-5 right-6 text-base font-medium text-black hover:underline hover:cursor-pointer"
                  aria-label="Close"
                >
                  Close
                </button>
                <div className="flex flex-col items-center mt-2">
                  <h2 className="text-xl font-semibold mb-6 text-center tracking-tight">
                    ORDER BY PHONE
                  </h2>
                  <p className="text-base text-black mb-2 text-center leading-relaxed max-w-xs">
                    Our personal advisors are delighted to assist you with the purchase of your piece Monday to Friday from 9 am to 7 pm and Saturday from 9 am to 5 pm (West Africa Time).
                  </p>
                  <p className="text-sm text-gray-500 mb-8 text-center">
                    (Closed on public holiday).
                  </p>
                  <div className="flex items-center justify-center gap-3 text-gray-400 text-lg font-medium mb-24 mt-2">
                    <FaPhone className="h-6 w-6" />
                    <span className="tracking-wide">CALL US: +234 201 330 6336</span>
                  </div>
                  <ul className="text-black text-base list-disc pl-6 space-y-2 w-full max-w-xs mx-auto text-left">
                    <li>Purchase a piece online with the help of our personal advisors</li>
                    <li>Discover more piece with personalized consultations</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Define a type for the sections */}
          {["details", "care", "shipping"].map((key) => {
            const sections: Record<string, Section> = {
              details: {
                title: "Details",
                content: (
                  <>
                    <p className="text-sm mb-2">Product reference: TFIZ43025</p>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Natural leather sole</li>
                      <li>Calf skin lining</li>
                      <li>Made in Nigeria</li>
                    </ul>
                  </>
                ),
              },
              care: {
                title: "Care and Maintenance",
                content: (
                  <>
                    <p className="text-sm mb-2">Keep away from immediate environment...</p>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>Use dry cloth to remove stains</li>
                      <li>Do not dry wash</li>
                      <li>Look after it</li>
                    </ul>
                  </>
                ),
              },
              shipping: {
                title: "Shipping and Return policy",
                content: (
                  <>
                    <p className="text-sm mb-2">Worldwide shipping: 1–5 days.</p>
                    <p className="text-sm">
                      In-store purchases can only be returned within the first 15 days of receiving the product.
                    </p>
                  </>
                ),
              },
            };

            return (
              <div key={key} className="border-b border-gray-200 py-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection(key)}>
                  <h3 className="font-medium">{sections[key].title}</h3>
                  <button className="rounded-full p-1">
                    {openSections[key] ? <FaChevronUp className="h-4 w-4" /> : <FaChevronDown className="h-4 w-4" />}
                  </button>
                </div>
                {openSections[key] && <div className="pt-2">{sections[key].content}</div>}
              </div>
            );
          })}
        </div>
      </main>
      </div>
      </PatternLayout>
  );
};

export default ProductPage;
