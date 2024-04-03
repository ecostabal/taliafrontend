import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Screenshot from "../components/Screenshot";

export const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <HeroSection />
      <Features />
      <Screenshot />
    </div>
  );
};

export default Home;
