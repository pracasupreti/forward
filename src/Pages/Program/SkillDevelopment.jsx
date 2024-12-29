import React from "react";
import BlackNavbar from "../../components/BlackNavbar";
import Footer from "../../components/Footer";
import AnotherBanner from "../Banner";
import img1 from "../../assets/Gallery/img1.jpg"
import img2 from "../../assets/Gallery/img2.jpg"
function SkillDevelopment() {
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
              Skill Development
              </h2>
              <div className=" flex w-full gap-4 h-[22rem] overflow-x-auto scrollbar-hide">
                <img src={img1} className="rounded-md lg:w-1/2 object-cover"/>
                <img src={img2} className="rounded-md lg:w-1/2 object-cover"/>
              </div>
              </div>
              <p className="text-gray-700 text-xl font-inter leading-relaxed mt-[4rem] px-6 md:px-[7rem] ">
              <p className="text-gray-700 text-lg leading-relaxed font-bold">
                Capacity Building and Skill Development Project, financial
                assistance from Forward Community Microfinance BS Ltd.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-regular mt-4">
                ग्राहक सदस्यहरु र कर्मचारीहरुको क्षमता अभिवृद्धि कार्यक्रम ः
                ग्रामीण महिला उत्सुक्ता विकास मञ्च (फरवार्ड) ले फरवार्ड
                कम्युनिटी माइक्रोफाइनान्स वित्तीय संस्था लिमिटेडको सहयोगमा उक्त
                वित्तीय संस्थाका ग्राहक सदस्यहरु टिकाई राख्न तथा क्षमता
                अभिवृद्घि गर्नकालागि विगतमा फरवार्डले संचालन गरेको लघुवित्त
                कार्यक्रममा जस्तै ग्राहक सदस्य तथा अभिभावकहरुको क्षमता अभिवृद्घि
                सम्वन्धि तालिम, गोष्ठि, सीपमुलक तालिम कार्यक्रमहरु संचालनलाई यस
                आ.व. २०७३।०७४मा पनि उक्त कार्यक्रमले निरन्तरता पाएको छ । यस वर्ष
                रु.९९,३८,०००।– बजेट शिर्षकको कार्यक्रम स्वीकृत भएको छ ।
              </p>                
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SkillDevelopment;
