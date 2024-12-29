import React from "react";
import image from "../../../assets/Goals/image.png";
import logo from "../../../assets/Goals/logo.svg";

const Goals = () => {
  const goals = [
    {
      id: "01",
      title: "Replicating Successful Models",
      description:
        "Expanding our proven approaches to drive socio-economic development across new regions.",
    },
    {
      id: "02",
      title: "Strengthening Local Coordination",
      description:
        "Enhancing collaboration at district and regional levels to ensure efficient program implementation.",
    },
    {
      id: "03",
      title: "Integrating Livelihood and Microfinance Programs",
      description:
        "Linking social development initiatives with microfinance to promote long-term economic improvement.",
    },
    {
      id: "04",
      title: "Building Partnerships and Capacity",
      description:
        "Empowering local organizations, communities, and agencies through partnerships and capacity-building efforts.",
    },
    {
      id: "05",
      title: "Focusing on Key Sectors",
      description:
        "Prioritizing future programs in livelihood, biodiversity, commercial agriculture, and humanitarian support.",
    },
    {
      id: "06",
      title: "Nationwide Program Expansion",
      description:
        "Aiming for comprehensive, national-level outreach to impact more lives and promote sustainable growth across Nepal.",
    },
  ];

  return (
    <div className="relative mx-auto px-4 bg-white ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-16 items-center p-8 md:p-32 pb-0">
        <div className="w-full mt-[40px] md:mt-10 max-sm:mt-14">
          <img
            src={image}
            alt="Hands holding green plant leaves showing growth concept"
            className="h-80 w-full object-cover rounded-3xl shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col lg:space-y-6 ">
          <h3 className="text-[30px] md:text-[40px] mt-6  lg:text-[50px] font-semibold font-inter leading-tight  ">
            <div className="flex flex-col font-archivo">
              <span>Fostering</span>
              <span>Growth, One</span>
              <span>Goal at a Time</span>
            </div>
          </h3>

          <p className="text-[16px]  mb-10 md:text-[18px] lg:text-[22px] font-inter tracking-wider">
            Empowering vulnerable communities through sustainable development
            and social equity
          </p>
        </div>
      </div>

      <div className="font-archivo md:-mt-20 lg:-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-8 w-full p-4 lg:p-[8rem] pt-0">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="bg-white py-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-end mb-4">
                <div className="bg-[#FFB65E] w-[3rem] h-[3rem] md:w-16 md:h-16 rounded-lg flex items-center justify-center text-5xl font-bold mb-2 md:mb-4">
                  {goal.id}
                </div>
              </div>
              <h4 className="text-[28px] md:text-[25px] lg:text-[27px] font-semibold font-archivo leading-[40px] text-left mb-4 lg:h-[120px]">
                <span className="block mt-2">
                  {goal.title.split(" ")[0]} {goal.title.split(" ")[1]}
                </span>
                <span className="block mt-2">
                  {goal.title.split(" ").slice(2).join(" ")}
                </span>
              </h4>
              <p className="tracking-wider font-inter text-md w-[80%] text-[#323232] lg:h-[120px]">
                {goal.description}
              </p>

              <div className="mt-4 pb-[2px]">
                <hr className=" bg-[#707070] h-[2px] w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
