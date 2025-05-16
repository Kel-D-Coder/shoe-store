// components/AboutSection.tsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative px-4 py-16 md:py-24 bg-white text-black">
      {/* Main About Content */}
      <div className="max-w-6xl mx-auto flex flex-col gap-8 items-start">
        {/* Title and Subtitle */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-center md:text-left mb-16">
          <h2 className="text-6xl md:text-7xl tracking-tight leading-none md:mr-16">
            ABOUT
          </h2>
          <h3 className="text-xl md:text-2xl font-light md:w-1/3">
            Crafting Elegance with Love and Artistry.
          </h3>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto md:mx-0">
          <p className="text-sm leading-relaxed">
            Founded in 2015 by Tracy Chinedu, Little Things for Her (LTFH) crafts fashion accessories that celebrate beauty and individuality.
            Guided by a timeless yet creative spirit, LTFH pieces are designed with a dedication to detail and produced by skilled artisans in Nigeria.
            Each creation reflects a commitment to quality and craftsmanship, making each piece a refined expression of character and style.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
