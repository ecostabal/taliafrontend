import React, { useState } from "react";
import HeroSection from "../components/HeroSection";

export const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default Home;
