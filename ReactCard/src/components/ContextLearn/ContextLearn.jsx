import React, { useContext, useState } from "react";
import { UserDataContext } from "../../context/UserContext";
import { PostDataContext } from "../../context/PostContext";

const ContextLearn = () => {
  const postData = useContext(PostDataContext);
  const [user, setUser] = useContext(UserDataContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Lets learn context from {user}
      </h1>
      <div className="contextChangeButton py-2">
        <button
          onClick={() => {
            setUser("LatestUser");
          }}
          className="bg-blue-800 rounded-md p-2 cursor-pointer"
        >
          Change Context???
        </button>
      </div>
      {/* GRID */}
      <div className="grid grid-cols-3 gap-6 bg-amber-800 p-6 rounded-lg">
        {postData.map((user, idx) => {
          return (
            <div
              key={idx}
              className="bg-amber-700 rounded-lg p-4 flex flex-col gap-3"
            >
              {/* USER */}
              <div className="border-b border-amber-900 pb-2">
                <p className="text-sm">User #{user.id}</p>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm opacity-90">@{user.username}</p>
              </div>

              {/* posts array mapping inside the user array */}
              <div className="flex flex-col gap-3">
                {user.posts.map((post, postIdx) => {
                  return (
                    <div key={postIdx} className="bg-amber-600 rounded-md p-3">
                      <h3 className="font-semibold text-lg">{post.title}</h3>
                      <p className="text-sm">{post.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContextLearn;
