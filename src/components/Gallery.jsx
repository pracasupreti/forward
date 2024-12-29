import React, { useEffect, useState } from "react";
import img1 from "../assets/Gallery/img1.jpg";
import img2 from "../assets/Gallery/img2.jpg";
import img3 from "../assets/Gallery/img3.jpg";
import img4 from "../assets/Gallery/img4.jpg";
import img5 from "../assets/Gallery/img5.jpg";
import img6 from "../assets/Gallery/img6.jpg";

const images = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
];

const ImageCard = ({ img, onHover, index }) => {
  return (
    <div className="ml-2 sm:ml-4 md:ml-6 lg:ml-10 mt-2 sm:mt-4 md:mt-6 overflow-hidden rounded-lg sm:rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
      <img
        src={img}
        alt="Gallery item"
        className="h-[140px] w-[210px] sm:h-[160px] sm:w-[260px] md:h-[180px] md:w-[320px] lg:h-[200px] lg:w-[400px] 
                 object-cover transition-all duration-300 ease-in-out grayscale-[0.9] hover:grayscale-0"
      />
    </div>
  );
};

const MarqueeRow = ({ children, reverse = false, speed = 30 }) => {
  const [duplicate, setDuplicate] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const calculateDuplicates = () => {
      const screenWidth = window.innerWidth;
      const itemWidth =
        screenWidth < 640
          ? 520 // Mobile
          : screenWidth < 768
          ? 280 // Tablet
          : screenWidth < 1024
          ? 340 // Small laptop
          : 420; // Desktop

      const necessaryDuplicates = Math.ceil(
        (screenWidth * 3) / (children.length * itemWidth)
      );
      setDuplicate(Math.max(necessaryDuplicates, 2));
    };

    calculateDuplicates();
    window.addEventListener("resize", calculateDuplicates);
    return () => window.removeEventListener("resize", calculateDuplicates);
  }, [children.length]);

  return (
    <div className="relative overflow-hidden whitespace-nowrap py-2 sm:py-4 md:py-6 lg:py-8">
      <div
        className="inline-block animate-marquee"
        style={{
          animation: `marquee ${speed}s linear infinite${
            reverse ? " reverse" : ""
          }`,
          animationPlayState: "running",
          animationDuration:
            hoveredIndex !== null ? `${speed * 2}s` : `${speed}s`,
          transition: "animation-duration 0.3s ease-in-out",
        }}
      >
        {[...Array(duplicate)].map((_, i) => (
          <div key={i} className="inline-flex">
            {React.Children.map(children, (child, index) =>
              React.cloneElement(child, {
                onHover: setHoveredIndex,
                index: `${i}-${index}`,
              })
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomMarqueeGallery = () => {
  const firstRow = images.slice(0, images.length / 3);
  const secondRow = images.slice(0, images.length / 3);

  return (
    <div className="relative w-full flex-col items-center justify-center overflow-hidden rounded-md sm:rounded-lg border bg-[#D9D9D9] md:shadow-xl ">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            will-change: transform;
            transition: animation-duration 0.3s ease-in-out;
          }
          @media (max-width: 640px) {
            .animate-marquee {
              animation-duration: 15s !important;
            }
          }
          @media (min-width: 641px) and (max-width: 768px) {
            .animate-marquee {
              animation-duration: 20s !important;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .animate-marquee {
              animation-duration: 25s !important;
            }
          }
        `}
      </style>

      <div className="flex flex-col h-full justify-center -space-y-4 sm:-space-y-6 md:-space-y-8 lg:-space-y-11">
     
        <div className="w-full lg:pt-4">
          <MarqueeRow speed={35}>
            {firstRow.map((image, index) => (
              <ImageCard key={index} {...image} />
            ))}
          </MarqueeRow>
        </div>
        <div className="w-full lg:pb-8">
          <MarqueeRow reverse speed={45}>
            {secondRow.map((image, index) => (
              <ImageCard key={index} {...image} />
            ))}
          </MarqueeRow>
   
        </div>
      </div>
    </div>
  );
};

export default CustomMarqueeGallery;
