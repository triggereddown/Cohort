import React, { createContext } from "react";

export const PostDataContext = createContext();

const userPostData = [
  {
    id: 1,
    name: "Aman Sharma",
    username: "aman_01",
    posts: [
      {
        postId: 101,
        title: "Learning React",
        content: "Started learning React hooks and state management today.",
      },
      {
        postId: 102,
        title: "Tailwind CSS",
        content: "Tailwind makes styling so much faster and cleaner.",
      },
    ],
  },
  {
    id: 2,
    name: "Riya Gupta",
    username: "riya_codes",
    posts: [
      {
        postId: 103,
        title: "DSA Practice",
        content: "Solved prefix sum problems today. Feeling confident!",
      },
    ],
  },
  {
    id: 3,
    name: "Karan Verma",
    username: "karan_dev",
    posts: [
      {
        postId: 104,
        title: "JavaScript Basics",
        content: "Revised closures and promises.",
      },
      {
        postId: 105,
        title: "Async Await",
        content: "Async-await feels much cleaner than then-catch.",
      },
    ],
  },
  {
    id: 4,
    name: "Sneha Patel",
    username: "sneha_ui",
    posts: [
      {
        postId: 106,
        title: "UI Design",
        content: "Working on card layouts and spacing today.",
      },
    ],
  },
  {
    id: 5,
    name: "Rahul Singh",
    username: "rahul_builds",
    posts: [
      {
        postId: 107,
        title: "Placement Prep",
        content: "Revising OS and DBMS concepts.",
      },
      {
        postId: 108,
        title: "Mock Interviews",
        content: "Did a mock interview focused on React today.",
      },
    ],
  },
];

const PostContext = (props) => {
  return (
    <PostDataContext.Provider value={userPostData}>
      {props.children}
    </PostDataContext.Provider>
  );
};

export default PostContext;
