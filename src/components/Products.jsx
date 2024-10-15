import React, { useState, useEffect } from "react";

const productsData = {
  "Asesoría Jurídica": [
    {
      name: "Asesoría Jurídica",
      description:
        "Solicita cotizaciones para servicios legales personalizados, adaptados a las necesidades de tu caso.",
      mockup: "/",
    },
  ],
  "Firma Virtual": [
    {
      name: "Firma Virtual",
      description:
        "Firma documentos de manera digital, con total validez jurídica, sin necesidad de desplazarte.",
      mockup: "/",
    },
  ],
  "Estudio de Poderes": [
    {
      name: "Estudio de Poderes",
      description:
        "Solicita estudios de poderes, obteniendo un informe detallado sobre las facultades de representación de apoderados de sociedades legalmente constituidas.",
      mockup: "/",
    },
  ],
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Asesoría Jurídica");
  const [selectedProduct, setSelectedProduct] = useState(
    productsData[selectedCategory][0]
  );
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Cargar el archivo JSON desde la carpeta public
    fetch(selectedProduct.mockup)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, [selectedProduct.mockup]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(productsData[category][0]);
  };

  return (
    <div className="relative isolate flex min-h-[85vh] items-start overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
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
          <div className="flex bg-gray-50 p-1.5">
            {Object.keys(productsData).map((category) => (
              <button
                key={category}
                className={`px-6 py-2 font-reddit text-xs transition-all ${
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
        <div className="mt-16 flex h-full flex-wrap">
          <div className="mb-8 flex w-full flex-col justify-start px-6 sm:px-0 lg:mb-0 lg:w-5/12 lg:pr-12">
            <div className="flex flex-col gap-4">
              {productsData[selectedCategory].map((product) => (
                <div
                  key={product.name}
                  className={`p-6 ${
                    selectedProduct.name === product.name
                      ? "  border-gray-200 bg-gray-50"
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
          <div className="mt-8 flex w-full flex-col items-center justify-center rounded-3xl px-6 lg:mt-0 lg:w-7/12">
            {animationData && (
              <Lottie
                animationData={animationData}
                loop
                className="rounded-md object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
