import React from "react";
import BlackNavbar from "../../components/BlackNavbar";
import Footer from "../../components/Footer";
import AnotherBanner from "../Banner";
import img1 from "../../assets/Gallery/img1.jpg"
import img2 from "../../assets/Gallery/img2.jpg"
import img3 from "../../assets/Gallery/img3.jpg"
import img4 from "../../assets/Gallery/img4.jpg"
function Microfinance() {
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
                Microfinance
              </h2>
              <div className=" flex w-full gap-4 h-64 overflow-x-auto scrollbar-hide">
                <img src={img1} className="rounded-md lg:w-1/4 object-cover"/>
                <img src={img2} className="rounded-md lg:w-1/4 object-cover"/>
                <img src={img3} className="rounded-md lg:w-1/4 object-cover"/>
                <img src={img4} className="rounded-md lg:w-1/4 object-cover"/>
              </div>
              </div>
              <p className="text-gray-700 text-xl font-inter leading-relaxed mt-[4rem] px-6 md:px-[7rem] ">
                Forum for Rural Women Ardency Development (FORWARD) NGO’s
                conducted microfinance programme for 12 years and transferred
                its assets, liabilities and staffs and transformed into FORWARD
                Community Microfinance Bittiya Sanstha Ltd. (FORWARD), is
                registered under the Company Act from the Company Registrar and
                licensed by Nepal Rastra Bank as a national level Microfinance
                Development Bank ("D" Class financial Institution) with Head
                office in Duhabi Bhaluwa Municipality, Ward no-3, Sunsari of
                Eastern Development Region (EDR).The bank has started its formal
                operation from 17th May 2013 by taking over from Forward-NGO .
                The bank has major share holding of FORWARD Nepal and Everest
                Bank Limited with 25% each, with Rural Microfinance Development
                Centre holding (RMDC) -10%, Individual promoters -10%, and
                remaining 30% shares to be issued to general public through
                Initial Public Offering. In the pursuit of poverty reduction
                through providing qualitative financial services to poor people
                in underserved and un-served people in a sustainable way,
                FORWARD has established 72 branches from Mechi to Mahakali and
                has plan to further expand its services in upper hills,
                mountains and inner part of Terai.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Microfinance;
