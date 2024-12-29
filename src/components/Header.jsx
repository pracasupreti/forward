// import React, { useEffect, useRef } from 'react';
// import logo from '../assets/Landingpage/unicef.svg';

// const Header = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         if (window.scrollY > 0) {
//           containerRef.current.style.transform = 'scale(0.8)';
//         } else {
//           containerRef.current.style.transform = 'scale(1)';
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row bg-[#294472] font-inter text-white">
//       <img src={logo} alt="" className="h-16 md:h-20 mt-1 mx-4 md:mx-14" />
//       <div className="relative h-auto md:h-[140px] flex-grow">
//         <div className="mt-1 text-center md:text-left">
//           <h1 className="text-xl md:text-3xl mb-1 font-bold uppercase leading-tight">Forum for Rural Women</h1>
//           <h2 className="text-xl md:text-3xl mb-1 uppercase font-bold leading-tight">Ardency Development</h2>
//           <p className="text-xs md:text-sm uppercase mb-2">Duhabi, Sunsari, Nepal</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/Landingpage/unicef.svg';

const Header = () => {
  const containerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(140); // Initial height of the header

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        // Calculate new height, reducing by 50px when scrolled down
        const newHeight = Math.max(90, 140 - scrollY); // Ensure it doesn't go below 90px
        setHeaderHeight(newHeight);

        // Apply shrink transformation
        containerRef.current.style.transform = `translateY(${Math.min(scrollY, 50)}px)`; // Shrink effect
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row bg-[#294472] font-inter text-white transition-all duration-300"
      style={{ height: `${headerHeight}px` }} // Apply dynamic height
    >
      <img src={logo} alt="" className="h-16 md:h-20 mt-1 mx-4 md:mx-14  md:mt-4" />
      <div className="relative h-auto flex-grow">
        <div className="mt-1 text-center md:text-left">
          <h1 className="text-xl md:text-3xl mb-1 md:mt-4 font-bold uppercase leading-tight">Forum for Rural Women</h1>
          <h2 className="text-xl md:text-3xl mb-1 uppercase font-bold leading-tight">Ardency Development</h2>
          <p className="text-xs md:text-sm uppercase mb-2">Duhabi, Sunsari, Nepal</p>
        </div>
      </div>
    </div>
  );
};

export default Header;