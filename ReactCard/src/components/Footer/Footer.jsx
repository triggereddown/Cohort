import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-red-900 p-4 flex justify-around">
        Footer Component
        <div
          className="cursor-pointer scroll-smooth"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            navigate("/about");
          }}
        >
          About
        </div>
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            navigate("/products");
          }}
        >
          Product
        </div>
      </div>
    </div>
  );
};

export default Footer;
