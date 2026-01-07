import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../context/UserContext";

const Footer = () => {
  const contextData = useContext(UserDataContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-red-900 p-4 flex justify-around">
        Footer Component
        {/* <div>This is from the context data:{contextData}</div> */}
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
