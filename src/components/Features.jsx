const features = [
  {
    name: "Servicio Remoto",
    description:
      "Elabora, revisa y firma tus contratos de manera virtual y remota, manteniendo un orden cronológico en cada etapa.",
    icon: "/featuresicons/1.svg",
  },
  {
    name: "Asesoría Legal Integral",
    description:
      "Obtén asesoría legal integral con nuestro servicio personalizado, incluyendo la elaboración y revisión de todo tipo de documentos legales.",
    icon: "/featuresicons/2.svg",
  },
  {
    name: "Flujos de Trabajo",
    description:
      "Organiza los flujos de trabajo de tu fiscalía asignando eficientemente los recursos, tareas y fechas de entrega, mientras mantienes una comunicación fluida con tu equipo.",
    icon: "/featuresicons/3.svg",
  },
  {
    name: "Biblioteca Legal",
    description:
      "Accede a una biblioteca legal organizada, donde podrás almacenar, respaldar y registrar contratos, escrituras, resoluciones y más.",
    icon: "/featuresicons/4.svg",
  },
  {
    name: "Informes de Sociedades y Poderes",
    description:
      "Solicita informes de sociedades y poderes para operar con confianza y verificar las facultades de apoderados y representantes.",
    icon: "/featuresicons/5.svg",
  },
  {
    name: "Request for Proposal",
    description:
      "Te ayudamos a encontrar el Estudio Jurídico ideal para tus necesidades específicas, basándonos en criterios objetivos para que tomes la mejor decisión.",
    icon: "/featuresicons/6.svg",
  },
];

export default function Features() {
  return (
    <div className="pt-24 pb-48">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-reddit leading-7 text-blue-500">
            Maximiza tu tiempo.
          </h2>
          <p className="mt-2 font-reddit text-3xl tracking-tight text-zinc-800 sm:text-4xl">
            Todo lo que necesitas en una sola plataforma.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl font-reddit sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="font-reddit font-semibold leading-7 text-blue-500">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                    <img
                      src={feature.icon}
                      className="h-10 w-10"
                      alt={feature.name}
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-zinc-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
