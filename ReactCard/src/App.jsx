import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <div className="text-red-500">
      App
      <Navbar />
      {/* <Profile /> */}
      {/* Rendering 2 components of same type  */}
      <Card user="Trigger" age="50" />
      <Card user="Puttan" age="40" />
    </div>
  );
};

export default App;
