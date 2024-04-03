import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../general/RoutePaths'; // Importa RoutePaths correctamente
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="lg:mt-0">
          <h1 className="text-3xl sm:text-5xl text-zinc-800 font-lora sm:leading-snug">Mejora el proceso de <span className="text-blue-500 font-semibold">automatización de documentos.</span></h1>
          <Link to={RoutePaths.DEMOLEAD} className="rounded-full mt-12 lg:mt-12 font-lora text-md border border-zinc-800 text-zinc-800 p-3 lg:p-4 hover:bg-zinc-800 hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out lg:w-52">
            <span>Solicitar Demo</span>
            <ArrowLongRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="lg:mt-4">
          <img src="/imagenprueba.png" alt="" />
        </div>
      </div>
    </div>
  )
}
