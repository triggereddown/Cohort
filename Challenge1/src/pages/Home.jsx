import React from "react";
import Navbar from "../components/layout/Navbar";
import ServiceCard from "../components/cards/ServiceCard";
import ServiceImage from "../assets/img3.png";
import Services from "../sections/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Services />
    </div>
  );
};

export default Home;
