import React, { useEffect, useState } from "react";
import axios from "axios";
import AxiosUserCard from "../AxiosUserCard/AxiosUserCard";

const AxiosLearn = () => {
  const [cardData, setCardData] = useState([]);
  const fetchedData = async function () {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    setCardData(response.data);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  const handleCardGenerate = () => {
    fetchedData();
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 flex justify-center">
        Card Generator at a click
      </h1>
      <div className="flex justify-center">
        <button
          className="p-2 bg-blue-500 text-white rounded-md font-bold "
          // onClick={() => {
          //   handleCardGenerate();
          // }}
        >
          Get Data
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4 p-10">
        {cardData.slice(0, 10).map((elem, idx) => {
          return (
            <div className="" key={idx}>
              <AxiosUserCard elem={elem} />
            </div>
          );

          // <h1 key={idx}>{elem.title}</h1>;
        })}
      </div>
    </div>
  );
};

export default AxiosLearn;
