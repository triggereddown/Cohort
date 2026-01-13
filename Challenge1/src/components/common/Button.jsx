import React from "react";
import { ArrowUpRight } from "lucide-react";

const Button = ({ children }) => {
  return (
    <button className="flex rounded-full border p-2 gap-2 border-orange-600 font-medium">
      {children}
      <ArrowUpRight className="pt-1 text-purple-600 font-bold" size={22} />
    </button>
  );
};

export default Button;
