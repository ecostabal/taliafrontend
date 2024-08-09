import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../general/RoutePaths'; // Importa RoutePaths correctamente
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";


const NotFound = () => {
  return (
    <div className="h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center">
      <p className="font-lora text-xl mb-6">¡Ups! Nada por aquí.</p>
      <div className="flex justify-center">
        <Link to={RoutePaths.HOME} className="font-lora text-md border border-zinc-900 text-zinc-900 p-4 hover:bg-zinc-900 hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out w-52">
          <span>Volver al Inicio</span>
          <ArrowLongRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
