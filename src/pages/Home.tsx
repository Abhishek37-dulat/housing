import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ThreeSteps from "../components/ThreeSteps";

const Home = () => {
  return (
    <div className="w-full px-4">
      <Navbar />
      <Header />
      <ThreeSteps />
    </div>
  );
};

export default Home;
