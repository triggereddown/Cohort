import React from "react";

const Profile = () => {
  return (
    <div>
      {/* <div className="profileCard bg-amber-900 border border-amber-200 w-50 p-4 rounded-2xl">
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
      </div> */}

      <div className="min-h-screen flex items-center justify-center bg-[#0d1117]">
        <div className="w-80 bg-[#161b22] rounded-2xl shadow-xl p-6 text-center border border-gray-700 hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1655437448735-a10513f37185?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-purple-500"
          />

          <h2 className="mt-4 text-xl font-semibold text-white">
            Kaju Kishmish
          </h2>

          <p className="text-sm text-gray-400">Frontend & AI Enthusiast</p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["React", "Tailwind", "ML", "UI/UX"].map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 border border-purple-500/30"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <a
              href="#"
              className="px-4 py-2 text-sm rounded-lg bg-purple-600 text-white hover:bg-purple-700"
            >
              Follow
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
