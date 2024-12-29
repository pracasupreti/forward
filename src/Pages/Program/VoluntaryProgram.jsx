import React from "react";

import vol1 from "../../assets/VoluntaryProgram/vol1.jpg";
import vol2 from "../../assets/VoluntaryProgram/vol2.jpg";
import vol3 from "../../assets/VoluntaryProgram/vol3.jpg";
import vol4 from "../../assets/VoluntaryProgram/vol4.jpg";
import vol5 from "../../assets/VoluntaryProgram/vol5.jpg";
import vol6 from "../../assets/VoluntaryProgram/vol6.jpg";
import vol7 from "../../assets/VoluntaryProgram/vol7.jpg";
import AnotherBanner from "../Banner";
import Footer from "../../components/Footer";
import BlackNavbar from "../../components/BlackNavbar";

function VoluntaryProgram() {
  const images = [
    { src: vol1, alt: "Voluntary Program Image 1" },
    { src: vol2, alt: "Voluntary Program Image 2" },
    { src: vol3, alt: "Voluntary Program Image 3" },
    { src: vol4, alt: "Voluntary Program Image 4" },
    { src: vol5, alt: "Voluntary Program Image 5" },
    { src: vol6, alt: "Voluntary Program Image 6" },
    { src: vol7, alt: "Voluntary Program Image 7" },
  ];

  return (
    <>
      <div>
        <div>
          <AnotherBanner/>
          <BlackNavbar />
        </div>
        <div className="flex flex-col">
      <BlackNavbar />
      <main className="h-full w-screen flex-grow mt-[7rem] sm:mt-[6rem] md:mt-[5rem] lg:mt-[3rem] bg-white  p-2 sm:p-5 lg:p-20">
        <section className="pr-0 sm:pr-4">
          <div className="lg:p-10">
            <h1 className="font-archivo mb-12 sm:text-right text-center sm:text-[60px] text-[40px] font-bold">
              Voluntary Program
            </h1>

            <div className="flex mb-2 justify-center ">
              <div className="flex sm:flex gap-2 sm:gap-4 w-full h-[250px] sm:h-[500px] ">
                {/* First column - 1/4 width */}
                <div className="w-full sm:w-[25%] h-full flex items-end">
                  <img
                    src={vol1}
                    className="w-full h-1/2 object-cover rounded-[20px]"
                    alt="first image"
                  />
                </div>

                {/* Second column - 1/3 width */}
                <div className="w-full sm:w-[50%] h-full">
                  <img
                    src={vol2}
                    className="w-full h-full object-cover rounded-[20px]"
                    alt="second image"
                  />
                </div>

                {/* Third and Fourth column - remaining width (roughly 5/12) */}
                <div className="w-full sm:w-[25%] h-full pt-2 -mt-2 sm:pt-4 sm:-mt-4">
                  <img
                    src={vol3}
                    className="w-full h-1/2 object-cover rounded-[20px]"
                    alt="fourth image"
                  />
                  <img
                    src={vol4}
                    className="mt-2 sm:mt-4 w-full h-1/2 object-cover rounded-[20px]"
                    alt="fifth image"
                  />
                </div>
              </div>
            </div>

            <div className="flex mb-2 justify-center w-full gap-2 sm:gap-4 mt-2 sm:mt-4 ">
              {/* First and Second Image - 25% width each */}
              <div className="flex mb-2 gap-2 sm:gap-4 w-1/2 flex-col sm:flex-row">
                <div className="w-full ">
                  <img
                    src={vol5}
                    className="w-full h-[125px] sm:h-full object-cover rounded-[20px]"
                    alt="fifth image"
                  />
                </div>
               
              </div>

              {/* Third Image - 50% width */}
              <div className="w-full sm:w-1/2 pb-2">
                <img
                  src={vol6}
                  className="w-full h-full sm:h-full object-cover rounded-[25px] "
                  alt="sixth image"
                />
              </div>
            </div>

            <div className="flex justify-center gap-2 sm:gap-4 w-full h-[250px] sm:h-[300px] -mt-2 sm:mt-2 mb-6">
            <div className="w-full pb-2">
                <img
                  src={vol7}
                  className="w-full h-[260px] sm:h-full object-cover rounded-[25px] "
                  alt="seventh image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
        <Footer />
      </div>
    </>
  );
}

export default VoluntaryProgram;
