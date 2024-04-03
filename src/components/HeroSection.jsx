import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../general/RoutePaths'; // Importa RoutePaths correctamente
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="mt-6">
          <h1 className="text-5xl font-lora leading-normal">Mejora el proceso de automatización de documentos.</h1>
          <Link to={RoutePaths.HOME} className="mt-12 font-lora text-md border border-zinc-900 text-zinc-900 p-4 hover:bg-zinc-900 hover:text-white flex items-center justify-center transition-all duration-300 ease-in-out w-52">
          <span>Conocer Más</span>
          <ArrowLongRightIcon className="ml-2 h-4 w-4" />
          </Link>        
        </div>
        <div>
          <img src="/Report.png" alt="" />
        </div>
      </div>
    </div>
  )
}
