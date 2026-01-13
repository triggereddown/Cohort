import React from "react";
import Button from "../common/Button";
import logo from "../../assets/star.webp";

const Navbar = () => {
  return (
    <div className="  Navbar py-4  flex justify-around text-xl ">
      <div className="flex gap-6">
        <div className="Services pt-2">Services</div>
        <div className="Work pt-2">Work</div>
        <div className="About pt-2">About</div>
      </div>
      <div className="Logo flex gap-2 pt-2 ">
        <div className="img">
          <img className="w-10" src={logo} alt="" />
        </div>
        <div className="logoText text-2xl font-semibold text-purple-600 pt-1">
          TrigguStar
        </div>
      </div>
      <div className="flex gap-4">
        <div className="Careers pt-2">Carreers</div>
        <div className="ContactUs">
          <Button>Click me</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
