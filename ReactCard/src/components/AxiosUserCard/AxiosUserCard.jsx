import React from "react";

const AxiosUserCard = ({ elem }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4 border border-gray-100 ">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-500">#{elem.id}</span>

        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full
            ${
              elem.completed
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
        >
          {elem.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <p className="text-gray-800 text-base leading-snug">{elem.title}</p>
    </div>
  );
};

export default AxiosUserCard;
