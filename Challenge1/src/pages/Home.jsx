import React from "react";
import Navbar from "../components/layout/Navbar";
import ServiceCard from "../components/cards/ServiceCard";
import ServiceImage from "../assets/img3.png";
import Services from "../sections/Services";
import Footer from "../components/layout/Footer";
import ProjectCard from "../components/cards/ProjectCard";
import Projects from "../sections/Projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
