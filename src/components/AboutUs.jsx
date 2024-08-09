export default function AboutUs() {
    return (
      <div className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
        <div className="bg-gray-900 relative pb-20 sm:pb-24 xl:pb-0">
          <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12">
                <blockquote className="font-reddit text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    Talia Abogados es un estudio jurídico conformado por destacados abogados e ingenieros, unidos con la misión de brindar asesoría legal integral adaptada a los tiempos actuales, donde la tecnología es un factor clave para contar con un flujo eficiente de trabajo con tus abogados internos o externos. Entre nuestros clientes destacan estudios jurídicos, fiscalías de empresas, abogados independientes, entre otros.
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
  