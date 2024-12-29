import { Omega } from "lucide-react";
import HousingAndWash from "../components/housing";
import Footer from "../components/Footer";
import Navbar from "../components/BlackNavbar";
import AnotherBanner from "./Banner";
export const Housing = () => {
  return (
    <>
    <AnotherBanner/>
      <Navbar />
      <HousingAndWash />
      <Footer />
    </>
  );
};
