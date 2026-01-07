import React, { createContext } from "react";

export const UserDataContext = createContext();

const UserContext = (props) => {
  const user = "Triggu";
  return (
    // Data provided here
    <UserDataContext.Provider value={user}>
      {props.children}
    </UserDataContext.Provider>
  );

  //   ) <div className="contextDiv">

  //     {props.children}</div>;
};

export default UserContext;
