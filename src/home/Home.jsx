import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Screenshot from "../components/Screenshot";
import Products from "../components/Products";
import Markets from "../components/Markets";

export const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <HeroSection />
      <Products />
    </div>
  );
};

export default Home;
