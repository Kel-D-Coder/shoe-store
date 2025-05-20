// components/AboutSection.tsx
import PatternLayout from "@/components/PatternLayout";
import React from "react";

const AboutSection = () => {
  return (
    <PatternLayout>
    <section className="relative px-4 py-16 md:py-24 text-black h-[110vh]" style={{
    background: `linear-gradient(to bottom, #fefffa 50%, white 60%)`,
  }}>
      {/* Main About Content */}
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Title and Subtitle */}
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center md:gap-0 text-center md:text-left mb-6 md:mb-4">
          <h2
            className="text-[3rem] md:text-[7rem] md:mr-8"
          >
            ABOUT
          </h2>
          <h3
            className="text-xl md:text-2xl font-light md:mt-8 md:ml-0 md:pl-4 md:whitespace-pre-line"
          >
            Crafting{"\n"}Elegance with{"\n"}Love and{"\n"}Artistry.
          </h3>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto md:mx-0 mt-8 md:mt-2 md:-mb-2 h-full sm:w-[35%]">
          <p className="text-sm md:text-base leading-relaxed font-light md:font-normal text-left " style={{ fontFamily: "BLmelody-light" }}>
            Founded in 2015 by Tracy Chinedu, Little Things for Her (LTFH)
            crafts fashion accessories that celebrate beauty and individuality.
            Guided by a timeless yet creative spirit, LTFH pieces are designed
            with a dedication to detail and produced by skilled artisans in
            Nigeria. Each creation reflects a commitment to quality and
            craftsmanship, making each piece a refined expression of character
            and style.
          </p>
        </div>
      </div>
      </section>
      </PatternLayout>
  );
};

export default AboutSection;
