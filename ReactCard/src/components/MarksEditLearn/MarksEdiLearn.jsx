import React, { useState } from "react";

const MarksEdiLearn = () => {
  const [marks, setMarks] = useState([56, 87, 76, 88, 65]);
  const giveGraceHandler = () => {
    const newMarks = marks.map((elem, idx) => {
      return elem + 5;
    });

    console.log(newMarks);
    setMarks(newMarks);
  };
  return (
    <div>
      <div className="marks">
        {marks.map((elem, idx) => {
          return (
            <h1 key={idx}>
              Student {idx + 1}={elem}
            </h1>
          );
        })}
      </div>
      <div className="button p-2 bg-gray-300 font-bold w-25 rounded-2xl">
        <button onClick={giveGraceHandler}>GiveGrace</button>
      </div>
    </div>
  );
};

export default MarksEdiLearn;
