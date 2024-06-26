import { useState } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths";

const products = [
  {
    name: "Sociedades & Poderes",
    description:
      "Análisis legal de una organización, estatutos, modificaciones, representantes con sus debidas facultades y limitaciones, socios y capital.",
    icon: "/taliaicons/sociedadesypoderes.svg",
    link: "#",
    soon: false,
  },
  {
    name: "Perfil Comercial",
    description:
      "Perfilamiento comercial completo con tramos de venta, socios, sociedades en las que participa, activos, deudas, juicios, etc.",
    icon: "/taliaicons/perfilcomercial.svg",
    link: "#",
    soon: false,
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="bg-gray-100/50 py-28 pl-6 pr-9 xl:pb-24 xl:pl-12 xl:pr-14">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-12 font-reddit text-2xl leading-snug text-zinc-800 sm:text-2xl sm:leading-snug">
          Nuestros Productos
        </h1>
        <div
          className="relative overflow-hidden border border-zinc-800 bg-white sm:rounded-3xl sm:px-8 sm:py-8"
          style={{ boxShadow: "10px 10px #3A3A3A" }}
        >
          <div className="grid max-w-6xl grid-cols-1 gap-12 px-6 pb-12 pt-6 lg:grid-cols-6 lg:gap-24 xl:items-start">
            <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:mt-0 lg:flex lg:flex-col lg:space-y-8 xl:grid-cols-1 xl:gap-0">
              {products.map((product, index) => (
                <div key={index} className="">
                  <button
                    className={`flex w-full items-center justify-center space-x-2 border bg-white px-6 py-8 font-reddit sm:items-start sm:justify-start sm:space-x-4 xl:text-xl ${
                      selectedProduct.name === product.name
                        ? "border-zinc-800 text-blue-500 shadow-md"
                        : "border-gray-100"
                    }`}
                    style={
                      selectedProduct.name === product.name
                        ? { boxShadow: "5px 5px #3A3A3A" }
                        : {}
                    }
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <img
                        src={product.icon}
                        className="h-4 w-4 sm:h-8 sm:w-8"
                        alt={product.name}
                      />
                      <span className="text-sm sm:text-center md:text-sm">
                        {product.name}
                      </span>
                    </div>
                  </button>

                  {product.soon && (
                    <div className="absolute right-2 top-2 mr-2 mt-2 hidden rounded-full border border-blue-500 bg-blue-100 px-2 py-1 font-reddit text-xs text-blue-500 sm:block">
                      Pronto
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:col-span-4 lg:mt-4">
              {selectedProduct && (
                <div className="space-y-12">
                  <h3 className="font-reddit text-3xl text-blue-500">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-md mt-2 font-reddit leading-relaxed text-gray-600">
                    {selectedProduct.description}
                  </p>
                  <Link
                    to={RoutePaths.DEMOLEAD}
                    className="text-md mt-12 flex items-center justify-center border border-zinc-800 p-3 font-reddit text-zinc-800 transition-all duration-300 ease-in-out hover:bg-blue-500 lg:mt-12 lg:w-52 lg:p-4"
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
