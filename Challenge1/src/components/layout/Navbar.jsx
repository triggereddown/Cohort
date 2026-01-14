import React from "react";
import Button from "../common/Button";
import logo from "../../assets/star.webp";

const Navbar = () => {
  const onClickHandler = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`"${id}" not found.`);
    }
  };

  return (
    <div className="Navbar py-6 px-4 flex flex-col md:flex-row justify-between items-center text-lg md:text-xl gap-6 md:gap-0 max-w-7xl mx-auto">
      <div
        className="Logo flex gap-2 cursor-pointer order-1 md:order-2"
        onClick={() => onClickHandler("top")}
      >
        <div className="img">
          <img className="w-8 md:w-10" src={logo} alt="Logo" />
        </div>
        <div className="logoText text-2xl font-semibold text-purple-600 pt-1">
          TrigguStar
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 order-2 md:order-1">
        <div
          className="hover:text-purple-600 transition-colors cursor-pointer"
          onClick={() => onClickHandler("services")}
        >
          Services
        </div>
        <div
          className="hover:text-purple-600 transition-colors cursor-pointer"
          onClick={() => onClickHandler("projects")}
        >
          Work
        </div>
        <div
          className="hover:text-purple-600 transition-colors cursor-pointer"
          onClick={() => onClickHandler("footer")}
        >
          Motive
        </div>
      </div>

      <div className="flex items-center gap-6 order-3">
        <div className="hidden md:block cursor-pointer hover:text-purple-600">
          Careers
        </div>
        <div className="ContactUs">
          <Button>Click me</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
