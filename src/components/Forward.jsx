import React from 'react';
import image from '../assets/Forward/image.png';
import { useNavigate } from 'react-router-dom';

const Forward = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full mt-10 relative">
      <div className="px-0 sm:mx-8 md:mx-12 lg:mx-20 sm:px-3 md:px-4 lg:px-6 sm:mb-12 md:mb-16 lg:mb-20 relative">
        <div className="sm:rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Main Container using Flexbox */}
          <div className="relative flex flex-col">
            {/* Image Container */}
            <div className="aspect-[15/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[9/1]">
              <img
                src={image}
                alt="Rural women walking"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay - using from-black/60 to-zinc-800/60 for a similar effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-zinc-900/70 to-zinc-900/70" />
            </div>
            
            {/* Content Container */}
            <div className="flex flex-col justify-center sm:px-6 md:px-12 lg:px-16 absolute inset-0 ">
              <div className="flex flex-col items-center">
                <h1 className="text-white text-base mx-4 sm:text-2xl md:text-3xl xl:text-5xl font-bold font-archivo leading-tight sm:leading-tighter text-center mb-4 sm:mb-6 md:mb-8 ">
                  Join us in our mission to create a brighter, more empowered future for those who need it most
                </h1>
                
                {/* Buttons Container */}
                <div className="flex sm:flex-row gap-3 sm:gap-4 sm:w-auto">
                  <button onClick={(e) => {navigate("/about-us/goals-and-objectives")}} className="bg-[#FFB700] w-fit tracking-tight px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded text-sm font-medium hover:bg-yellow-400 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forward;