import React from "react";
import ctevt from "../../../assets/Identities/ctevt.jpg";
import daosunsari from "../../../assets/Identities/daosunsari.jpg";
import ngo from "../../../assets/Identities/ngo.jpg";
import rajaswabibhag from "../../../assets/Identities/rajaswabibhag.jpg";
import rastrabank from "../../../assets/Identities/rastrabank.jpg";
import samajkalyan from "../../../assets/Identities/samajkalyan.jpg";
import Footer from "../../../components/Footer";
import BlackNavbar from "../../../components/BlackNavbar";
import AnotherBanner from "../../Banner";

function LegalIdentities() {
  const images = [
    { src: ctevt, alt: "CTEVT" },
    { src: daosunsari, alt: "DAO Sunsari" },
    { src: ngo, alt: "NGO" },
    { src: rajaswabibhag, alt: "Rajaswa Bibhag" },
    { src: rastrabank, alt: "Rastra Bank" },
    { src: samajkalyan, alt: "Samaj Kalyan" },
  ];

  return (
    <>
    <AnotherBanner/>
      <BlackNavbar />
      <div className="flex justify-center   md:h-screen bg-gray-100">
        <div className=" mx-auto py-8 md:mt-[8rem] mt-[5rem]">
          <div className="bg-[#FCEDC6] px-6 md:px-[7rem] py-[3rem]">
            <h2 className="text-3xl md:text-5xl font-archivo font-semibold text-center  md:h-full ">
            Legal Identities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-[7rem] py-[3rem]">
            {images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LegalIdentities;
