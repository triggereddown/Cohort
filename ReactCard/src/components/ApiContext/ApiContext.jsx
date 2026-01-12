import React from "react";
import axios from "axios";

const ApiContext = () => {
  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
  };
  return (
    <div>
      <div className="maindiv">Lets learn api use in context</div>
      <div>
        <button onClick={getData}>Get Data</button>
      </div>
    </div>
  );
};

export default ApiContext;
