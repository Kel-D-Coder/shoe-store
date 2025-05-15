"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaPhone } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Pic1 from "../../assets/940d77c737e65e1666229eaadb10bf94290769d1.jpg";
import Pic2 from "../../assets/3b486a6a037a228408d0100b08a5930c53377346.jpg";
import Pic3 from "../../assets/a86c1d678106450bd9b40d076f9625dc37b488ea.jpg";

const ProductPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    details: false,
    care: false,
    shipping: false,
  });

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
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex">
          {isMobile ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="w-full"
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
            className="bg-black hover:bg-gray-800 text-white w-full mb-8 cursor-pointer h-10 rounded"
          >
            ORDER BY PHONE
          </button>

          {showModal && (
            <div className="fixed top-6 right-6 z-50 bg-white rounded-md p-6 max-w-sm w-full shadow-lg border border-gray-200">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-sm font-medium text-black hover:underline"
              >
                Close
              </button>
              <h2 className="text-lg font-semibold mb-2 text-center" style={{ fontFamily: 'Belgan Aesthetic' }}>
                ORDER BY PHONE
              </h2>
              <p className="text-sm text-gray-600 mb-1 text-center">
                Our personal advisors are delighted to assist you Monday to Friday from 9am to 7pm and Saturday from 9am to 5pm (WAT).
              </p>
              <p className="text-xs text-gray-500 mb-4 text-center">(Closed on public holidays)</p>
              <div className="flex items-center justify-center gap-2 text-gray-500 text-base font-medium mb-4">
                <FaPhone />
                <span>CALL US: +234 201 330 6336</span>
              </div>
              <ul className="text-left text-sm text-gray-700 list-disc pl-5 space-y-2">
                <li>Purchase a piece online with the help of our personal advisors</li>
                <li>Discover more pieces with personalized consultations</li>
              </ul>
            </div>
          )}

          {["details", "care", "shipping"].map((key) => {
            const sections: Record<string, any> = {
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
  );
};

export default ProductPage;
