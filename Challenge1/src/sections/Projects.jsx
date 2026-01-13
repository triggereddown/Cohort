import React from "react";
import ProjectCard from "../components/cards/ProjectCard";

import placeholderImg1 from "../assets/img7.webp";
import placeholderImg2 from "../assets/img4.webp";
import placeholderImg3 from "../assets/img5.webp";
import placeholderImg4 from "../assets/img6.webp";

const Projects = () => {
  return (
    <div id="projects" className="projects max-w-7xl mx-auto px-6 py-20 ">
      <div className="top flex flex-col md:flex-row justify-between items-end mb-20">
        <div className="left">
          <h1 className="text-5xl font-medium tracking-tight">
            Recent Project
          </h1>
        </div>

        <div className="right text-gray-500 max-w-md text-right">
          <p>
            Step into the world of our most recent projects, a showcase of our
            unwavering commitment to progressive design.
          </p>
        </div>
      </div>

      <div className="bottom flex flex-col md:flex-row gap-8">
        <div className="left flex-1 flex flex-col gap-16 ">
          <ProjectCard
            title="The Lighthouse"
            description="Adding a new dimension to projects through thoughtfully designed 2D animations."
            img={placeholderImg1}
            category="2D Animation"
          />

          <ProjectCard
            title="Urban Oases"
            description="Redefining city landscapes with sustainable and modern architectural solutions."
            img={placeholderImg2}
            category="Architecture"
          />
        </div>

        <div className="right flex-1 flex flex-col gap-16 md:mt-32 pl-10">
          <ProjectCard
            title="Snowscape Haven"
            description="Crafting a visual identity that mirrors the serenity and allure of a winter sanctuary."
            img={placeholderImg3}
            category="Visual Identity"
          />

          <ProjectCard
            title="Digital Dreams"
            description="A journey through the abstract mind of AI generated art forms."
            img={placeholderImg4}
            category="Digital Art"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
