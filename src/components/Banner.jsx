import React from "react";
import BannerImg from "../assets/Strategies/Banner.png";

function Banner() {
  return (
    <div
      className="bg-cover bg-center h-[16rem] md:h-[26rem] lg:h-[30rem] md:rounded-[20px]"
      style={{
        backgroundImage: `linear-gradient(84.7deg, rgba(0, 0, 0, 0.58) 2.41%, rgba(30, 30, 30, 0.58) 34.85%, rgba(55, 55, 55, 0.58) 75.2%, rgba(32, 32, 32, 0.58) 94.76%), url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full p-4 md:p-8">
        <h1 className="font-archivo text-[20px] md:text-[30px] lg:text-[50px] text-white font-semibold text-center leading-tight md:leading-[1.2]">
          Join us in our mission to create a brighter, more empowered future for
          those who need it most
        </h1>
        <div className="flex md:flex-row gap-10 mt-6 md:mt-4">
          <button className="bg-[#FFB700] font-inter text-black px-6 py-3 rounded-lg text-center ">
            Learn More
          </button>
          <button className="bg-[#FFFFFF] font-inter  border-2 border-white text-black px-6 py-3 rounded-lg text-center ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
