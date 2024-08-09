import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import Maintenance from './pages/Maintenance.jsx';
import { Router } from './general/Router.jsx';
import ScrollToTop from '/ScrollToTop'; // Importa el componente ScrollToTop

export const App = () => {
  const [isMaintenance, setIsMaintenance] = useState(false); // Estado para la página de mantenimiento

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMaintenance(false);
    }, 1000); // Puedes ajustar este tiempo según sea necesario

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Aquí se coloca el componente ScrollToTop */}
      {isMaintenance ? (
        <Maintenance />
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
