import React from "react";
import BlackNavbar from "../../components/BlackNavbar";
import Footer from "../../components/Footer";
import AnotherBanner from "../Banner";
import img1 from "../../assets/Gallery/img1.jpg"
import img2 from "../../assets/Gallery/img2.jpg"
import img3 from "../../assets/Gallery/img3.jpg"
import img4 from "../../assets/Gallery/img4.jpg"

function Environment() {
  return (
    <>
      <AnotherBanner/>
      <BlackNavbar />
      
      <div className="bg-gray-100 py-12 pb-[10rem]">
        <div className=" mx-auto ">
          <div className="flex flex-col md:flex-row gap-8 md:mt-[8rem] mt-[4rem] ">
            <div className="flex-1">
              <div className="bg-[#FCEDC6] px-6 md:px-[7rem] py-[3rem]">
              <h2 className="text-3xl md:text-5xl font-archivo font-semibold text-center mb-8  md:h-full">
              Environment
              </h2>
              <div className=" flex w-full gap-4 h-64 overflow-x-auto scrollbar-hide">
                <div className="lg:w-1/4 flex lg:flex-col lg:gap-4 lg:h-[15rem]">
                <img src={img1} className="rounded-md lg:h-1/2 w-full object-cover"/>
                <img src={img2} className="rounded-md lg:h-1/2 w-full  object-cover"/>
                </div>
                <img src={img3} className="rounded-md lg:w-2/4 object-cover"/>
                <img src={img4} className="rounded-md lg:w-1/4 object-cover"/>
              </div>
              </div>
              <p className="text-gray-700 text-xl font-inter leading-relaxed mt-[4rem] px-6 md:px-[7rem] ">
              This department conducts various programs on formal / non formal
                education, awareness, health, sanitation, Development of
                agriculture system and improved techniques, Campaign against the
                domestic violence of child and women, trainings and campaigns,
                women leadership development trainings, workshop and seminar,
                Trainings for enterprises development for the microfinance group
                & clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Environment;
