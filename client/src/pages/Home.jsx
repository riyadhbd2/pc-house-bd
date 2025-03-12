import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Specials from "../components/Specials";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Specials/>
    </div>
  );
};

export default Home;
