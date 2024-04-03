import React, { useState } from "react";

export const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="h-screen max-h-screen overflow-hidden flex items-center justify-center relative w-full">
We are Talia!
    </div>
  );
};

export default Home;
