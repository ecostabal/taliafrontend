import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import { Router } from './general/Router.jsx';
import { PuffLoader } from 'react-spinners';

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <PuffLoader color="#4F68EE" />
  </div>
);

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Mostrar el loader por al menos 1 segundo

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Router />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};
