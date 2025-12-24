import React from "react";
import Button from "../Button/Button";

const Card = (props) => {
  console.log(props);
  return (
    <div className=" w-50 bg-amber-900 p-6 rounded-md m-4">
      <div className="flex">
        {props.user}
        <span className="px-2"></span>
        {props.age}
      </div>
      <div className="button">
        <Button text="Buy now" />
        <Button text="Explore Baddies" />
      </div>
    </div>
  );
};

export default Card;
