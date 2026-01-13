import React from "react";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, img, category = "Design" }) => {
  return (
    <div className="w-full max-w-[1000px]">
      <div className="group relative w-full h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={img}
          alt={title}
        />

        <div className="absolute top-6 right-6">
          <div className="bg-white text-black p-4 rounded-full transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={28} />
          </div>
        </div>

        <div className="absolute bottom-12 left-6 ">
          <span className="bg-white   px-6 py-2 rounded-full text-3xl font-medium text-black">
            {category}
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="text-4xl font-medium text-brand-purple">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
