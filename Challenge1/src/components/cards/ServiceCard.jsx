import React from "react";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ title, description, img }) => {
  return (
    <div className="group relative w-[360px] p-8 rounded-[2.5rem] border border-purple-600 bg-white transition-all duration-500 hover:bg-[#7F27FF] hover:text-white overflow-hidden flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <h1 className="font-normal text-3xl max-w-[150px] leading-tight z-10">
          {title}
        </h1>

        <div className="bg-[#7F27FF] text-white p-3 rounded-full transition-all duration-300 group-hover:opacity-0 group-hover:scale-0">
          <ArrowUpRight size={52} />
        </div>
      </div>
      <div className="w-full h-[1px] bg-purple-600 my-6 transition-colors duration-500 group-hover:bg-white"></div>
      <p className="text-gray-500 mb-8 leading-relaxed transition-colors duration-300 group-hover:text-purple-100 z-10">
        {description}
      </p>

      <div className="relative mt-auto">
        <img
          className="w-full h-48 object-cover rounded-2xl"
          src={img}
          alt={title}
        />

        <div className="absolute bottom-0 left-0 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-4 group-hover:opacity-100">
          <div className="bg-white text-[#7F27FF] p-4 rounded-full shadow-lg">
            <ArrowUpRight size={52} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
