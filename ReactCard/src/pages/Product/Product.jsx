import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductDataContext } from "../../context/ProductContext";

const Product = () => {
  const productData = useContext(ProductDataContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Products</h1>
        <p className="text-gray-400 mt-2">
          Explore our curated collection of modern SaaS-ready products
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productData.map((elem, idx) => {
          return (
            <Link key={idx} to={`/products/${elem.id}`}>
              <div className="bg-gray-900 rounded-2xl p-5 h-full border border-gray-800 hover:border-emerald-500 transition group cursor-pointer shadow-md hover:shadow-emerald-500/10">
                {/* Image */}
                <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-center mb-4">
                  <img
                    src={elem.image}
                    alt={elem.title}
                    className="h-40 object-contain group-hover:scale-105 transition"
                  />
                </div>

                {/* Title */}
                <h2 className="text-sm font-semibold leading-snug line-clamp-2">
                  {elem.title}
                </h2>

                {/* Price */}
                <div className="mt-3 text-emerald-400 font-bold text-lg">
                  ${elem.price}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <button
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold transition shadow-lg shadow-emerald-600/20"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navigate("/products/:id");
          }}
        >
          Explore Products
        </button>
      </div>
    </div>
  );
};

export default Product;
