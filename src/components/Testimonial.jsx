export default function Testimonial() {
  return (
    <div className="bg-white py-16 sm:py-12">
      <div className="mx-auto max-w-6xl px-6 xl:px-0 xl:pt-24">
        <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl rounded-md sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1674918732025-02d6639e5b1a?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover opacity-40 brightness-150 saturate-0"
          />
          <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
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
          <div
            aria-hidden="true"
            className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#7775D6] to-[#776fff] opacity-25"
            />
          </div>
          <div className="relative mx-auto max-w-2xl lg:mx-0">
            <figure>
              <blockquote className="mt-6 font-reddit text-lg font-semibold text-white sm:text-xl sm:leading-8">
                <p>
                  “Nuestra misión es entregar los beneficios de tener una
                  fiscalía legal interna a empresas de todos los tamaños, con o
                  sin gerencias legales, sin la necesidad de incurrir en grandes
                  costos, y con más herramientas que el servicio tradicional.”
                </p>
              </blockquote>
              <figcaption className="mt-6 text-base text-white">
                <div className="font-reddit font-semibold">
                  Juan Cristóbal Oliva
                </div>
                <div className="mt-1 font-reddit">Talia Abogados</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
