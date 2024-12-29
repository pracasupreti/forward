import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/favicon/forwardlogo.png";

const AnotherBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 bg-[#294B81] px-4 py-1 z-[60] 
        h-auto min-h-[50px] max-h-[70px]
        sm:px-6 
        md:px-8 
        lg:px-12"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between h-full">
        <div className="flex items-center space-x-2 sm:space-x-4 w-full">
          <div className="flex-shrink-0">
            <img 
              src={Logo} 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" 
              alt="Logo" 
            />
          </div>
          <div className="flex flex-col flex-grow">
            <h1 className="text-white text-sm sm:text-base md:text-lg font-normal leading-tight">
              FORUM FOR RURAL WOMEN ARDENCY DEVELOPMENT
            </h1>
            <p className="text-white text-xs sm:text-sm mt-1 text-right sm:text-left">
              DUHABI, SUNSARI, NEPAL
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnotherBanner;