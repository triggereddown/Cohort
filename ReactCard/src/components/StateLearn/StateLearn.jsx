import React, { useState } from "react";

const StateLearn = () => {
  const handleIncrease = function () {
    setNum(num + 1);
  };

  const handleDecrease = () => {
    setNum(num - 1);
  };
  const [num, setNum] = useState(0);
  //first num is a read only value
  //second setNum is a function to update the value of num
  return (
    <div>
      <h1>{num}</h1>
      <button
        onClick={handleIncrease}
        className="bg-blue-700 p-4 rounded-2xl font-medium text-white"
      >
        Increase
      </button>
      <button
        className="bg-blue-700 p-4 rounded-2xl font-medium text-white"
        onClick={handleDecrease}
      >
        Decrease
      </button>
    </div>
  );
};

export default StateLearn;
