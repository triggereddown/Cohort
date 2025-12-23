import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="profileCard bg-amber-900 border border-amber-200 w-50 p-4 rounded-2xl">
        <div className="mainImage w-40 pb-2 rounded-tr-2xl">
          <img
            className="rounded-sm"
            src="https://images.unsplash.com/photo-1655437448735-a10513f37185?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="rating flex justify-between items-center">
          <div className="stars">⭐⭐⭐⭐</div>
          <div className="textRating text-white">5.0(200)</div>
        </div>
        <div className="heroText text-xl text-white font-bold py-2">
          Ben10 Merch For Sale
        </div>
        <div className="priceAndAddToCart flex justify-around items-center text-white font-semibold">
          <div className="price">23$</div>
          <div className="addToCart bg-amber-600 p-1 rounded-sm">
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
