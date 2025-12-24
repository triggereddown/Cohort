import React from "react";

const Button = (props) => {
  return (
    <div className="bg-gray-700 text-amber-200 p-2 rounded-sm w-fit hover:cursor-pointer hover:bg-emerald-500/10 border hover:border-emerald-500/40 hover:text-emerald-400">
      {props.text}
    </div>
  );
};

export default Button;
