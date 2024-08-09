import { useState } from 'react';
import { MinusSmallIcon, PlusSmallIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Corporativo',
    description: [
      'Constitución, modificación, disolución o transformación de sociedades de todos los sistemas registrales.',
      'Preparación de JEA, JOA, Directorios.',
      'Preparación de Poderes.',
      'Elaboración y revisión de contratos comerciales, compraventas de acciones, MOU, NDA, mutuos, reconocimientos de deuda, pactos de accionistas, y más.',
      'Asesoría Corporativa General.',
      'Estudios de Sociedades y Poderes (KYC)',
    ],
  },
  {
    name: 'Laboral',
    description: [
      'Elaboración y revisión de contratos de trabajo, cartas de despido, finiquitos.',
      'Preparación y revisión de Recursos Administrativos ante la Inspección del Trabajo.',
      'Asesoría Laboral General.',
    ],
  },
  {
    name: 'Inmobiliario',
    description: [
      'Estudios de títulos inmobiliarios.',
      'Revisión y confección de contratos de compraventa y arrendamiento de inmuebles y documentos relacionados.',
    ],
  },
  {
    name: 'Migratorio',
    description: [
      'Coordinación de residencias temporales, definitivas y PET de trabajadores extranjeros y documentos relacionados.',
    ],
  },
  {
    name: 'Administrativo Sancionador',
    description: [
      'Elaboración de recursos administrativos para hacer frente a multas de instituciones fiscalizadoras u órganos de licitaciones (Seremi, DT, Subsecretarías, etc.).',
    ],
  },
];

export default function PracticeAreas() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDisclosure = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-reddit leading-10 tracking-tight text-zinc-800 sm:text-4xl">
            Áreas de Práctica
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {features.map((feature, index) => (
              <div key={feature.name} className="pt-6">
                <dt>
                  <button
                    className="group flex w-full items-start justify-between text-left text-zinc-800"
                    onClick={() => toggleDisclosure(index)}
                  >
                    <span className="text-base font-reddit leading-7">{feature.name}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {openIndex === index ? (
                        <MinusSmallIcon aria-hidden="true" className="h-6 w-6" />
                      ) : (
                        <PlusSmallIcon aria-hidden="true" className="h-6 w-6" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <ul className="my-12 space-y-4">
                      {feature.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircleIcon
                            className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-zinc-600 font-reddit">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
