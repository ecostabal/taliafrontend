import React from "react";
import { Link } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths"; // Importa RoutePaths correctamente
import {
  ArrowLongRightIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-6xl pt-12 pb-24 xl:pt-24 xl:pb-48 px-6 xl:px-0">
      <div className="grid grid-cols-1 items-center gap-32 lg:grid-cols-2">
        <div className="space-y-12">
          <div className="flex items-center space-x-2">
            <p className="flex items-center rounded-full border border-blue-500 bg-blue-100 px-3 py-1 font-lora text-xs text-blue-500">
              <ShieldCheckIcon className="mr-1 h-4 w-4" />
              <p>Software <span className="font-semibold">100% Online y Seguro</span></p>
            </p>
          </div>
          <h1 className="font-lora text-3xl text-zinc-800 sm:text-4xl leading-snug sm:leading-snug">
            Minimiza riesgos y toma decisiones seguras{" "}
            <span className="font-semibold text-blue-500">
              mediante nuestra tecnología de análisis.
            </span>
          </h1>
          <div className="flex items-center gap-4">
            <Link
              to={RoutePaths.DEMOLEAD}
              className="text-xs sm:text-lg flex items-center justify-center rounded-full border border-zinc-800 p-3 font-lora text-zinc-800 transition-all duration-300 ease-in-out hover:bg-blue-500 w-44 xl:w-52 lg:p-4"
              style={{ transition: "box-shadow 0.3s", boxShadow: "none" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "5px 5px #3A3A3A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>Solicitar Demo</span>
              <ArrowLongRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="/"
              className="text-xs sm:text-lg flex items-center justify-center rounded-full border border-white p-3 font-lora text-zinc-800 transition-all duration-300 ease-in-out hover:text-blue-500 lg:p-4"
            >
              Ver Tutorial
              <VideoCameraIcon className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="-mt-12 sm:mt-0">
          <img src="/illustration.png" alt="" />
        </div>
      </div>
    </div>
  );
}
