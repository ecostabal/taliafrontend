import {
    CheckCircleIcon,
    ArrowLongRightIcon,
  } from "@heroicons/react/24/outline";
  import { Link } from "react-router-dom";
  import { RoutePaths } from "../general/RoutePaths";
  
  const tiers = [
    {
      name: "Plan Talia",
      id: "tier-company",
      priceMonthly: "$49",
      description: "Acceso a la red Talia.",
      href: "#",
      features: [
        { name: "Cotizaciones Ilimitadas" },
        { name: "Integración API" },
        { name: "Asesoría Jurídica *" },
        { name: "Firma Virtual de Contratos *" },
        { name: "Informes Sociedades y Poderes *" },
      ],
    },
  ];
  
  export default function Pricing() {
    return (
      <div className="isolate overflow-hidden bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-reddit leading-7 text-blue-500">Suscripción.</h2>
            <p className="mt-2 font-reddit text-3xl tracking-tight text-white sm:text-4xl">
              Un plan único de suscripción desde 1 UF.
            </p>
          </div>
          <div className="relative mt-6">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#4F68EE" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flow-root bg-white pb-24 sm:pb-32">
          <div className="-mt-80">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl sm:mx-64">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="flex flex-col justify-between bg-white p-8 shadow-xl rounded-md sm:p-10"
                  >
                    <div>
                      <h3
                        id={tier.id}
                        className="text-center font-reddit text-xl font-semibold leading-7 text-blue-500"
                      >
                        {tier.name}
                      </h3>
                      <p className="mt-6 text-center font-reddit text-md leading-7 text-zinc-600">
                        {tier.description}
                      </p>
                      <hr className="mt-8 border-t border-gray-300" />{" "}
                      {/* Línea divisoria */}
                      <ul
                        role="list"
                        className="mt-10 space-y-4 font-reddit text-sm leading-6 text-zinc-600"
                      >
                        {tier.features.map((feature) => (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckCircleIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-blue-600"
                            />
                            {feature.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      to={RoutePaths.CONTACTANOS}
                      aria-describedby={tier.id}
                      className="mt-8 flex items-center justify-center bg-blue-500 px-8 py-4 font-reddit text-sm font-semibold text-white transition-all duration-300 ease-in-out"
                      style={{ transition: "box-shadow 0.3s", boxShadow: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "5px 5px #3A3A3A";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <span>Cotiza</span>
                      <ArrowLongRightIcon className="ml-2 h-4 w-4" />
                    </Link>
  
                    <p className="mt-4 font-reddit text-center text-xs text-zinc-400">
                      * Feature con cargos adicionales.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  