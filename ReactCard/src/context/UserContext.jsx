import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = (props) => {
  const [user, setUser] = useState("Triggu");

  return (
    // Data provided here
    <UserDataContext.Provider value={[user, setUser]}>
      {props.children}
    </UserDataContext.Provider>
  );

  //   ) <div className="contextDiv">

  //     {props.children}</div>;
};

export default UserContext;
