import React from "react";
import { Routes, Route } from "react-router-dom"; // Use 'Routes', not 'Router'
import Home from "./pages/Home";
import Button from "./components/common/Button";

const App = () => {
  return (
    <div className="mainDiv">
      {/* Navbar would go here if you had one */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
