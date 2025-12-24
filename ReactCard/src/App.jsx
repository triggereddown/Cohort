import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Card from "./components/Card/Card";

const App = () => {
  const users = ["Trigger", "Puttan", "Ravi", "Kishor"];

  return (
    <div className="text-red-500">
      App
      <Navbar />
      {/* <Profile /> */}
      {/* Rendering 2 components of same type  */}
      <div className="flex justify-center ">
        {/* <Card user="Trigger" age="50" />
        <Card user="Puttan" age="40" /> */}

        {users.map(function (elem) {
          return <Card user={elem} />;
        })}
      </div>
    </div>
  );
};

export default App;
