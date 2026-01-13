import React from "react";
import { ArrowUpRight } from "lucide-react";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-6 py-3 bg-white border border-orange-500 rounded-full hover:shadow-lg  transition-all ${className}`}
    >
      {children}
      <ArrowUpRight className="text-brand-purple" size={28} />
    </button>
  );
};

export default Button;
