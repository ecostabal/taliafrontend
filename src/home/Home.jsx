import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import Products from "../components/Products";
import Pricing from "../components/Pricing";
import UISection from "../components/UISection";
import FAQ from "../components/FAQ";

export const Home = () => {

  return (
    <div>
      <HeroSection />
      <Testimonial />
      <Products />
      <Pricing />
      <UISection />
      <FAQ />
    </div>
  );
};


export default Home;
