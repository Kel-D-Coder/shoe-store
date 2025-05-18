'use client';
import React from 'react';
import BgPic from '../assets/b30e39bbdc1421155a299a1f93dadcfe312a50e8.jpg';
import pic1 from '../assets/4d745afd6031e32a0fb52bccb231ed274e8d353e.png';
import pic2 from '../assets/cc48bd6d8718ec1d3490cee776e0c677e5825dbe.png';
import Image from 'next/image';
import textLogo from '../assets/Logotype on Banner.png'
import logo from '../assets/Logo at footer and home.png'
import emblem from "../assets/LTFH Emblem on Homescreen.png"
import { useRouter } from 'next/navigation';

const Index = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-20 z-0"
        style={{ backgroundImage: `url(${BgPic.src})` }}
      ></div>

      {/* Main Content */}
      <main className="flex-grow relative z-10 px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-center space-y-10 max-w-4xl mx-auto">
          {/* Top Image */}
          <div className="relative w-full max-w-xs h-64 sm:h-80">
            <Image src={pic1} alt="Top product" fill className="object-contain" />
          </div>

          {/* Text Info */}
          <div className="text-center text-black px-2">
            <div className='flex gap-3 justify-center'>
              <Image src={textLogo} alt='text logo' className="text-sm sm:text-base font-medium mb-1 w-28" />
              <Image src={logo} alt='logo' className="sm:text-sm font-medium mb-2 w-20" />
            </div>
            <p className="text-xs sm:text-sm mb-1">Lagos-made elevated everyday pieces and subtle</p>
            <p className="text-xs sm:text-sm mb-1">HFQFW fashioned suitable: scorching af littlethingsforher.com</p>
            <p className="text-xs sm:text-sm mb-4">FMFFCH • Lagos</p>
            <div className="flex justify-center">
              <div className="h-5 w-5 border border-gray-300 rounded-full flex items-center justify-center">
                <Image src={emblem} alt='emblem logo' />
              </div>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="relative w-full max-w-xs h-64 sm:h-80">
            <Image src={pic2} alt="Bottom product" fill className="object-contain" />
          </div>

          <div className="text-center mt-4">
            <button className='hover:cursor-pointer' onClick={() => router.push('/shop')}>
            <p className="text-sm sm:text-base font-medium border p-2 rounded hover:underline text-black" style={{fontFamily: "BLmelody"}}>Unravel Elegance</p>

            </button>
          </div>
        </div>

        {/* Dotted Border */}
        <div className="mt-10 border-t border-dotted border-gray-300"></div>
      </main>

     
    </div>
  );
};

export default Index;
