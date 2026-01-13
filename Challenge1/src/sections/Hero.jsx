import React from "react";
import { Sparkles } from "lucide-react";
import Button from "../components/common/Button";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";

const Hero = () => {
  return (
    <section className="relative pt-10 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <p className="text-gray-500 mb-6 text-lg font-medium">
        Igniting the Spark of Inspiration
      </p>

      <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1.1] z-10 relative">
        Unleash Your <br />
        Brand
        <span className="inline-flex items-center justify-center align-middle mx-3 bg-gradient-to-tr from-orange-400 to-red-400 w-16 h-16 rounded-full">
          <Sparkles className="text-white w-10 h-10" fill="currentColor" />
        </span>
        with Our <br />
        <span className="relative inline-block mt-2">
          <span className="bg-brand-yellow px-6 py-1 rounded-lg transform -rotate-2 inline-block text-brand-purple font-medium shadow-sm">
            Magico
          </span>
        </span>{" "}
        Design
      </h1>

      <div className="hidden lg:block absolute left-20 top-1/2 -translate-y-1/2 -z-10 w-72 transform -rotate-8 inline-block">
        <img
          src={image1}
          alt="Creative 3D shape"
          className="w-full h-auto object-contain animate-float-slow rounded-2xl"
        />
      </div>

      <div className="hidden lg:block absolute right-20 bottom-10 -z-10 w-72">
        <img
          src={image2}
          alt="Creative 3D house"
          className="w-full h-auto object-contain animate-float-delayed"
        />
      </div>

      <div className="mt-12 flex items-center gap-4 ">
        <Button className="rounded-full border-gray-300 px-12 py-5 text-2xl">
          Create Magic
        </Button>

        <button className="bg-[#7F27FF] hover:bg-[#6b21d6] text-white w-14 h-14 rounded-full flex items-center justify-center transition-colors shadow-lg cursor-pointer">
          <Sparkles size={28} fill="currentColor" />
        </button>
      </div>

      <div className="absolute top-0 right-0 hidden md:flex flex-col items-end gap-2">
        <div className="bg-[#7F27FF] text-white px-4 py-2 rounded-full text-sm">
          Veni vidi vici, 25
        </div>
        <div className="bg-[#7F27FF] text-white px-4 py-2 rounded-full text-sm">
          2025 Triggu
        </div>
      </div>
    </section>
  );
};

export default Hero;
