import React from "react";
import BlackNavbar from "../../components/BlackNavbar";
import Footer from "../../components/Footer";
import AnotherBanner from "../Banner";
import img1 from "../../assets/Gallery/img1.jpg"
import img2 from "../../assets/Gallery/img2.jpg"
import img3 from "../../assets/Gallery/img3.jpg"
function PovertyAlleviation() {
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
              Poverty Alleviation
              </h2>
              <div className=" flex w-full gap-4 h-[24rem] overflow-x-auto scrollbar-hide">
                <img src={img2} className="rounded-md lg:w-2/4 object-cover"/>
                <img src={img1} className="rounded-md lg:w-1/4 lg:h-[65%] object-cover"/>
                <img src={img3} className="lg:hidden rounded-md lg:w-1/4 lg:h-[65%] object-cover"/>
                <div className="h-full w-full lg:w-1/4 flex justify-end items-end">
                <img src={img3} className="rounded-md w-full lg:h-[65%] object-cover"/>
                </div>
              </div>
              </div>
              <p className="text-gray-700 text-xl font-inter leading-relaxed mt-[4rem] px-6 md:px-[7rem] ">
              <p className="">
                The Programme aims to reduce poverty in the rural communities in
                the programme area (8 VDCs) through equitable and sustainable
                income generation activities. The Programme activities are
                grouped under five broad components consisting of :
              </p>
              <ul>
                <li>
                  Livelihood activities (agro-forestry, enterprises development
                  through development of small industry at local level etc),
                </li>
                <li>
                  Capacity enhancement of beneficiaries stakeholder on Improved
                  Technology of Livestock (Goat/Pig/Buffalo/Cow raising, hybrid
                  type),
                </li>
                <li>
                  Commercial agriculture production and management, (iv)
                  Infrastructure development (small irrigation, collection
                  centers, small industry infrastructures etc) and
                  Input support. Furthermore, the programme is designed to fit
                  with the 4 pillars of PAF Strategy Income Generation, Capacity
                  Building, Social Mobilization and Infrastructure development.
                </li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PovertyAlleviation;
