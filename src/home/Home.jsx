import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import PlansComparative from "../components/PlansComparative";
import PracticeAreas from "../components/PracticeAreas";

export const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <HeroSection />
      <Testimonial />
      <Features />
      <Pricing />
      <PlansComparative />
      <PracticeAreas/>
    </div>
  );
};


export default Home;
