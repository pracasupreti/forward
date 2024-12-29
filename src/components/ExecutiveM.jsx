
import React from 'react';
import BlackNavbar from './BlackNavbar';
import { useLocation } from 'react-router-dom';
import img1 from '../assets/Executive/img1.png';
import img2 from '../assets/Executive/img2.png';
import img3 from '../assets/Executive/img3.png';
import img4 from '../assets/Executive/img4.png';

const ExecutiveMembers = () => {
  const executives = [
    {
      name: "Bhagwati Chaudhary",
      role: "Chairperson",
      imageUrl: img1,
    },
    {
      name: "Hira Devi",
      role: "Vice Chairperson",
      imageUrl: img2,
    },
    {
      name: "Sarita Shah",
      role: "Treasurer",
      imageUrl: img3,
    },
    {
      name: "Lalita Chaudhary",
      role: "Secretary",
      imageUrl: img4,
    },
    {
      name: "Sarita Shah",
      role: "Treasurer",
      imageUrl: img3,
    },
    {
      name: "Sarita Shah",
      role: "Treasurer",
      imageUrl: img3,
    },
    {
      name: "Sarita Shah",
      role: "Treasurer",
      imageUrl: img3,
    },
    {
      name: "Sarita Shah",
      role: "Treasurer",
      imageUrl: img3,
    }
  ];
  
  const extraExecutives = [{
    name: "Sarita Shah",
    role: "Treasurer",
    imageUrl: img3,
  },
  {
    name: "Sarita Shah",
    role: "Treasurer",
    imageUrl: img3,
  }]

  return (
    <div className="w-full min-h-screen bg-white">
      <BlackNavbar />
      <div className="pt-32 mx-4 md:mx-0 ">
        <div className=" w-full bg-[#FCEDC6]  px-4 py-12  mt-[2rem]">
          <div className=" sm:grid   md:grid-cols-2 gap-8 ">
            <div>
              <h1 className="text-3xl md:mx-20  mb-4 font-archivo font-[800]">
                Building Strong Foundations<br />
                for Community Impact
              </h1>
            </div>
            <div>
              <p className="text-gray-700 font-inter text-base md:text-lg">
                Our Board and Executive Committee are dedicated to guiding Forward's
                mission with a strategic and hands-on approach. Focused on strong
                oversight and efficiency, the Board supervises operational heads,
                manages internal audits, and works closely with the management team
                to ensure effective program implementation.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center font-archivo mb-4">
              Our Executive Members
            </h2>
            <p className="text-center text-gray-600 font-inter mb-12">
              The Board, along with the management team, oversees the regular supervision, monitoring,
              <br></br> and follow-up of all Group, Center units, and Branch offices.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {executives.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-4 w-full">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full aspect-square object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold font-archivo">{member.name}</h3>
                  <p className="text-gray-600 font-inter">{member.role}</p>
                </div>
              ))}
            </div>
            <div className='flex justify-center items-center sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
              {extraExecutives.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-4 w-full">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full aspect-square object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold font-archivo">{member.name}</h3>
                  <p className="text-gray-600 font-inter">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveMembers;

// import React from "react";
// import { useLocation } from "react-router-dom";
// import img1 from "../assets/Executive/img1.png";
// import img2 from "../assets/Executive/img2.png";
// import img3 from "../assets/Executive/img3.png";
// import img4 from "../assets/Executive/img4.png";
// import MainNavContent from "./Navbar"; // Adjust this path as necessary
// import BlackNavbar from "./BlackNavbar";

// const ExecutiveMembers = () => {
//   const location = useLocation();

//   const executives = [
//     {
//       name: "Bhagwati Chaudhary",
//       role: "Chairperson",
//       imageUrl: img1,
//     },
//     {
//       name: "Hira Thadar",
//       role: "Vice Chairperson",
//       imageUrl: img2,
//     },
//     {
//       name: "Jayanti Rai",
//       role: "Treasurer",
//       imageUrl: img3,
//     },
//     {
//       name: "Lalita Chaudhary",
//       role: "Secretary",
//       imageUrl: img4,
//     },
//     {
//       name: "Kamala Devi",
//       role: "Board Member",
//       imageUrl: img3,
//     },
//     {
//       name: "Asha Kumari",
//       role: "Board Member",
//       imageUrl: img1,
//     },
//     {
//       name: "Sita Chaudhary",
//       role: "Board Member",
//       imageUrl: img2,
//     },
//     {
//       name: "Nayantara Chaudhary",
//       role: "Board Advisor",
//       imageUrl: img4,
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-white ">
//       <div className="absolute top-0 left-0 w-full z-50 text-black">
//         <BlackNavbar />
//       </div>

//       <div className="pt-24 mx-4 md:mx-20">
//         <div className="py-16">
//           <div className="container mx-auto px-4">
//             <h2 className="text-2xl md:text-3xl font-bold text-center font-archivo mb-4 text-gray-800">
//               Our Executive Members
//             </h2>
//             <p className="text-center text-gray-600 font-archivo mb-12 max-w-3xl mx-auto">
//               The Board, along with the management team, oversees the regular
//               supervision, monitoring, and follow-up of all Group, Center units,
//               and Branch offices.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {executives.map((member, index) => (
//                 <div
//                   key={`${member.name}-${index}`}
//                   className="flex flex-col items-center group"
//                 >
//                   <div className="mb-4 w-full overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
//                     <img
//                       src={member.imageUrl}
//                       alt={`${member.name}, ${member.role}`}
//                       className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <h3 className="text-xl font-semibold font-archivo text-gray-800 mt-2 text-center">
//                     {member.name}
//                   </h3>
//                   <p className="text-gray-600 font-archivo text-center">
//                     {member.role}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExecutiveMembers;
