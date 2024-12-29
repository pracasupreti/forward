
import React from 'react';
import image from '../assets/Projects/img1.png';
import image2 from '../assets/Projects/img2.png';
import image3 from '../assets/Projects/img3.png'
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ title, description, image }) => {
  const navigate = useNavigate();

  return(

  <div className="w-full md:flex-1">
    <div className="h-[300px] sm:h-[350px] md:h-[380px] lg:h-[421px] rounded-lg overflow-hidden relative flex flex-col inset-0">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-zinc-700/60 to-zinc-800/60" />
      <div className="flex flex-col tracking-wide leading-tight justify-center absolute inset-0 bg-black/40 px-10 sm:px-8 md:px-12 lg:px-16 font-inter">
        <h3 className="text-white text-3xl md:text-2xl xl:text-4xl font-bold mb-7 sm:mb-8 md:mb-10 lg:mb-14 font-archivo">{title}</h3>
        <p className="text-white/90 text-base sm:text-lg mb-8 sm:mb-6 md:mb-8 lg:mb-10 leading-tight font-inter tracking-tight">{description}</p>
        <button onClick={() => (navigate('/about-us/goals-and-objectives'))} className="bg-[#FFB700] w-fit px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded text-sm font-medium hover:bg-yellow-500 transition-colors tracking-tight">
          Learn More
        </button>
      </div>
    </div>
  </div>
  );
}

const Projects = () => {
  
  const projects = [
    {
      title: "Agriculture\nManagement",
      description: "Since 1995, FORWARD has been a beacon of hope for rural women and communities.",
      image: image
    },
    {
      title: "Irrigation\nManagement",
      description: "Since 1995, FORWARD has been a beacon of hope for rural women and communities.",
      image: image2
    },
    {
      title: "Toilet\nConstruction",
      description: "Since 1995, FORWARD has been a beacon of hope for rural women and communities.",
      image: image3
    }
  ];

  return (
    <div className=" bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16 ">
        {/* Header section with yellow line */}
        <div className="ml-[1.6rem]">
          <div className="mb-6 md:mb-4 flex items-center gap-2">
            <div className=" h-[1.5px] ml-4 sm:ml-[29px] md:ml-[4.8rem] w-10 sm:w-12 md:w-16 bg-black"></div>
            <span className="font-inter text-sm sm:text-base md:text-[15px] font-medium text-[#FFA800] uppercase">
            Look Through Our Projects
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[3rem]  font-semibold ml-4 sm:ml-8 md:ml-12 lg:ml-[4.5rem] w-full md:py-2 font-archivo ">
            <span className='flex flex-col gap-0 md:gap-4 '><span>We are creating a place</span><span> where every women can</span><span> thrive. </span></span>
          </h1>
        </div>

        {/* Projects grid */}
        <div className="flex flex-col md:flex-row gap-6 mt-16 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;