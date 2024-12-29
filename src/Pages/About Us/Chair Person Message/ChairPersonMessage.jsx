import React from "react";
import Footer from "../../../components/Footer";
import Bhagbati from "../../../assets/Executive/bhagwati.jpg";
import BlackNavbar from "../../../components/BlackNavbar";
import AnotherBanner from "../../Banner";

function ChairPersonMessage() {
  return (
    <>
      <AnotherBanner />
      <BlackNavbar />

      <div className="bg-gray-100 py-12 pb-[10rem]">
        <div className=" mx-auto ">
          <div className="flex flex-col md:flex-row gap-8 md:mt-[8rem] mt-[4rem] ">
            <div className="flex-1">
              <div className="bg-[#FCEDC6] px-6 lg:px-[7rem] py-[3rem]">
                <h2 className="text-3xl md:text-5xl font-archivo font-semibold text-center mb-8  md:h-full ">
                  Founder Chairperson
                </h2>
                <div className=" flex w-full ">

                  <div className=" flex flex-col  md:flex-row md:items-end gap-4">
                    <div className="flex  items-center w-full md:w-1/3 ">
                      <img
                        src={Bhagbati}
                        alt="Bhagbati Chaudhary"
                        className="w-full md:w-[24rem]  rounded-[20px] "
                      />
                    </div>
                    <div className="w-full md:w-[60%] ">
                      <div className="flex gap-4 items-center mt-6 md:mt-0">
                        <div className="w-6 h-6 rounded-full bg-[#FFB700] blur-[2px]"></div>
                        <h1 className=" font-archivo text-xl md:text-3xl font-semibold ">Bagwati Chaudary</h1>
                      </div>
                      <p className="text-black text-lg leading-relaxed mt-6">Bhagbati Chaudhary is the founder of the organization, she and her team established this organization in Paush 2051 (Dec 1994). Licensed by Nepal Rastra Bank as a Financial Intermediary in December 2002, allowing for microfinance operations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-xl font-inter leading-relaxed mt-[4rem] px-6 lg:px-[7rem] ">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Forum for Rural Women Ardency Development (FORWARD) established
                  in May 1995 and managed by compatible and committed women
                  professional groups, works for backward vulnerable, indigenous
                  people and communities on right based programs for empowering
                  them in sustainable manner.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  FORWARD developed trust among their supporters through
                  participation and partnership approach of cooperation of ideas,
                  collective views in order to significant role in poverty
                  alleviation and obligation to help against poverty through
                  microfinance, social development and institutional development
                  program. FORWARD raised their voices against the domestic
                  violence of women, child and vulnerable community through mass
                  awareness and advocacy programme.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  I would like to thank all of my members, advisors, executive
                  boards, honorary members, clients, staffs, and all others of
                  regulatory NRB, RMDC, related District Development Committee
                  (DDC), District Administration Office (DAO), other concern
                  district stakeholders, different commercial banks, Standard
                  Chartered Bank, Everest Bank, Himalayan Bank, Bank of Kathmandu,
                  Sanima Bank, NABIL Bank, Clean Energy Bank, Citizens
                  International Bank, Siddhartha Bank, First Microfinance
                  Development Bank etc. alongwith other donors ADB, Habitat for
                  Humanity International, Australian AID, Unicef, KOICA, UNDP,
                  UNCDF etc. and rest of other well-wishers NGOs and Microfinance
                  Networks/ Partners those are working for poverty reduction and
                  poverty throughout from the country.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Similarly, my heartily appreciation to our board members, senior
                  management team (SMT) and all other associated staffs of head
                  office, Area offices and branch offices of FORWARD. Moreover, I
                  appreciated the enthusiasm, hard-working, commitment with
                  accountable and transparent performance of all staffs, give
                  enormous assistance to me and organisation for better flourish
                  and scaling-up of Organisation as well as for better fund
                  raising from donors and stakeholders.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  I am grateful to all supporters, contributed through their
                  effective suggestion and participation for scaling-up of
                  ourganisation. Finally, I commit to improve better qualitative
                  service to our clients, partner and well-wishers of
                  organisation. It's my pleasure to accept all valuable
                  suggestions and comments from our related stakeholders, members
                  and funding agencies.
                </p>
                <p className="text-gray-700 font-bold text-lg mt-4 font-inter">
                  Bhagbati Chaudhary
                  <br />
                  Executive Chairperson
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

export default ChairPersonMessage;
