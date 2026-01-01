import React, { useEffect, useState } from "react";
import axios from "axios";
import AxiosUserCard from "../AxiosUserCard/AxiosUserCard";

const AxiosLearn = () => {
  //Pokemon card api test with useEffect
  const [randomUser, setRandomUser] = useState("");
  const [counter, setCounter] = useState(0);

  const getUserData = async () => {
    const response1 = await axios.get("https://randomuser.me/api/");

    console.log(
      response1.data.results[0].name.first +
        " " +
        response1.data.results[0].name.last
    );
    setRandomUser(
      response1.data.results[0].name.first +
        " " +
        response1.data.results[0].name.last
    );
  };

  useEffect(() => {
    getUserData();
  }, [counter]);

  const [title, setTitle] = useState([]);

  //use effect jiska kaam hai jab bhi title change ho to console me ek baar print kar de
  // useEffect(() => {
  //   console.log("usefeect");
  // }, [title]);

  const [cardData, setCardData] = useState([]);
  const fetchedData = async function () {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    setCardData(response.data);
  };

  //use effect lagaya taaki jab bhi website load ho to data render kar de
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

      <div>
        <input
          className="border-2 border-gray-300 p-2 rounded-md w-1/2 mx-auto block"
          value={title}
          type="text"
          placeholder="type title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <h1 className="text-center py-2">{title}</h1>
      </div>

      {/* useffect project */}
      <div className="pt-4">
        <div className="flex justify-center">
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
            className="p-2 bg-green-500 text-white rounded-md font-bold"
          >
            Get Random User
          </button>
        </div>
        <div>
          <h1 className="text-xl text-center text-amber-700 font-bold">
            {counter}
          </h1>
        </div>
        <div>
          <h1 className="text-2xl text-center text-amber-500 font-bold">
            {randomUser}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AxiosLearn;
