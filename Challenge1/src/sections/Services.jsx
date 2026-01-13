import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ServiceCard from "../components/cards/ServiceCard";
import ServiceImage from "../assets/img3.png";
import Arrow from "../assets/arrow.webp";
import star from "../assets/star.webp";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 border border-gray-500 m-8 rounded-3xl">
      <div className="mb-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h1 className="text-5xl font-medium tracking-tight">Our Services</h1>
          <p className="text-gray-500 max-w-sm text-right mt-4 md:mt-0">
            Discover a wide range of opportunities through a comprehensive range
            of qualified services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
          <ServiceCard
            title="Motion Graphics"
            description="Bring your ideas to life through dynamic visuals and engaging animations."
            img={ServiceImage}
          />
          <ServiceCard
            title="3D Design"
            description="Crafting immersive three-dimensional worlds for your brand."
            img={ServiceImage}
          />
          <ServiceCard
            title="Visual Identity"
            description="Building strong visual identities that resonate with audiences."
            img={ServiceImage}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button className="text-gray-400 hover:text-black transition">
              <ArrowLeft size={24} />
            </button>
            <button className="text-black">
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="flex gap-2">
            <div className="w-12 h-0.5 bg-black"></div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
          </div>
        </div>
      </div>

      <div className=" text-center max-w-5xl mx-auto">
        <div className="uppercase text-xs text-gray-400 tracking-widest mb-6">
          — About Astratto
        </div>

        <h2 className="text-4xl md:text-6xl font-normal leading-tight text-gray-900">
          <span>
            <img
              className="w-16 h-auto inline-block align-middle mr-2"
              src={Arrow}
              alt="decoration"
            />
          </span>
          Our <span className="text-gray-400">visionary</span>{" "}
          <span className="text-orange-500">artisans</span> collaborate{" "}
          <span className="text-purple-600">seamlessly</span> to craft{" "}
          <span className="bg-purple-600 text-white rounded-full p-1 inline-flex items-center justify-center align-middle mx-1 w-10 h-10">
            <img src={star} alt="sparkle" className="w-6 invert brightness-0" />
          </span>{" "}
          inspiring <span className="text-gray-400">experiences</span>,{" "}
          <span className="text-orange-500">leaving</span> lasting{" "}
          <span className="text-gray-300">imprints</span> on{" "}
          <span className="text-purple-600">brands</span> and spaces.{" "}
          <span>
            <img
              className="w-12 inline-block align-bottom ml-2 rotate-12"
              src={star}
              alt="star"
            />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Services;
