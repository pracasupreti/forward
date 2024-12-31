import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChairPersonMessage from "./Pages/About Us/Chair Person Message/ChairPersonMessage";
import Microfinance from "./Pages/Program/Microfinance";
import PovertyAlleviation from "./Pages/Program/PovertyAlleviation";
import Environment from "./Pages/Program/Environment";
import LegalIdentities from "./Pages/About Us/Legal Identities/LegalIdentities";
import AGM from "./Pages/Program/AGM";
import VoluntaryProgram from "./Pages/Program/VoluntaryProgram";
import SkillDevelopment from "./Pages/Program/SkillDevelopment";
import { Housing } from "./Pages/Housing";
import { Home } from "./Pages/Home";
import { ExecutiveMembersPage } from "./Pages/ExecutiveMembersPage";
import { GoalsPage } from "./Pages/GoalsPage";
import { Strategy } from "./Pages/Strategy";
import SuccessStories from "./Pages/SuccessStories";
import Partners from "./Pages/Partners";
import ContactPage from "./Pages/Contact/Contact";
import ExecutiveCommittee from "./Pages/ExecutiveCommitee/ExecutiveCommitee";

// Please merge

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/microfinance" element={<Microfinance />} />
        <Route
          path="/program/poverty-alleviation"
          element={<PovertyAlleviation />}
        />
        <Route path="/program/environment" element={<Environment />} />
        <Route path="/executive-committee" element={<ExecutiveCommittee/>}/>
        
        <Route
          path="/program/skill-development"
          element={<SkillDevelopment />}
        />

        <Route path="/success-stories" element={<SuccessStories />} />

        <Route
          path="/about-us/chairpersons-message"
          element={<ChairPersonMessage />}
        />
        <Route path="/about-us/goals-and-objectives" element={<GoalsPage />} />
        <Route path="/about-us/strategies" element={<Strategy />} />
        <Route
          path="/about-us/legal-identities"
          element={<LegalIdentities />}
        />
        <Route path="/program/agm" element={<AGM />} />
        <Route path="/program/microfinance" element={<Microfinance />} />
        <Route
          path="/program/voluntary-program"
          element={<VoluntaryProgram />}
        />
        <Route path="/partners" element={<Partners />} />

        <Route path="/executive-members" element={<ExecutiveMembersPage />} />

        <Route path="/goals" element={<GoalsPage />} />

        <Route path="/program/housing-and-wash" element={<Housing />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;