
import Goals from "./About Us/Goals and Objectives/Goals";
import Forward from "../components/Forward";
import Footer from "../components/Footer";
import Navbar from "../components/BlackNavbar";
import AnotherBanner from "../Pages/Banner"

export const GoalsPage = () => {
  return (
    <>
      <AnotherBanner/>
      <Navbar />
      <Goals />
      <Forward />
      <Footer />
    </>
  );
};
