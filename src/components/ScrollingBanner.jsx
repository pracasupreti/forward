import React from 'react';

const ScrollingBanner = () => {
  const text = "Empowering Communities, Building Future  ";
  
  return (
    <div className="relative w-full overflow-hidden bg-yellow-500 py-2 pt-4 lg:py-6 font-inter">
      <div className="relative animate-scroll whitespace-nowrap">
        <div className="inline-flex items-center">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-4xl font-archivo md:text-6xl font-bold px-4 relative ml-6">
              {text}
              <div className="absolute top-1/2 -translate-y-1/2 left-0.5  -translate-x-1/2 w-4 h-4 bg-[#294B81] rounded-full"></div>
            </span>
          ))}
        </div>
        <div className="inline-flex items-center">
          {[...Array(5)].map((_, index) => (
            <span key={`duplicate-${index}`} className="text-4xl font-archivo md:text-6xl font-bold px-4 relative ml-6">
              {text}
              <div className="absolute top-1/2 -translate-y-1/2 left-2  left-0.5  -translate-x-1/2 w-4 h-4 bg-[#294B81] rounded-full"></div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    animation: scroll 40s linear infinite;
    display: inline-flex;
    width: fit-content;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default ScrollingBanner;