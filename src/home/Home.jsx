import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Screenshot from "../components/Screenshot";

export const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <HeroSection />
      <Screenshot />
    </div>
  );
};

export default Home;
