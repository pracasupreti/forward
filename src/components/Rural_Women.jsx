

import React from "react";
import women from "../assets/Rural_Women/women.png";
import { ArrowRight } from "lucide-react";
import img1 from "../assets/Rural_Women/img1.svg";
import img2 from "../assets/Rural_Women/img2.svg";
import img3 from "../assets/Rural_Women/img3.svg";
import img4 from "../assets/Rural_Women/img4.png";
import img5 from "../assets/Rural_Women/img5.png";
import img6 from "../assets/Rural_Women/img6.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const RuralWomen = () => {
  const bounceVariants = {
    initial: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        mass: 1,
      },
    },
    hover: {
      x: -32,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        mass: 1,
      },
    },
  };

  const naviagate = useNavigate()
  return (
    <section className="w-full items-center mx-auto lg:mx-auto px-5 tracking-tight sm:px-6 md:px-10 xl:px-48 flex flex-col gap-y-16 mb-[100px] overflow-hidden relative">
      {/* Main content wrapper */}
      <div className="flex flex-col md:flex-row gap-x-10">
        {/* Left content */}
        <div className="flex-1  pt-6 md:pt-24 lg:pt-32 xl:pt-36">
          {/* Title */}
          <div className="w-full">
            <div className="flex items-center gap-x-4 lg:-ml-12 ">
              <div className="w-[50px]   lg:ml-[3rem] h-[1px] bg-[#000000]"></div>
              <div className=" text-[#FFA800] uppercase font-inter text-sm  font-medium">
                Know about us
              </div>
            </div>

            <h1 className="text-black  mt-3 font-archivo text-xl tracking-normal sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold leading-tight  lg:leading-[50px]  xl:leading-snug xl:tracking-tight">
              Where Rural Women Lead, Communities Thrive
            </h1>
          </div>

          {/* Right content - For mobile only */}
          <div className=" md:hidden w-full flex justify-center mt-8">
            <div className="relative w-full lg:max-w-[490px]   h-auto aspect-square">
              <img
                src={women}
                alt="Smiling rural woman standing in doorway wearing traditional Nepalese dress"
                className="w-full h-full object-cover rounded-[12px]"
              />
            </div>
          </div>

          {/* Content wrapper for descriptions */}
          <div className="md:space-y-10  mt-6 lg:space-y-12 xl:space-y-14">
            <p className="text-[#383838] font-inter  text-sm sm:text-xl md:text-xl lg:text-[20px]  tracking-n leading-relaxed md:leading-[20px] lg:leading-relaxed xl:leading-[35px] lg:max-w-full">
              Since 1995, FORWARD has been a beacon of hope for rural women and
              communities in Nepal, spearheading socio-economic change through
              innovative microfinance solutions, entrepreneurship initiatives,
              and sustainable development practices.
            </p>
          </div>
        </div>

        {/* Right content - For tablet and up */}
        <div className="hidden md:block w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-20 lg:mt-24 xl:mt-28">
          <div className="relative w-full max-w-[490px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto aspect-square md:h-[500px] lg:h-[555px] xl:h-[600px]">
            <img
              src={women}
              alt="Smiling rural woman standing in doorway wearing traditional Nepalese dress"
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>
        </div>

        {/* CTA Button with hover effect */}
        <div className="static hidden md:block lg:block xl:block md:absolute md:bottom-[190px] lg:bottom-[260px] md:right-[calc(20%-120px)] lg:right-[calc(20%-200px)] z-10 mt-8 lg:mt-0">
          <button
            aria-label="Learn More"
            className="w-full md:w-auto group bg-[#FFB700] transition-colors duration-300 text-[#424242] hover:text-black font-inter text-lg sm:text-xl lg:text-[22px] font-semibold px-8 md:px-10 lg:px-12 md:py-4 lg:py-5 rounded-xl lg:rounded-2xl shadow-lg relative"
          >
            <div className="flex items-center justify-start relative w-full">
              <motion.div
                className="group cursor-pointer"
                initial="initial"
                whileHover="hover"
                animate="initial"
              >
                <motion.span
                  variants={bounceVariants}
                  className="text-4xl inline-block"
                  onClick={(e) => (naviagate("/about-us/goals-and-objectives"))}
                >
                  Learn More
                </motion.span>
              </motion.div>
              <span className="transition-all duration-300 opacity-0 absolute font-semibold -right-8 group-hover:opacity-100">
                <ArrowRight size={37} strokeWidth={2.6} width={40} />
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Supporters section */}
      <div>
        <div className="flex md:items-start md:mb-6 lg:mb-8 text-center mx-8 md:-mx-10 lg:-mx-12 lg:my-8 lg:pt-[2rem]">
          <div className="flex items-center gap-x-4 w-full">
            <div className="uppercase text-xl  sm:text-sm xl:text-xl font-medium text-[#646464] whitespace-nowrap md:px-4  xl:px-0">
              Our Supporters
            </div>
            <div className="h-[2px] bg-gray-300 w-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6     items-center xl:space-x-10 xl:-mx-12">
          {[img1, img2, img3, img4, img5, img6].map((img, index) => (
            <div key={index} className="h-24 sm:h-24 md:h-16 lg:h-16 xl:h-28 ">
              <img
                src={img}
                alt={`Supporter logo ${index + 1}`}
                className="h-full  object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RuralWomen;