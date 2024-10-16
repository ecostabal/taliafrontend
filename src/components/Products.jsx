import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const productsData = {
  "Asesoría Jurídica": [
    {
      name: "Asesoría Jurídica",
      description:
        "Solicita cotizaciones para servicios legales personalizados, adaptados a las necesidades de tu caso.",
      mockup: "/productsimg/TALIA_AJ.jpg",
    },
  ],
  "Firma Virtual": [
    {
      name: "Firma Virtual",
      description:
        "Firma documentos de manera digital, con total validez jurídica, sin necesidad de desplazarte.",
      mockup: "/productsimg/TALIA_FV.jpg",
    },
  ],
  "Estudio de Poderes": [
    {
      name: "Estudio de Poderes",
      description:
        "Solicita estudios de poderes, obteniendo un informe detallado sobre las facultades de representación de apoderados de sociedades legalmente constituidas.",
      mockup: "/productsimg/TALIA_ESP.jpg",
    },
  ],
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Asesoría Jurídica");
  const [selectedProduct, setSelectedProduct] = useState(
    productsData[selectedCategory][0]
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(productsData[category][0]);
  };

  return (
    <div className="relative isolate flex min-h-[85vh] items-start overflow-hidden bg-white py-24 lg:py-48">
      <img
        src=""
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-5 md:object-center"
      />
      <div className="mx-auto h-full w-full max-w-6xl">
        <h3 className="mt-2 text-center font-reddit text-3xl tracking-tight text-zinc-800 sm:text-4xl">
          Nuestros Productos
        </h3>
        <div className="mt-12 flex justify-center">
          <div className="flex rounded-md bg-gray-50 p-1.5">
            {Object.keys(productsData).map((category) => (
              <button
                key={category}
                className={`rounded-md px-6 py-2 font-reddit text-xs transition-all ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "text-gray-600"
                } ${selectedCategory === category ? "animate-fade-in" : ""}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-16 flex h-full flex-wrap px-6 xl:px-0">
          <div className="mb-8 flex w-full flex-col justify-start sm:px-0 lg:mb-0 lg:w-6/12 lg:pr-12">
            <div className="flex flex-col gap-4">
              {productsData[selectedCategory].map((product) => (
                <div
                  key={product.name}
                  className={`rounded-md p-6 ${
                    selectedProduct.name === product.name
                      ? "border-gray-200 bg-gray-50"
                      : "border border-white bg-none"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <h3 className="font-reddit text-lg font-semibold text-blue-500">
                      {product.name}
                    </h3>
                  </div>
                  <p className="mt-2 font-reddit text-gray-600">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 flex h-[400px] w-full flex-col items-center justify-center lg:mt-0 lg:w-6/12">
            <TransitionGroup component={null}>
              <CSSTransition
                key={selectedProduct.mockup}
                timeout={500}
                classNames="fade"
              >
                <img
                  src={selectedProduct.mockup}
                  alt={selectedProduct.name}
                  className="absolute inset-0 h-full w-full rounded-md object-contain transition-opacity duration-500 ease-in-out"
                />
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
