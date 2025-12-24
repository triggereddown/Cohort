import React from "react";
import Button from "../Button/Button";

const Card = (props) => {
  console.log(props);
  return (
    <div className="w-80 bg-[#161b22] p-4 rounded-md m-4 text-center border border-gray-700 shadow-lg">
      <div className="rate bg-emerald-600/20 text-emerald-400 w-16 rounded-md p-1 mb-2 mx-auto text-sm font-semibold">
        {props.users.rate}
      </div>

      <div className="image flex justify-center">
        <img
          className="rounded-full w-24 h-24 object-cover border-2 border-emerald-500"
          src={props.users.image}
          alt={props.users.name}
        />
      </div>

      <div className="name text-2xl font-bold text-gray-100 mt-2">
        {props.users.name}
      </div>

      <div className="role text-lg text-emerald-400">{props.users.role}</div>

      <div className="type text-emerald-300 text-sm font-medium">
        {props.users.type}
      </div>

      <div className="skills flex gap-2 justify-center my-3 flex-wrap">
        {props.users.skills.map(function (elem) {
          return (
            <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-2xl px-3 py-1 text-xs text-emerald-300">
              {elem}
            </div>
          );
        })}
      </div>

      <div className="description text-gray-400 text-sm my-2">
        {props.users.description}
      </div>

      <div className="button flex gap-2 justify-center mt-3 ">
        <Button text="Buy now" />
        <Button text="Explore Baddies" />
      </div>
    </div>
  );
};

export default Card;
