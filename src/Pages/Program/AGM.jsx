import React from "react";
import BlackNavbar from "../../components/BlackNavbar";
import Footer from "../../components/Footer";
import AnotherBanner from "../Banner";
import img1 from "../../assets/Gallery/agm.jpg";
import img2 from "../../assets/Gallery/agm2.jpg";

function AGM() {
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
                AGM
              </h2>
              <div className=" flex w-full gap-4 h-64 overflow-x-auto scrollbar-hide">
                <img src={img1} className="rounded-md lg:w-1/2 object-cover"/>
                <img src={img2} className="rounded-md lg:w-1/2 object-cover"/>
              </div>
              </div>
              <p className="text-gray-700 text-xl font-inter leading-relaxed mt-[4rem] px-6 md:px-[7rem] ">
              <ul className="list-disc list-inside md:text-xl">
                <li>
                  FORWARD owned by young, rural and ethnic professional groups,
                  organized to guide the organization with participatory
                  approaches for better growth and governance;
                </li>
                <li className="mt-4">
                  FORWARD, conducting annual general meeting to build and reform
                  sound operation policy and regulation for better management
                </li>
                <li className="mt-4">
                  Regular Board meeting is maintained to monitor and regulate
                  the senior management for effective conduction of programme
                  activities under organisation;
                </li>
                <li className="mt-4">
                  All board members are inclusive and run by women headship.
                </li>
                <li className="mt-4">
                  All senior staff at the head office include Operation Chief,
                  Department Chiefs, HR Manager, Field Officers, and Admin.
                  Staffs are working as regulatory, supervisory, controlling
                  bodies. Branch Managers and Center Mobilizers called
                  Motivators added ideas about challenging issues coming from
                  the field and being minimized at area level from Area
                  Managers, with policy issues being informed to head office for
                  revision and rectification of amendment. The Organizational
                  major decision is performed by Action Committees formed by
                  major portfolio board members, department heads, and advisors.
                </li>
                <li className="mt-4">
                  Social development (project/sub-project activities) being
                  managed by Action Management Committee (including 2-3 board
                  members, Executive Directors, Department Chiefs, and Project
                  Coordinator) for effective operation of programme activities;
                </li >
                <li className="mt-4">
                  Double entry system and MIS are followed for better
                  governance.
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

export default AGM;
