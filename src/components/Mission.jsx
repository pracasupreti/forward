import right_image from "../assets/Mission/image.png";  // File should be named "img.png"
import microfinanceIcon from "../assets/Mission/Icon (1).svg";  // File should be named "Icon (1).svg"
import agricultureIcon from "../assets/Mission/Icon (2).svg";   // File should be named "Icon (2).svg"
import irrigationIcon from "../assets/Mission/Vector.svg" ;   // This is duplicate, should probably be "Icon (3).svg"
import entrepreneurshipIcon from "../assets/Mission/Icon (4).svg"; // File should be named "Icon (3).svg"

function Mission() {
  return (
    <section className="bg-[#FCEDC6] px-4 sm:px-6 md:px-8 lg:px-4  py-8 sm:py-10 md:py-12 lg:py-16">
    <div className="container px-4 max-w-7xl  mx-auto">

      {/* Know About Us */}
      <div className="mb-6 md:mb-4 flex items-center gap-2">
        <div className=" h-[1.5px] ml-2 sm:ml-[20px] md:ml-[5rem] w-10 sm:w-12 md:w-16 bg-black"></div>
        <span className="font-inter text-sm sm:text-base md:text-[15px] font-medium text-[#FFA800] uppercase">
          Know about us
        </span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-10 lg:ml-20">
        {/* Left portion */}
        <div className="space-y-6 md:space-y-8 lg:space-y-12 order-2 lg:order-1 flex-1">
          {/* Header */}
          <div className="-space-y-6 md:space-y-4">
            <h1 className="hidden lg:block font-archivo text-2xl sm:text-3xl md:text-[38px] lg:text-[43px] font-bold leading-tight md:leading-snug lg:leading-[50px] text-black max-w-[650px]">
              FORWARD's Impact on Rural Communities
            </h1>
            <p className="font-inter   font-medium text-xs tracking-normal sm:text-base md:text-[18px] text-[#383838] max-w-[550px] ">
              Since 1995, FORWARD has been a beacon of hope for rural women and communities.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative pl-6">
            {/* Vertical line */}
            <div className=" hidden md:block lg:block absolute -left-3 top-0 h-full w-[1px] bg-blue-200"></div>

            {/* Timeline items */}
            <div className="space-y-6 ">
              {TimelineItems.map((item, index) => (
                <div key={index} className="flex gap-4 -ml-5">
                  <div className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-full h-full object-contain md:mt-[3px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-archivo text-lg md:text-4xl lg:text-[24px] font-bold text-black -mt-1">
                      {item.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm md:text-[13px] font-normal text-[#383838] leading-relaxed lg:max-w-[87%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right portion - Image with mobile title */}
        <div className="order-1 lg:order-2 mb-6 lg:mb-0">
          {/* Mobile-only title */}
          <h1 className="lg:hidden font-archivo text-xl sm:text-3xl md:text-[38px] font-semibold tracking-tight  md:leading-snug text-black mb-4">
            FORWARD's Impact on Rural Communities
          </h1>
          
          {/* Image */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[625px] lg:w-[470px] min-lg:w-[355px] ">
            <img
              src={right_image}
              alt="Rural landscape"
              className="h-full w-full rounded-2xl object-cover shadow-lg "
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

// Timeline items data
const TimelineItems = [
  {
    icon: microfinanceIcon,
    title: "Microfinance",
    description: "Providing financial services to rural women, empowering them to start and expand small businesses, build savings, and improve livelihoods."
  },
  {
    icon: agricultureIcon,
    title: "Agriculture",
    description: "Supporting sustainable farming practices and offering resources to improve crop yields, contributing to food security and economic stability in rural areas."
  },
  {
    icon: irrigationIcon,
    title: "Irrigation",
    description: "Developing irrigation systems to ensure water access for farming, increasing productivity and reducing dependence on seasonal rainfall."
  },
  {
    icon: entrepreneurshipIcon,
    title: "Entrepreneurship",
    description: "Encouraging small businesses through training, mentoring, and access to resources, creating job opportunities and fostering economic independence."
  }
];

export default Mission;