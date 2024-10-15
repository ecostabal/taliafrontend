import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths";
import {
  ArrowLongRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Lottie from "lottie-react";

export default function HeroSection() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Cargar el archivo JSON de animación desde el directorio public
    fetch("/TALIA-ANIMACION.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => {
        console.error("Error loading animation:", error);
      });
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 xl:px-0 xl:pt-24">
      <div className="grid grid-cols-1 items-center gap-32 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="flex items-center space-x-2">
            <div className="font-lora flex items-center rounded-full border border-blue-500 bg-blue-100 px-3 py-1 text-xs text-blue-500">
              <ShieldCheckIcon className="mr-1 h-4 w-4" />
              <p className="font-reddit">
                Plataforma{" "}
                <span className="font-semibold">Online y Segura</span>
              </p>
            </div>
          </div>
          <h1 className="font-reddit text-3xl font-normal leading-snug text-zinc-800 sm:text-3xl sm:leading-snug">
            <span className="font-semibold text-blue-500">
              Simplifica tus gestiones legales
            </span>{" "}
            con nuestro software de trabajo en tiempo real.
          </h1>
          <p className="font-reddit text-zinc-600">
            Somos la primera plataforma que te brinda las herramientas, el
            soporte y los recursos que necesitas para enfrentar tus desafíos
            legales con éxito.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to={RoutePaths.CONTACTANOS}
              className="sm:text-md flex items-center justify-center bg-blue-500 px-8 py-4 font-reddit text-sm text-white transition-all duration-300 ease-in-out hover:bg-blue-500"
              style={{ transition: "box-shadow 0.3s", boxShadow: "none" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "5px 5px #3A3A3A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>Contáctanos</span>
              <ArrowLongRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="-mt-12 sm:mt-0">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  );
}
