import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-yellow-800">
      <div className="navbar bg-pink-900 flex justify-around py-4 mb-2">
        {/*1--- We can use a tag to direct them to the links but a tag also reloads
        the page */}
        {/* <a href="/">Home</a>
        <a href="/about">About</a> */}

        {/* 2---So we use link tag provided by router dom ehich doesn'ty reloads the pages */}

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
};

export default Navbar;
