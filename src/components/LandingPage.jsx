import React, { useState, useEffect } from "react";
import bg1 from "../assets/LandingPage/bg1.png";
import bg2 from "../assets/LandingPage/bg2.png";
import bg3 from "../assets/LandingPage/bg3.png";
import logo from "../assets/LandingPage/logo.svg";
import unicef from "../assets/LandingPage/unicef.svg";
import Navbar from "../components/BlackNavbar";

/**
 * Facebook icon component
 * @returns {ReactElement} The Facebook icon as an SVG element
 */
const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 xl:w-8 xl:h-8"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 xl:w-8 xl:h-8"
  >
    <path d="M 18.492188 2.9941406 A 0.50005 0.50005 0 0 0 18.113281 3.1816406 L 13.060547 9.3164062 L 9.0566406 3.7714844 C 8.7066406 3.2874844 8.1458281 3 7.5488281 3 L 4.078125 3 C 3.420125 3 3.0388281 3.7462969 3.4238281 4.2792969 L 9.8652344 13.199219 L 4.1132812 20.181641 A 0.50090307 0.50090307 0 1 0 4.8867188 20.818359 L 10.470703 14.037109 L 14.943359 20.228516 C 15.293359 20.712516 15.854172 21 16.451172 21 L 19.921875 21 C 20.579875 21 20.961172 20.253703 20.576172 19.720703 L 13.667969 10.15625 L 18.886719 3.8183594 A 0.50005 0.50005 0 0 0 18.492188 2.9941406 z"></path>
  </svg>
);

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [bg1, bg2, bg3];

  const headlines = [
    "Rural Women\nDevelopment",
    "Drinking Water\nDevelopment",
    "Vocational Training\nProgram",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative object-cover flex min-h-screen w-full overflow-hidden bg-black">
      {/* Add the Navbar component */}
      <Navbar />
      <div>
        <div></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen w-full">
        {/* Background Images */}
        <div className="relative h-screen w-full">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? "opacity-60" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center">
          <div className="relative w-full max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            {/* Main Content */}
            <div className="mt-80 md:mt-24 xl:mt-28 2xl:mt-36">
              <h1 className="text-[#4A4848] text-9xl -mb-10 sm:text-9xl md:text-9xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-extrabold font-archivo  lg:-mb-24 tracking-wider">
                0{currentImageIndex + 1}
              </h1>

              {/* Dynamic Headlines */}
              <div className="relative  h-[120px]  sm:h-[160px] md:h-[200px] lg:h-[240px] xl:h-[280px] 2xl:h-[320px]">
                {headlines.map((headline, index) => (
                  <h2
                    key={index}
                    className={`absolute  left-0 text-white font-archivo text-5xl sm:text-6xl md:text-6xl lg:text-7xl  xl:text-7xl 2xl:text-9xl font-medium mb-6 tracking-normal whitespace-pre-line transition-opacity duration-500 ${
                      currentImageIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {headline}
                  </h2>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* UNICEF Badge - Only shown when currentImageIndex is 0 (bg1) */}
        {currentImageIndex === 0 && (
          <div className="absolute  hidden md:block lg:block xl:block 2xl:block  bottom-8 right-8 md:bottom-12 md:right-12 xl:bottom-16 xl:right-16 2xl:bottom-1 2xl:right-20">
            <div className="rounded-full p-4 xl:p-6 2xl:p-8">
              <div className="absolute inset-0 w-full h-full">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full absolute"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  <defs>
                    <path
                      id="supportedByText"
                      d="M 30,100 A 70,70 0 0 1 170,100"
                      fill="none"
                    />
                  </defs>
                  <text
                    className="text-white text-[9px] md:text-[11px] xl:text-[14px] 2xl:tracking-wider 2xl:text-[18px]"
                    fill="white"
                  >
                    <textPath
                      href="#supportedByText"
                      textAnchor="middle"
                      startOffset="50%"
                    >
                      SUPPORTED BY
                    </textPath>
                  </text>
                </svg>
              </div>
              <img
                src={logo}
                alt="UNICEF Support Badge"
                className="h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20 2xl:h-36 2xl:w-36"
              />
            </div>
          </div>
        )}

        {/* Dots Navigation */}

        <div className="absolute right-8 top-1/2 -translate-y-1/2 md:right-12 xl:right-16 2xl:right-20">
          <div className="relative flex flex-col items-center">
            <div className="absolute h-full w-[1px] bg-[#262626]" />
            <div className="flex flex-col space-y-6 xl:space-y-8 2xl:space-y-9">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative z-10 h-5 w-5 rounded-full transition-all duration-300 ${
                    currentImageIndex === index
                      ? "bg-yellow-500 blur-[2px]"
                      : "bg-[#262626]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="relative   hidden md:block lg:block xl:block 2xl:block bottom-8 left-4 md:bottom-12 md:left-12 xl:bottom-16 xl:left-16 2xl:bottom-20 2xl:left-1 z-10 -mx-0 ">
          <div className="w-48 md:w-64 xl:w-80 2xl:w-96">
            <div className="flex items-center ">
              <hr className="w-[4vw] border-t border-gray-200 -ml-[10vw ]" />
              <div className="flex space-x-6 xl:space-x-2">
                <a
                  href="https://www.facebook.com/forward.duhabi"
                  className="text-white  hover:text-gray-300 transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <TwitterIcon />
                </a>
              </div>
              <hr className="w-[100vw] border-t border-gray-200 -mr-[100vw]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;