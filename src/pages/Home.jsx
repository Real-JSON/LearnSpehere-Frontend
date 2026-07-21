import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/LandingSections/Hero";
import About from "../components/LandingSections/About";
import Benefits from "../components/LandingSections/Benefits";
import PopularCourses from "../components/LandingSections/PopularCourses";
import Tutor from "../components/LandingSections/Tutor";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Benefits />
      <PopularCourses />
      <Tutor />

      <Footer />
    </>
  );
};

export default Home;
