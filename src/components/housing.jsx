import React from "react";
import firstImg from "../assets/Housing/Rectangle1343.png";
import secondImg from "../assets/Housing/Rectangle1340.png";
import thirdImg from "../assets/Housing/Rectangle1341.png";
import fourthImg from "../assets/Housing/Rectangle1342.png";
import fifthImg from "../assets/Housing/Rectangle1344.png";
import sixthImg from "../assets/Housing/Rectangle1347.png";
import seventhImg from "../assets/Housing/Rectangle1345.png";
import eighthImg from "../assets/Housing/Rectangle1348.png";
import ninthImg from "../assets/Housing/Rectangle1349.png";
import tenthImg from "../assets/Housing/Rectangle1350.png";
import footer from "../assets/Housing/Footer.png";
import Footer from "../components/Footer";

function HousingAndWash() {
  return (
    <div className="flex flex-col">
      <main className="h-full w-screen flex-grow mt-[7rem] sm:mt-[6rem] md:mt-[5rem] lg:mt-[3rem] bg-white  p-2 sm:p-5 lg:p-20">
        <section className="pr-0 sm:pr-4">
          <div className="lg:p-10">
            <h1 className="font-inter mb-12 sm:text-right text-center sm:text-[60px] text-[40px] font-bold">
              Housing and Wash
            </h1>

            <div className="flex mb-2 justify-center ">
              <div className="flex sm:flex gap-2 sm:gap-4 w-full h-[250px] sm:h-[500px] ">
                {/* First column - 1/4 width */}
                <div className="w-full sm:w-[25%] h-full flex items-end">
                  <img
                    src={firstImg}
                    className="w-full h-1/2 object-cover rounded-[20px]"
                    alt="first image"
                  />
                </div>

                {/* Second column - 1/3 width */}
                <div className="w-full sm:w-[50%] h-full">
                  <img
                    src={secondImg}
                    className="w-full h-full object-cover rounded-[20px]"
                    alt="second image"
                  />
                </div>

                {/* Third and Fourth column - remaining width (roughly 5/12) */}
                <div className="w-full sm:w-[25%] h-full pt-2 -mt-2 sm:pt-4 sm:-mt-4">
                  <img
                    src={fourthImg}
                    className="w-full h-1/2 object-cover rounded-[20px]"
                    alt="fourth image"
                  />
                  <img
                    src={fifthImg}
                    className="mt-2 sm:mt-4 w-full h-1/2 object-cover rounded-[20px]"
                    alt="fifth image"
                  />
                </div>
              </div>
            </div>

            <div className="flex mb-2 justify-center w-full gap-2 sm:gap-4 mt-2 sm:mt-4 ">
              {/* First and Second Image - 25% width each */}
              <div className="flex mb-2 gap-2 sm:gap-4 w-1/2 flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 ">
                  <img
                    src={fifthImg}
                    className="w-full h-[125px] sm:h-full object-cover rounded-[20px]"
                    alt="fifth image"
                  />
                </div>
                <div className="w-full sm:w-1/2 ">
                  <img
                    src={sixthImg}
                    className="w-full h-[125px] sm:h-full object-cover rounded-[20px]"
                    alt="sixth image"
                  />
                </div>
              </div>

              {/* Third Image - 50% width */}
              <div className="w-full sm:w-1/2 pb-2">
                <img
                  src={seventhImg}
                  className="w-full h-[260px] sm:h-full object-cover rounded-[25px] "
                  alt="seventh image"
                />
              </div>
            </div>

            <div className="flex justify-center gap-2 sm:gap-4 w-full h-[250px] sm:h-[500px] -mt-2 sm:mt-2 ">
              {/* First Image - 50% width, full height */}
              <div className="w-full sm:w-1/2 h-full">
                <img
                  src={eighthImg}
                  className="w-full h-full object-cover rounded-[25px]"
                  alt="eighth image"
                />
              </div>

              {/* Second and Third Images - Stacked */}
              <div className="flex flex-col w-full sm:w-1/2">
                {/* Second Image - 25% width, 1/2 height */}
                <div className="w-full h-1/2">
                  <img
                    src={ninthImg}
                    className="w-full sm:w-1/2 h-full object-cover rounded-[25px] pb-2"
                    alt="ninth image"
                  />
                </div>
                {/* Third Image - 50% width, 1/2 height */}
                <div className="w-full h-1/2 ">
                  <img
                    src={tenthImg}
                    className="w-full h-full object-cover rounded-[25px] pt-0 sm:pt-2"
                    alt="tenth image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HousingAndWash;
