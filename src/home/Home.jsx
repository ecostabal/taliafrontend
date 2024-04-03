import React, { useState } from "react";
import HomeHero from "../components/HomeHero";
import SocialMediaLinks from "../components/SocialMediaLinks";
import { UserIcon } from "@heroicons/react/24/outline";

export const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="h-screen max-h-screen overflow-hidden flex items-center justify-center relative w-full">
      <HomeHero />
      <div className="absolute top-1/2 transform -translate-y-1/2 rotate-0 left-[-11rem] md:left-[-9.5rem]">
        <SocialMediaLinks />
      </div>
      <UserIcon
        className="absolute w-6 h-6 text-white top-4 right-4 md:top-8 md:right-8 hover:text-yellow-500 cursor-pointer"
      />
      <img
        src="logoblanco.svg"
        alt="Logo"
        className="absolute top-5 left-4 md:top-8 md:left-8 w-auto h-4 sm:h-5"
      />
      <div className="font-exo2 absolute bottom-4 right-4 md:bottom-8 md:right-8 text-white text-xs uppercase tracking-widest">
        © pucho.dev - {currentYear}
      </div>
    </div>
  );
};

export default Home;
