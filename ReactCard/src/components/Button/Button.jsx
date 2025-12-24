import React from "react";

const Button = (props) => {
  return (
    <div className="bg-gray-700 text-amber-200 p-2 rounded-sm w-fit ">
      {props.text}
    </div>
  );
};

export default Button;
