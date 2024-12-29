import React from "react";
import BlackNavbar from "../components/BlackNavbar";
import Footer from "../components/Footer";
import org from "../assets/Success Stories/org.jpg";
import AnotherBanner from "./Banner";
import img2 from "../assets/Success Stories/img2.jpg"
import img3 from "../assets/Success Stories/img3.jpg"
import img4 from "../assets/Success Stories/img4.jpg"
import img1 from "../assets/Success Stories/img1.jpg";

function SuccessStories() {
  return (
    <div>
      <AnotherBanner />
      <BlackNavbar />
      <div className="bg-white py-12 pb-[10rem]">
        <div className=" mx-auto ">
          <div className="flex flex-col md:flex-row gap-8 md:mt-[8rem] mt-[4rem] ">
            <div className="flex-1">
              <div className="bg-[#FCEDC6] px-6 md:px-[7rem] py-[3rem]">
                <h2 className="text-3xl md:text-5xl font-archivo font-semibold text-center mb-8  md:h-full">
                  Success Stories
                </h2>
                <div className=" flex w-full gap-4 h-64 overflow-x-auto scrollbar-hide">
                  <div className="lg:w-1/4 flex lg:flex-col lg:gap-4 lg:h-[15rem]">
                    <img src={img1} className="rounded-md lg:h-1/2 w-full object-cover" />
                    <img src={img2} className="rounded-md lg:h-1/2 w-full  object-cover" />
                  </div>
                  <img src={img3} className="rounded-md lg:w-2/4 object-cover" />
                  <img src={img4} className="rounded-md lg:w-1/4 object-cover" />
                </div>
              </div>
              <p className="text-gray-700 text-xl font-inter leading-relaxed mt-[4rem] px-6 md:px-[7rem] ">
                <p className="text-gray-700 text-lg leading-relaxed font-bold font-inter">
                  Capacity Building and Skill Development Project, financial
                  assistance from Forward Community Microfinance BS Ltd.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-inter mt-4">
                  Forum for Rural Women Ardency Development (FORWARD)
                  established in Paush 2051 (Dec 1994), it had been formally
                  registered in 18 Baisakh, 2052 (May 1995). Additionally, it is
                  licensed by Nepal Rasta Bank (Central Bank of Nepal) under
                  financial intermediary Act in 15-paush, 2059 (Dec 2002),
                  affiliated in social welfare council, NGO Federation of Nepal,
                  also the organization has membership in many other Networks /
                  Societies like NGOCC, RMDC, Local Trust Fund Board and many
                  other related NGOs, INGOs and linkage with many other
                  financial Institutions. FORWARD is located at Duhabi, Sunsari,
                  eastern part of Nepal and also working as a non-governmental
                  financial intermediary organization (FINGO). FORWARD is
                  managed by compatible and committed women professional groups
                  and works for backward vulnerable, indigenous people and
                  communities on right based programs for empowering them in
                  sustainable manner. FORWARD developed trust among their
                  supporters through participation and partnership approach of
                  cooperation of ideas, collective views in order to significant
                  role in poverty alleviation and obligation to help against
                  poverty through microfinance, social development and
                  institutional development program. FORWARD raised their voices
                  against the domestic violence of women, child and vulnerable
                  community through mass awareness and advocacy programme.
                  FORWARD conducted various social and livelihood programme in
                  the field of community health, hygiene, improvement of
                  traditional practices of agriculture productivity, livestock
                  and entrepreneurship development. FORWARD enhanced capacity
                  for small farmers and irrigation user’s committee people
                  through various technical farming, irrigation operation/
                  maintenance and on-farm water management training in eastern
                  region of Nepal. FORWARD conducted various socio-economic
                  programmes in the field of MDGs education, health and poverty
                  alleviation given priority to empower the deprived communities
                  since 16 years. FORWARD has wide range of experiences in the
                  field of education, health, water supply and sanitation,
                  action research, and overall for livelihood promotion
                  (agriculture development, natural resource management, forest
                  development, entrepreneurship development, livestock
                  development etc).
                </p>
                <div className="p-10">
                  <img
                    src={org}
                    alt="Org"
                    className="w-1/2 max-sm:w-full mx-auto items-center h-full"
                  />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed font-inter mt-4 font-bold">
                  Competency of the organization and Market linkages
                </p>
                <ul className="list-disc list-inside">
                  <li>Micro-credit Operation</li>
                  <li>Low-Cost Earthquake-Resistant Rural Housing</li>
                  <li>Commercial Agriculture Development</li>
                  <li>Livestock Management</li>
                  <li>Natural Resources Conservation and Management</li>
                  <li>Community Health and Hygiene Initiatives</li>
                  <li>Income Generation Activities</li>
                  <li>
                    Capacity Building through Skill-Based Vocational Training
                    for Entrepreneur Development
                  </li>
                  <li>Women Leadership Development</li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-10">
                  FORWARD has very good past record in the field of agriculture,
                  irrigation and enterprise development. FORWARD has well
                  experienced of situation analysis of local stakeholders in the
                  organisational working area of eastern, central region,
                  western, mid and far western region of Nepal. Women
                  empowerment and entrepreneurship developed in technical
                  support of microfinance programme and as well as social
                  development department of organisation. Currently, FORWARD is
                  mainly engaged in low cost earthquake resistance rural housing
                  as well as community health and hygiene development including
                  mason training for employment generation. In this regards,
                  FORWARD Nepal has successfully improved the process of making
                  housing more affordable to the poor in Nepal in technical
                  assistance with Habitat for Humanity International Nepal and
                  engaged in: -
                </p>
                <ul className="list-disc list-inside mt-12 mb-12">
                  <li>
                    Construct house for poor and deprived community of 10,000
                    families and production centres in 2012-2016
                  </li>
                  <li>
                    Assist the FORWARD clients and staffs to understand the
                    importance of increment of earthquake resistant and low cost
                    house buildings of poor's, the use of local material and the
                    technologies as way forward for a sustainable housing
                    program
                  </li>
                  <li>
                    Providing knowledge, skills, and technologies of building
                    simple, affordable and environmentally friendly houses
                  </li>
                  <li>
                    Providing knowledge on disaster resilient housing to local
                    community and staffs
                  </li>
                  <li>
                    Coordination with Local government entities for capacity
                    enhancement to implement Disaster Risk Reduction (DRR)
                    programs
                  </li>
                  <li>
                    Conducting PASSA (Participatory Approach on Safe Shelter
                    Awareness) training for local communities and staffs
                  </li>
                  <li>
                    Conducting mason training, orientations for specific
                    subjects of importance to the campaign and on cost effective
                    construction to staffs and beneficiaries of the partner
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-10">
                  FORWARD provided their social and financial services based on
                  Value Chain by means of Horizontal and Vertical Integration.
                  Horizontal integration, acquisition of a competitor or by
                  adding the outlets e.g. the SCGs (saving-credit groups),
                  market agents, etc for wholesale lending to the chain by means
                  of technical support to develop their own entrepreneurship.
                  Similarly, Vertical integration made through forward and
                  backward integration. Forward Integration meant controlling of
                  market through expansion of various unit centres under their
                  branches as well as easy access to provide supply as per the
                  demand of people in the market.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SuccessStories;
