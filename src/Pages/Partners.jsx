import React from "react";
import Footer from "../components/Footer";
import AnotherBanner from "./Banner";

import partner1 from "../assets/International Partners/partner1.png";
import partner2 from "../assets/International Partners/partner2.png";
import partner3 from "../assets/International Partners/partner3.jpg";
import partner4 from "../assets/International Partners/partner4.jpg";

// Import Support partners
import support1 from "../assets/Supports and Partners/1 (1).jpg";
import support2 from "../assets/Supports and Partners/2.jpg";
import support3 from "../assets/Supports and Partners/3.jpg";
import support4 from "../assets/Supports and Partners/4.jpg";
import support5 from "../assets/Supports and Partners/5.jpg";
import support6 from "../assets/Supports and Partners/6.jpg";
import support7 from "../assets/Supports and Partners/7.jpg";
import support8 from "../assets/Supports and Partners/8.jpg";
import support9 from "../assets/Supports and Partners/9.jpg";
import support10 from "../assets/Supports and Partners/10.jpg";
import support11 from "../assets/Supports and Partners/11.jpg";
import support12 from "../assets/Supports and Partners/12.jpg";
import support13 from "../assets/Supports and Partners/13.jpg";
import Navbar from "../components/BlackNavbar";

function Partners() {
  const internationalPartners = [
    { id: 1, image: partner1, alt: "International Partner 1" },
    { id: 2, image: partner2, alt: "International Partner 2" },
    { id: 3, image: partner3, alt: "International Partner 3" },
    { id: 4, image: partner4, alt: "International Partner 4" },
  ];

  const supportPartners = [
    { id: 1, image: support1, alt: "Support Partner 1" },
    { id: 2, image: support2, alt: "Support Partner 2" },
    { id: 3, image: support3, alt: "Support Partner 3" },
    { id: 4, image: support4, alt: "Support Partner 4" },
    { id: 5, image: support5, alt: "Support Partner 5" },
    { id: 6, image: support6, alt: "Support Partner 6" },
    { id: 7, image: support7, alt: "Support Partner 7" },
    { id: 8, image: support8, alt: "Support Partner 8" },
    { id: 9, image: support9, alt: "Support Partner 9" },
    { id: 10, image: support10, alt: "Support Partner 10" },
    { id: 11, image: support11, alt: "Support Partner 11" },
    { id: 12, image: support12, alt: "Support Partner 12" },
    { id: 13, image: support13, alt: "Support Partner 13" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnotherBanner/>
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold font-archivo text-center  text-gray-900 mt-[9rem]">
            International Partners
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  justify-center items-center">
            {internationalPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white  overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-center font-archivo mb-12 text-gray-900 mt-[8rem]">
            Supports and Partners (Social Development)
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center">
            {supportPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Partners;