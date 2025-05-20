// components/MainLayout.tsx
import React from "react";
import pattern from "../assets/Pattern_Mobile_and_Desktop-removebg-preview.png";
import Image from "next/image";


const PatternLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <main className="flex flex-col relative ">
            {children}
            <Image src={pattern} alt="" className="absolute place-self-end bottom-0 mt-1.5" />
        </main>
    </>
  );
};

export default PatternLayout;
