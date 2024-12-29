import React from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import ScrollingBanner from "./components/ScrollingBanner";
import Header from '../components/Header'
import Rural from "./components/Rural_Women";
import Projects from "./components/Projects";
import CustomMarqueeGallery from "./components/Gallery";
import Logo from "./components/Logo";
import Mission from "./components/Mission";
import Goals from "./components/Goals";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Main = () => {
  return (
    <div>
      <Header/>
      <LandingPage />
      <ScrollingBanner />
      <Rural />
      <CustomMarqueeGallery />
      <Projects />
      <Logo />
      <Goals />
      <Goals2 />
      <Mission />
      <Footer />
    </div>
  );
};

export default Main;
