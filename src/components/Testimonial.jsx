import { useState, useEffect } from "react";

export default function Testimonial() {
  const slides = [
    {
      title: "Misión",
      text: "Proveer una plataforma tecnológica que simplifique y automatice los procesos legales, ayudando a abogados y empresas a gestionar sus necesidades jurídicas de manera eficiente, segura y accesible.",
      author: "Misión",
    },
    {
      title: "Visión",
      text: "Ser la solución digital líder en el sector legal, transformando la gestión jurídica con innovación, eficiencia y confianza.",
      author: "Visión",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setIsFading(false);
    }, 500); // El tiempo de difuminación
  };

  return (
    <div className="bg-white py-16 sm:py-12">
      <div className="mx-auto max-w-6xl px-6 xl:px-0 xl:pt-24">
        <div className="relative overflow-hidden rounded-md bg-gray-900 shadow-xl sm:rounded-3xl">
          {/* Fondo e imágenes */}
          <img
            alt=""
            src="https://images.unsplash.com/photo-1674918732025-02d6639e5b1a?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover opacity-40 brightness-150 saturate-0"
          />
          <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />

          {/* Manchas azuladas */}
          <div
            aria-hidden="true"
            className="absolute -left-80 -top-56 transform-gpu blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#7775D6] to-[#776fff] opacity-[0.45]"
            />
          </div>

          {/* Contenido del slider */}
          <div className="relative mx-auto h-[400px] px-6 py-24 sm:h-[350px] sm:px-48 lg:mx-0">
            <div className="relative flex h-full w-full items-center justify-center">
              <div
                className={`transition-opacity duration-500 ease-in-out ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
                key={currentSlide}
              >
                <figure>
                  <blockquote className="font-reddit text-lg font-semibold text-white sm:text-xl sm:leading-8">
                    <p className="break-words text-center sm:break-normal">
                      {slides[currentSlide].text}
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 text-center text-base text-white">
                    <div className="font-reddit font-semibold">
                      {slides[currentSlide].author}
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Barras de navegación */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`mx-2 h-1 w-24 ${
                  currentSlide === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
