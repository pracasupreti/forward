import React, { useEffect, useRef, useState } from "react";
import img from "../assets/Footer/img.png";

const Footer = ({
  mediaUrl,
  mediaType = "image",
  altText = "Nepal Forward",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className={`w-full lg:py-6 bg-yellow-500 flex flex-col items-center justify-center transition-all duration-1000 transform
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
    >
      <div className="flex flex-col justify-center space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8 ">
        <h1 className="text-4xl mt-7 sm:text-8xl md:text-8xl lg:text-[178px] uppercase text-center font-extrabold tracking-wider leading-none">
          Forward
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-archivo text-[#7C611E] text-center tracking-tight leading-tight sm:leading-tight md:leading-tight lg:leading-tight sm:px-4 md:px-6">
          For Nepal's Stronger Tomorrow
        </h2>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-4 sm:mb-6 md:mb-8 text-[#7C611E]">
        <a
          href="tel:+977-25-540456"
          className="flex items-center gap-2 hover:text-[#5C481E] transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#5C481E]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="font-archivo text-base sm:text-lg">
            +977-25-540456
          </span>
        </a>

        <a
          href="mailto:info@forward.org.np"
          className="flex items-center gap-2 hover:text-[#5C481E] transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="font-archivo text-base sm:text-lg">
            info@forward.org.np
          </span>
        </a>

        <a
          href="https://www.facebook.com/forward.duhabi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#5C481E] transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          <span className="font-archivo text-base sm:text-lg">
            Our Facebook
          </span>
        </a>
      </div>
      <div className="w-full h-56 sm:h-72 md:h-96 lg:h-screen/2">
        <img src={img} alt={altText} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Footer;