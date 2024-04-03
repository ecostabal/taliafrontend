import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './general/Router.jsx';
import { ScaleLoader } from 'react-spinners';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulación de carga
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <BrowserRouter>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-zinc-900">
          <ScaleLoader color="#eab308" />
        </div>
      ) : (
        <Router />
      )}
    </BrowserRouter>
  );
};
