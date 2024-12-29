import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LandingPage from "../components/LandingPage";
import ScrollingBanner from "../components/ScrollingBanner";
import Rural from "../components/Rural_Women";
import CustomMarqueeGallery from "../components/Gallery";
import Mission from "../components/Mission";
import Projects from "../components/Projects";
import Gratitude from "../components/Gratitude";
import Forward from "../components/Forward";
import Footer from "../components/Footer";
import Logo from "../assets/favicon/forwardlogo.png";
import AnotherBanner from "../Pages/Banner";
import ExecutiveCommittee from "./ExecutiveCommitee/executiveCommitee";

export const 

Home = () => {
  const { scrollY } = useScroll();
  const [showSecondBanner, setShowSecondBanner] = useState(false);
  const bannerOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const bannerHeight = useTransform(scrollY, [0, 100], ["10rem", "0rem"]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowSecondBanner(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const Banner = ({ bannerOpacity, bannerHeight }) => {
  return (
    <>
      {/* Desktop/Larger Screens Banner */}
      <motion.div
        style={{
          opacity: bannerOpacity,
          height: bannerHeight,
          overflow: "hidden",
        }}
        className="w-full bg-[#294B81] hidden sm:flex justify-start items-center gap-8 px-4 md:px-6 lg:px-12 py-2"
      >
        <div className="ml-4 md:ml-6">
          <img 
            src={Logo} 
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" 
            alt="Logo" 
          />
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-[30px] font-semibold text-white leading-tight">
              FORUM FOR RURAL WOMEN
              <br /> ARDENCY DEVELOPMENT
            </h1>
          </div>
          <div>
            <p className="mt-2 text-white text-sm md:text-[15px]">
              DUHABI, SUNSARI, NEPAL
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mobile Banner */}
      <motion.div
        style={{
          opacity: bannerOpacity,
          overflow: "hidden",
        }}
        className="w-full bg-[#294B81] flex sm:hidden flex-col justify-center items-center px-4 py-4 text-center"
      >
        <div className="mb-4">
          <img 
            src={Logo} 
            className="w-20 h-20 mx-auto" 
            alt="Logo" 
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold text-white mb-2 text-center">
            FORUM FOR RURAL WOMEN
            ARDENCY DEVELOPMENT
          </h1>
          <p className="text-white text-sm">
            DUHABI, SUNSARI, NEPAL
          </p>
        </div>
      </motion.div>
    </>
  );
};


  return (
    <>
      <div className="relative">
        <Banner />
        {showSecondBanner && <AnotherBanner />}
        <motion.div
          style={{
            top: showSecondBanner ? '58px' : 0,
            left: 0,
            right: 0,
            zIndex: 50,
          }}
        >
        </motion.div>
        <LandingPage />
        <ScrollingBanner />
        <Rural />
        <CustomMarqueeGallery />
        <Mission />
        <Projects />
        <Gratitude />
        <Forward />
        <Footer />
      </div>
    </>
  );
};

export default Home;