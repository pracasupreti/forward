import React from "react";
import BlackNavbar from "../components/BlackNavbar";
import Footer from "../components/Footer";
import area from "../assets/Working Area/working-area.jpg";

function WorkingArea() {
  return (
    <div>
      <BlackNavbar />
      <div>
        <div>
          <img
            src={area}
            className="w-full max-sm:w-full items-center mx-auto h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WorkingArea;
