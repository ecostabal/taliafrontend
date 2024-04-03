import React, { useState } from "react";
import Header from "/src/components/Header"
import HeroSection from "../components/HeroSection";

export const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;
