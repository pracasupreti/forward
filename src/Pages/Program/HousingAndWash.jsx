import React from "react";
import Navbar from "../../components/Navbar";
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
import Footer from "../../components/Footer";
import BlackNavbar from "../../components/BlackNavbar";

function HousingAndWash() {
  return (
    <div className="flex flex-col">
      <BlackNavbar />
      <main className="h-full mb-[10rem] w-screen flex-grow mt-[7rem] bg-white p-5 lg:p-20">
        <section>
          <h1 className="font-inter pb-10 sm:text-right text-center sm:text-[60px] text-[40px] font-bold">
            Housing and Wash
          </h1>
          <div className="flex mb-2 justify-center">
            <div className="sm:flex sm:gap-4">
              <div className="sm:flex mb-2 gap-2 md:gap-4 flex flex-row">
                <div className="flex items-end">
                  <img
                    src={firstImg}
                    className="w-full h-fit"
                    alt="first image"
                  />
                </div>
                <div>
                  <img src={secondImg} alt="second image" />
                </div>
              </div>
              <div className="flex mb-2 sm:flex-col gap-2 sm:gap-4">
                <div>
                  <img src={thirdImg} alt="third image" />
                </div>
                <div>
                  <img src={fourthImg} alt="fourth image" />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex mb-2 justify-center sm:gap-4">
            <div className="flex mb-2 gap-2 sm:gap-4">
              <div>
                <img src={fifthImg} alt="fifth image" />
              </div>
              <div>
                <img src={sixthImg} alt="sixth image" />
              </div>
            </div>
            <div>
              <img src={seventhImg} alt="seventh image" />
            </div>
          </div>
          <div className="flex justify-center gap-2 sm:gap-4">
            <div>
              <img src={eighthImg} alt="eighth image" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-4">
              <div>
                <img src={ninthImg} alt="ninth image" />
              </div>
              <div className="hidden md:block">
                <img src={tenthImg} alt="tenth image" />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className='w-full mt-[10rem] shadow-custom-top'>      
        <div className='flex justify-center'>
          <img src={footer} alt="Footer content" className='w-full h-auto' />
        </div>
      </footer> */}
      <Footer />
    </div>
  );
}

export default HousingAndWash;
