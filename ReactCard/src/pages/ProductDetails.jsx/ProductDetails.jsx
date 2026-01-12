import React, { useContext } from "react";
import { ProductDataContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);
  const askedProductId = useParams();

  const askedProductDetails = productData.find(
    (elem) => askedProductId.id == elem.id
  );

  if (!askedProductDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <img
                className="w-72 object-contain"
                src={askedProductDetails.image}
                alt={askedProductDetails.title}
              />
            </div>

            <div className="flex gap-8 bg-gray-800 px-6 py-4 rounded-xl">
              <div className="text-center">
                <p className="text-sm text-gray-400">Rating</p>
                <h2 className="text-2xl font-semibold text-emerald-400">
                  {askedProductDetails.rating.rate}
                </h2>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Reviews</p>
                <h2 className="text-2xl font-semibold">
                  {askedProductDetails.rating.count}
                </h2>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block text-xs uppercase tracking-wide bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full mb-3">
                {askedProductDetails.category}
              </span>
              <h1 className="text-3xl font-bold leading-tight">
                {askedProductDetails.title}
              </h1>
            </div>

            <div className="text-4xl font-bold text-emerald-400">
              ${askedProductDetails.price}
            </div>

            <p className="text-gray-400 leading-relaxed">
              {askedProductDetails.description}
            </p>

            <div className="flex gap-4 mt-4">
              <button className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition font-semibold">
                Buy Now
              </button>
              <button className="px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
