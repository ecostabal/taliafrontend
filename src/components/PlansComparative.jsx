import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const tiers = [
  {
    name: "Plan Empresa",
    id: "tier-company",
    description: "Ideal para empresas que necesitan un control más detallado.",
  },
  {
    name: "Plan Abogado",
    id: "tier-team",
    description: "Perfecto para abogados individuales o pequeños equipos.",
  },
];

const sections = [
  {
    name: "Features",
    features: [
      {
        name: "Estado de Tareas",
        tiers: { "Plan Empresa": true, "Plan Abogado": true },
      },
      {
        name: "Seguimiento y Asignación de Tareas",
        tiers: { "Plan Empresa": true, "Plan Abogado": true },
      },
      {
        name: "Carpeta de Documentos",
        tiers: { "Plan Empresa": true, "Plan Abogado": true },
      },
      {
        name: "Búsqueda de Estudios Jurídicos",
        tiers: { "Plan Empresa": true, "Plan Abogado": true },
      },
      {
        name: "Solicitud de Contratos y otros Escritos (RFP)",
        tiers: { "Plan Empresa": true, "Plan Abogado": "Opcional" },
      },
      {
        name: "Asesoría Legal",
        tiers: { "Plan Empresa": true, "Plan Abogado": "Opcional" },
      },
      {
        name: "Firma Virtual de Contratos",
        tiers: { "Plan Empresa": "Opcional", "Plan Abogado": "Opcional" },
      },
      {
        name: "Informes Sociedades y Poderes",
        tiers: { "Plan Empresa": "Opcional", "Plan Abogado": "Opcional" },
      },
    ],
  },
];

export default function PlansComparative() {
  return (
    <div className="isolate mx-auto hidden max-w-6xl md:block">
      <div className="relative mx-32 mb-24">
        <table className="w-full table-fixed border-separate border-spacing-x-8 shadow-xl rounded-md bg-gray-900 p-4 pb-8 text-left">
          <colgroup>
            <col className="w-1/3" />
            <col className="w-1/3" />
            <col className="w-1/3" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" className="align-bottom">
                <div className="hidden text-left font-reddit text-sm font-semibold leading-7 text-white">
                  {sections[0].name}
                </div>
              </th>
              {tiers.map((tier) => (
                <th
                  key={tier.id}
                  scope="col"
                  className="px-6 pt-6 align-bottom xl:px-8 xl:pt-8"
                >
                  <div className="text-center font-reddit text-sm font-semibold leading-7 text-white">
                    {tier.name}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sections.map((section) => (
              <Fragment key={section.name}>
                {section.features.map((feature, featureIdx) => (
                  <tr key={feature.name}>
                    <th
                      scope="row"
                      className="py-2 font-reddit text-xs font-normal leading-6 text-gray-100"
                    >
                      {feature.name}
                      {featureIdx < section.features.length - 1 && (
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10" />
                      )}
                    </th>
                    {tiers.map((tier) => (
                      <td key={tier.id} className="px-6 py-4 xl:px-8">
                        {feature.tiers[tier.name] === true ? (
                          <CheckCircleIcon
                            aria-hidden="true"
                            className="mx-auto h-5 w-5 text-white"
                          />
                        ) : (
                          <PlusCircleIcon
                            aria-hidden="true"
                            className="mx-auto h-5 w-5 text-blue-500"
                          />
                        )}
                        <span className="sr-only">
                          {feature.tiers[tier.name] === true
                            ? "Included"
                            : "Optional"}{" "}
                          in {tier.name}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
        <div className="mt-8 rounded-md bg-gray-100 p-4">
          <div className="flex items-center">
            <PlusCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-blue-500"
            />
            <p className="ml-2 text-xs font-reddit text-zinc-600">
              Son herramientas que tienen cargos extras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
