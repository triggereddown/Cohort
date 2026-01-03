import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Card from "./components/Card/Card";
import StateLearn from "./components/StateLearn/StateLearn";
import MarksEdiLearn from "./components/MarksEditLearn/MarksEdiLearn";
import TwoWayBinding from "./components/TwoWayBinding/TwoWayBinding";
import ContactGeneratorProjectClassSix from "./components/ContactGeneratorProjectClassSix/ContactGeneratorProjectClassSix";
import TodoCrdProject from "./components/TodoCardProject/TodoCrdProject";
import AxiosLearn from "./components/AxiosLearn/AxiosLearn";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const users = [
    {
      id: 1,
      name: "Bruce Wayne",
      role: "Tech Strategist",
      rate: "$120/hr",
      type: "Freelancer",
      skills: ["AI", "Security", "React", "+2"],
      description:
        "Bruce focuses on building secure and intelligent systems for large scale operations.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Selina Kyle",
      role: "Mobile Designer",
      rate: "$45/hr",
      type: "Freelancer",
      skills: ["Android", "iOS", "Figma", "+1"],
      description:
        "Selina designs sleek and intuitive mobile experiences with a minimalist approach.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Lucius Fox",
      role: "Backend Architect",
      rate: "$80/hr",
      type: "Freelancer",
      skills: ["Node", "Cloud", "APIs", "+3"],
      description:
        "Lucius specializes in scalable backend systems and infrastructure design.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Barbara Gordon",
      role: "Data Analyst",
      rate: "$60/hr",
      type: "Freelancer",
      skills: ["Python", "ML", "Analytics", "+2"],
      description:
        "Barbara works on data driven insights and machine learning based analysis.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Dick Grayson",
      role: "Frontend Developer",
      rate: "$38/hr",
      type: "Freelancer",
      skills: ["React", "Tailwind", "UI", "+1"],
      description:
        "Dick builds responsive and interactive user interfaces for web applications.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Harvey Dent",
      role: "Product Manager",
      rate: "$55/hr",
      type: "Freelancer",
      skills: ["Agile", "UX", "Planning", "+2"],
      description:
        "Harvey manages product roadmaps and aligns business goals with technology.",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 7,
      name: "Edward Nygma",
      role: "Algorithm Engineer",
      rate: "$70/hr",
      type: "Freelancer",
      skills: ["DSA", "Logic", "AI", "+3"],
      description:
        "Edward enjoys solving complex algorithmic and optimization problems.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      name: "Pamela Isley",
      role: "Data Scientist",
      rate: "$65/hr",
      type: "Freelancer",
      skills: ["NLP", "Statistics", "Python", "+2"],
      description:
        "Pamela builds predictive models and works on intelligent data systems.",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 9,
      name: "Jason Todd",
      role: "DevOps Engineer",
      rate: "$50/hr",
      type: "Freelancer",
      skills: ["AWS", "Docker", "CI/CD", "+1"],
      description:
        "Jason ensures smooth deployments and reliable system operations.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 10,
      name: "Alfred Pennyworth",
      role: "System Consultant",
      rate: "$40/hr",
      type: "Freelancer",
      skills: ["IT Support", "Security", "Ops", "+2"],
      description:
        "Alfred provides dependable system consulting and operational guidance.",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];

  return (
    <div className="text-white text-center font-bold bg-gray-950">
      App
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Navbar /> */}
      {/* <Profile /> */}
      {/* Rendering 2 components of same type  */}
      {/* <div className="min-h-screen flex items-center justify-center">
        {/* <Card user="Trigger" age="50" />
        <Card user="Puttan" age="40" /> */}
      {/* <div className="grid grid-cols-3 ">
          {users.map(function (elem) {
            return <Card users={elem} key={elem.id} />;
          })}
        </div>
      </div> */}
      {/* <StateLearn />
      <MarksEdiLearn /> */}
      {/* <TwoWayBinding /> */}
      <ContactGeneratorProjectClassSix />
      {/* <TodoCrdProject /> */}
      <AxiosLearn />
    </div>
  );
};

export default App;

// Learning Points:
// users →  array of 10 objects

// .map() → loops over the array one object at a time

// elem → represents one user object from the array

// <Card users={elem} /> → sends that object to the Card component as a prop
// use props.name or props.age ONLY IF you pass them individually from the parent component.

// <Card name="Bruce Wayne" age={35} />
