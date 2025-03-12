import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Specials from "../components/Specials";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Specials/>
      <Cards/>
    </div>
  );
};

export default Home;
