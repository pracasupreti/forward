import React from 'react';
import img from '../assets/Gratitude/img.jpg';

const HeroSection = () => {
  return (
    <div className="min-h-screen hidden md:block w-full relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={img}
          className="w-full h-full object-cover"
          alt="Background"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8 text-white">
        <h1 className="text-4xl leading-tight sm:text-5xl sm:leading-normal md:text-6xl md:leading-snug font-archivo font-bold tracking-tight mb-4">
            Honoring Those Who Make a Difference.
          </h1>

          <p className="text-xl sm:text-2xl font-archivo md:text-3xl text-gray-300 font-medium">
            Offering our sincere gratitude
          </p>
        </div>
      </div>

      {/* Background collage grid */}
      <div className="absolute inset-0 grid grid-cols-3 opacity-20">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="bg-black/60 w-full h-full"></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;