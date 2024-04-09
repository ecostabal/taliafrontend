import { useState } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const markets = [
  {
    name: "Financiero",
    description: "A través de nuestra plataforma, te facilitamos el estudio legal y situ.",
    icon: "/marketicons/financial.svg",
  },
  {
    name: "Retail",
    description: "A través de nuestra plataforma, te facilitamos el estudio legal y situ.",
    icon: "/marketicons/retail.svg",
  },
  {
    name: "Automotriz",
    description: "A través de nuestra plataforma, te facilitamos el estudio legal y situ.",
    icon: "/marketicons/carsale.svg",
  },
  {
    name: "Aseguradoras",
    description: "A través de nuestra plataforma, te facilitamos el estudio legal y situ.",
    icon: "/marketicons/insurance.svg",
  },
  {
    name: "Telecomunicaciones",
    description: "A través de nuestra plataforma, te facilitamos el estudio legal y situ.",
    icon: "/marketicons/insurance.svg",
  },
];

export default function Markets() {
  return (
    <div className="mx-auto w-full items-center justify-center pt-24 pl-6 pr-9 pb-24 xl:pb-48 xl:pl-12 xl:pr-14">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="font-lora font-light leading-7 text-blue-500">
          Casos de uso.
        </h2>
        <p className="mt-2 font-lora text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
          Aplicable a diferentes mercados.
        </p>
      </div>
      <div className="mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {markets.map((market, index) => (
          <div
            key={index}
            className="flex w-full flex-col space-y-6 items-center border border-zinc-800 bg-white p-8 shadow-md"
            style={{ boxShadow: "10px 10px #3A3A3A" }}
          >
            <img
              src={market.icon}
              className="mx-auto h-12 w-12"
              alt={market.name}
            />
            <h3 className="text-center font-lora text-xl">
              {market.name}
            </h3>
            <p className="text-sm font-lora text-center text-gray-600 leadi leading-loose">{market.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
