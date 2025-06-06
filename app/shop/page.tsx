"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp, FaPhone } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import phoneIcon from "../../assets/Call 1.png";
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
  content: React.ReactNode;
};

const ProductPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    details: false,
    care: false,
    shipping: false,
  });

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const images = [Pic1, Pic2, Pic3];

  const sections: Record<string, Section> = {
    details: {
      title: "Details",
      content: (
        <>
          <p className="text-sm mb-2">Product reference: TS1242025</p>
          <ul className="list-disc pl-4 text-sm space-y-1">
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
          <p className="text-sm mb-2">Keep away from flammable environment...</p>
          <ul className="list-none text-sm space-y-1">
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
          <p className="text-sm mb-2">Worldwide shipping. 1–5 days.</p>
          <p className="text-sm">Products purchased can only be returned within the first 14 days of receiving the product.</p>
        </>
      ),
    },
  };

  const toggleSection = (section: string) => {
  setOpenSections((prev) => {
    const isCurrentlyOpen = prev[section];
    return {
      details: false,
      care: false,
      shipping: false,
      [section]: !isCurrentlyOpen, // Toggle only the clicked one
    };
  });
};


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PatternLayout>
      <div className="flex flex-col h-[230vh] sm:h-[150vh] bg-white">
        <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 py-6 max-w-7xl mx-auto w-full">
          {/* Image Section */}
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
                  if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                }}
                className="w-full relative"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image src={img} alt={`Tatam Sandal slide ${idx + 1}`} className="w-full h-auto object-contain" />
                  </SwiperSlide>
                ))}

                <button ref={prevRef} className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                  <Image src={LeftArrow} alt="Previous" width={30} height={30} />
                </button>
                <button ref={nextRef} className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
                  <Image src={RightArrow} alt="Next" width={30} height={30} />
                </button>
              </Swiper>
            ) : (
              <>
                <div className="flex flex-col mr-4 space-y-3 w-20">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`border cursor-pointer ${selectedImageIndex === idx ? "border-black" : "border-gray-200"}`}
                      onClick={() => setSelectedImageIndex(idx)} // update selected image on click
                    >
                      <Image src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-auto object-contain" />
                    </div>
                  ))}
                </div>
                <div className="flex-grow">
                  {/* Display selected image */}
                  <Image
                    src={images[selectedImageIndex]}
                    alt={`Tatam Sandal ${selectedImageIndex + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </>
            )}
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col text-black">
            <h1 className="text-2xl font-medium mb-2">Tatam Sandal</h1>
            <p className="text-sm mb-6">
              Tatam by LTFH — a sandal shaped with grace and quiet strength, capturing effortless style in every step.
            </p>

            <button
              onClick={() =>
                isMobile ? (window.location.href = "tel:+2342013306336") : setShowModal(true)
              }
              className="bg-black hover:bg-gray-800 text-white w-full mb-[88px] h-10 font-bold"
            >
              ORDER BY PHONE
            </button>

            {showModal && (
              <div className="fixed inset-0 z-50 flex animate__animated animate__fadeInRight">
                <div
                  className="flex-1 bg-black/10"
                  onClick={() => setShowModal(false)}
                  aria-label="Close modal"
                />
                <div className="relative w-full max-w-md h-full bg-white shadow-lg border-l border-gray-200 flex flex-col px-6 py-8">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-5 right-6 text-base font-medium text-black hover:underline"
                    aria-label="Close"
                  >
                    Close
                  </button>
                  <div className="flex flex-col items-center mt-2">
                    <h2 className="text-xl font-semibold mb-6 text-center tracking-tight">ORDER BY PHONE</h2>
                    <p className="text-base text-black mb-2 text-center leading-relaxed max-w-xs">
                      Our personal advisors are delighted to assist you with the purchase of your piece Monday to Friday from 9 am to 7 pm and Saturday from 9 am to 5 pm (West Africa Time).
                    </p>
                    <p className="text-sm text-gray-500 mb-8 text-center">(Closed on public holiday).</p>
                    <div className="flex items-center justify-center gap-3 text-gray-400 text-lg font-medium mb-24 mt-2">
                      <Image src={phoneIcon} alt="" />
                      <span className="tracking-wide">CALL US: +234 201 330 6336</span>
                    </div>
                    <ul className="text-black text-base list-disc pl-6 space-y-2 w-full max-w-xs mx-auto text-left">
                      <li>Purchase a piece online with the help of our personal advisors</li>
                      <li>Discover more pieces with personalized consultations</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Accordion Sections */}
            {Object.keys(sections).map((key) => (
              <div key={key} className="border border-gray-200 py-4">
                <div
                  className="flex justify-between items-center cursor-pointer p-3"
                  onClick={() => toggleSection(key)}
                >
                  <h3 className="font-bold">{sections[key].title}</h3>
                  <button className="rounded-full p-1" aria-label={`Toggle ${sections[key].title}`}>
                    {openSections[key] ? <FaChevronUp className="h-4 w-4" /> : <FaChevronDown className="h-4 w-4" />}
                  </button>
                </div>
                {openSections[key] && <div className="pt-2 bg-[#fefffa] p-3">{sections[key].content}</div>}
              </div>
            ))}
          </div>
        </main>
      </div>
    </PatternLayout>
  );
};

export default ProductPage;
