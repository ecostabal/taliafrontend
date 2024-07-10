import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Proceso Eficiente",
    description:
      "Obtén informes legales de manera fluida y rápida. Carga tus antecedentes y deja que nuestro software y abogados guíen el proceso.",
    icon: "/featuresicons/4.svg",
  },
  {
    name: "Análisis Automatizado",
    description:
      "Reduce el tiempo de revisión de partners comerciales a través de nuestros informes automáticos sobre su situación comercial y legal.",
    icon: "/featuresicons/1.svg",
  },
  {
    name: "Colaboración Efectiva",
    description:
      "Logra un control simple y efectivo de cada operación. Cada colaborador de tu equipo tiene un perfil para realizar y revisar solicitudes.",
    icon: "/featuresicons/6.svg",
  },
  {
    name: "Informes Personalizados",
    description:
      "Trabaja con más velocidad al simplificar la información. Nuestros informes muestran solo lo que necesitas ver.",
    icon: "/featuresicons/2.svg",
  },
  {
    name: "Seguridad Garantizada",
    description:
      "Mantén tu información segura y organizada. Nuestra biblioteca legal te respalda y permite acceder a la información cuando la necesites.",
    icon: "/featuresicons/3.svg",
  },
  {
    name: "Monitoreo Constante",
    description:
      "Obtén información constante para tus operaciones. Nuestro software te notificará sobre cambios en sociedades.",
    icon: "/featuresicons/5.svg",
  },
];


export default function Features() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-reddit leading-7 text-blue-500">
            Maximiza tu tiempo.
          </h2>
          <p className="mt-2 font-reddit text-3xl tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas en una sola plataforma.
          </p>
          <p className="mt-6 font-reddit text-lg leading-8 text-gray-600">
            Somos un equipo especializado en ofrecerte informes legales y comerciales de manera eficiente. Con nuestra plataforma, obtén un estudio legal de sociedades o personas naturales de forma rápida y fluida. Carga tus antecedentes y deja que nuestro software y abogados guíen el proceso.
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
                <dd className="mt-2 text-base leading-7 text-gray-600">
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