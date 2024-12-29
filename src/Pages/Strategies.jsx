import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "../assets/Strategies/Image.png";
import Banner from "../components/Banner";

function Strategies() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const items = [
    "Replication",
    "Coordination",
    "Livelihood",
    "Partnership",
    "Expansion",
  ];

  const descriptions = [
    "Forward’s approach involves creating replicas of successful initiatives, allowing us to adapt proven strategies to various communities across Nepal. This ensures that effective solutions can be scaled and implemented in different contexts, maximizing their impact.",
    "Forward prioritizes coordination among diverse stakeholders to enhance program effectiveness. By fostering collaboration and ensuring all parties are aligned, we create a unified effort that amplifies our reach and ensures efficient resource use in achieving sustainable development.",
    "Forward is dedicated to improving livelihoods by implementing programs that equip communities with essential skills and resources. Through sustainable practices and economic empowerment initiatives, we aim to enhance the quality of life and foster long-term stability for individuals and families.",
    "Forward believes in the power of partnership to drive impactful change. By working closely with local organizations and communities, we leverage collective strengths and resources, enhancing the effectiveness of our programs and building lasting relationships for mutual benefit.",
    "Forward’s vision includes strategic expansion into new regions to broaden our impact. By scaling successful initiatives and adapting them to meet local needs, we aim to reach more communities, ensuring our efforts contribute to sustainable development across Nepal.",
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="h-full w-screen flex-grow mt-[7rem] bg-white ">
        <section>
          <div className="md:flex p-10 md:p-20 pb-5 items-center lg:items-start md:text-left gap-10 justify-between bg-[#FCEDC6]">
            <div className="md:hidden">
              <img src={Image} className="" alt="" />
            </div>
            <div className="md:w-[40.08%] mt-[1rem] mb-[1rem]">
              <h1 className="font-archivo leading-[120%] mb-[1rem] text-[20px] md:text-[35px] font-bold">
                Linking microfinance with livelihood programs to drive
                socio-economic growth in Nepal
              </h1>
              <p className="text-[20px] hidden md:block leading-[160%] font-normal text-[#525560]">
                Forward’s strategies are designed to create sustainable impact
                by building on proven success stories and adapting them to reach
                more communities across Nepal
              </p>
            </div>
            <div className="hidden md:block">
              <img src={Image} className="" alt="" />
            </div>
          </div>
          <div>
            <p className="md:text-[20px] p-10 md:hidden leading-[160%] text-[16px] font-normal text-[#525560]">
              Forward’s strategies are designed to create sustainable impact by
              building on proven success stories and adapting them to reach more
              communities across Nepal
              <hr className="mt-8" />
            </p>
          </div>

          <div className="pl-10 md:flex pr-10 gap-10 md:justify-between md:p-20 md:pt-[7rem]">
            <div className="md:w-[47.92%]">
              <h1 className="font-archivo text-[20px] mb-10 leading-[120%] font-bold md:text-[35px]">
                Our strategic approach combines effective program replication
                and regional coordination.
              </h1>
              <p className="text-[20px] hidden md:block leading-[160%] font-normal text-[#525560]">
                By integrating social development with economic support, we are
                expanding our reach to uplift livelihoods, protect biodiversity,
                promote agriculture, and extend humanitarian assistance to
                communities across the country.
              </p>
            </div>
            <div className="md:w-[53.5%]">
              <div className="md:whitespace-normal mt-10 md:mt-0 flex md:flex-wrap scrollbar-hide whitespace-nowrap gap-5 overflow-x-auto">
                {/* Render a button for each item in the items array   */}
                {items.map((items, index) => (
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`mr-[10px] ${
                      activeIndex === index
                        ? "border-[#FFB700] font-semibold" //Highlight active button
                        : "border-transparent"
                    } text-[20px] pb-5 font-normal border-b-[2px]`}
                    key={index}
                  >
                    {items}
                  </button>
                ))}
              </div>
              <hr />

              <p className="md:text-[20px] mt-10  text-[16px] text-[#525560] leading-[32px]">
                {/* Display the description based on the active index or a fallback message */}
                {activeIndex !== null
                  ? descriptions[activeIndex]
                  : "no data found :("}
              </p>
            </div>
          </div>

          <div className="pl-10 pr-10 md:pl-20 md:pr-20">
            <hr className="mt-10 md:mt-0" />
          </div>

          <div className="md:flex p-10 md:p-20">
            <div className="md:w-[66.1%] mb-10">
              <h1 className="text-[20px] md:text-[35px] font-bold font-archivo leading-[120%]">
                Our team works closely with district and regional bodies to
                align strategies
              </h1>
            </div>
            <div className="md:w-[32.8%]">
              <p className="text-[16px] md:text-[20px] text-[#525560] leading-[32px]">
                By integrating social development with economic support, we are
                expanding our reach to uplift livelihoods, protect biodiversity,
                promote agriculture, and extend humanitarian assistance to
                communities across the country.
              </p>
            </div>

            <div className="md:w-[32.8%]">
              <p className="text-[16px] hidden md:block  md:text-[20px] text-[#525560] leading-[32px]">
                By integrating social development with economic support, we are
                expanding our reach to uplift livelihoods, protect biodiversity,
                promote agriculture, and extend humanitarian assistance to
                communities across the country.
              </p>
            </div>
          </div>
          <div className="md:p-20">
            <Banner />
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default Strategies;
