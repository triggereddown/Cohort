import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold py-6">
          Welcome to Triggu's Home Page
        </h1>
        <div>
          <button
            onClick={() => {
              navigate("/products");
            }}
            className="bg-emerald-600 p-2 rounded-md"
          >
            Explore Saas Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
