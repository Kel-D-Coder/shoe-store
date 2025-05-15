// components/AboutSection.tsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative px-4 py-16 md:py-24 bg-white text-black">

      {/* Main About Content */}
      <div className="max-w-6xl mx-auto flex flex-col gap-8 items-start self-center">
        {/* Title */}
        <div className="flex mb-20 m-auto gap-16">
          <h2 className="text-6xl md:text-7xl tracking-tight leading-none">ABOUT</h2>
          <span className='w-32'>
            <h3 className="text-xl mb-6">Crafting Elegance with Love and Artistry.</h3>
          </span>
        </div>

        {/* Description */}
        <div className="w-96">
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
