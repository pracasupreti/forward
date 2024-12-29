import React from 'react';
import AnotherBanner from '../Banner';
import BlackNavbar from '../../components/BlackNavbar';
import Footer from '../../components/Footer';

const ExecutiveCommittee = () => {
  const boardMembers = [
    { name: "Bhagbati Chaudhary", qualification: "B.Com, M.A (Socio)", post: "Chairperson", location: "Duhabi, Sunsari" },
    { name: "Hira Thandar", qualification: "B.A.", post: "Vice-Chairperson", location: "Duhabi, Sunsari" },
    { name: "Jayanti Rai", qualification: "M.A. (Eco)", post: "General Secretary", location: "Jitpur, Ilam" },
    { name: "Lalita Chaudhary", qualification: "B.A.", post: "Secretary", location: "Biratnagar, Morang" },
    { name: "Rajkumari Tabdar", qualification: "I.A.", post: "Treasurer", location: "Biratnagar, Morang" },
    { name: "Dev Kumari Shrestha", qualification: "B.Com., M.Sc. (Nur)", post: "Member", location: "Dharan, Sunsari" },
    { name: "Kalawati Chaudhary", qualification: "S.L.C.", post: "Member", location: "Sunsari" },
    { name: "Navodita Chaudhary", qualification: "M.Sc (NRM)", post: "Member", location: "Jhumka, Sunsari" },
    { name: "Sabita Dahal", qualification: "M.B.S.", post: "Member", location: "Kathmandu" },
    { name: "Aash Narayan Chaudhary", qualification: "M.Sc", post: "Executive Director", location: "Aurabani, Sunsari" },
  ];

  const managementTeam = [
    { post: "Executive Director", manpower: 1 },
    { post: "Micro-finance Chief and other Department Chiefs", manpower: 5 },
    { post: "Civil Engineer/Project Coordinator", manpower: 2 },
    { post: "Account Officer", manpower: 1 },
    { post: "Area Officers", manpower: 6 },
    { post: "IT Officers", manpower: 1 },
    { post: "Internal Audit Officer", manpower: 2 },
    { post: "Branch Managers", manpower: 29 },
    { post: "Sub Branch In-charges", manpower: 16 },
  ];

  return (
    <>
      <AnotherBanner></AnotherBanner>
      <BlackNavbar />
      <div className=" mx-auto py-12  space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4  mt-[70px] md:mt-[100px]">
          <div className="bg-[#FCEDC6] px-6 md:px-[7rem] py-[3rem]">
            <h2 className="text-3xl md:text-5xl font-archivo font-semibold text-center  md:h-full ">
              Executive Committee
            </h2>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto">Learn more about our agency and the dedicated team behind our success.</p>
        </div>
<div className='px-6 lg:px-[7rem]'>
        {/* Board Section */}
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Board & Management</h2>
            <p className="text-gray-600 leading-relaxed">
              Board/Executive Committee focused to supervise Operation heads, internal audit management and other management working with team.
              The team manage the regular supervision, monitoring and follow-up of Group, Center units and Branch offices, for staff's efficiency promotion.
              Moreover, board itself regulate the policies and enhance new techniques, principle of micro-finance and overall programme.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">New Elected Board Members from 15th AGM, 2067</p>

            <div className="overflow-hidden shadow ring-1 ring-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {boardMembers.map((member, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{member.qualification}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{member.post}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{member.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Management Team Section */}
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Management Team</h2>
            <p className="text-gray-600 leading-relaxed">
              Central and Area management team assist in operation and feedback of field performance in Center/ Units and all over the branches and staffs.
            </p>
          </div>

          <div className="overflow-hidden shadow ring-1 ring-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manpower</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {managementTeam.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.post}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 ">{item.manpower}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ExecutiveCommittee;