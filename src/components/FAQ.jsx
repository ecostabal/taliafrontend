import { useState } from "react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "¿Qué es Talia?",
    answer:
      "Talia es una plataforma digital diseñada para abogados y empresas que buscan optimizar sus procesos legales de manera eficiente y segura. Ofrecemos una solución integral que facilita la solicitud de cotizaciones de servicios legales, la firma de documentos de forma virtual y la obtención de estudios de poderes.",
  },
  {
    question: "¿A quien está dirigido Talia?",
    answer:
      "Talia es una herramienta desarrollada para optimizar procesos legales de manera eficiente y segura. Está diseñada para satisfacer las necesidades legales de abogados independientes, pymes, gerencias legales, universidades, entre otros.",
  },
  {
    question: "¿Qué tipo de solicitudes puedo realizar en la aplicación?",
    answer:
      "Solicitud de Asesoría Jurídica: Solicita cotizaciones para servicios legales personalizados, adaptados a las necesidades de tu caso. Solicitud de Firma Virtual: Firma documentos de manera digital, con total validez jurídica, sin necesidad de desplazarte. Solicitud de Estudio de Poderes: Solicita estudios de poderes, obteniendo un informe detallado sobre las facultades de representación de apoderados de sociedades legalmente constituidas.",
  },
  {
    question: "¿Cómo puedo lograr una solicitud exitosa?",
    answer:
      "Explicar claramente el objetivo de tu solicitud, y qué resultado esperas. Recuerda que un buen “input” es esencial para satisfacer tus necesidades legales. Si falta información, te pediremos una aclaración para un adecuado entendimiento y dar el resultado que necesitas.",
  },
  {
    question: "¿Qué tipo de documentos puedo firmar a través de Talia?",
    answer:
      "La regla general es que la Firma Electrónica Simple y Avanzada pueden usarse indistintamente para celebrar toda clase de actos y contratos, salvo los siguientes: a) No puede utilizarse Firma Electrónica Simple cuando la ley exige expresamente el uso de Firma Electrónica Avanzada, por ejemplo: I. Los instrumentos públicos en formato electrónico deben llevar la Firma Electrónica Avanzada del funcionario que los emite: una copia electrónica autorizada de una escritura pública debe contar con la Firma Electrónica Avanzada del notario que la autoriza; un certificado del Registro Civil debe contar con la Firma Electrónica Avanzada del funcionario que lo emite, etc. II. El mandato judicial otorgado en documento electrónico debe ser suscrito con la Firma Electrónica Avanzada del mandante. III. Los formularios para la constitución, modificación, disolución o anotaciones de empresas del Registro de Empresas y Sociedades deben ser suscritos con la Firma Electrónica Avanzada de los constituyentes, socios o accionistas; o con la Firma Electrónica Avanzada del notario que autoriza el acto si es que estos no contaran con su propia Firma Electrónica Avanzada. b) No puede utilizarse firma electrónica en cualquiera de sus tipos cuando la Ley de Firma Electrónica u otras leyes impiden el uso de firma electrónica: I. Cuando la ley exige una solemnidad que no sea susceptible de cumplirse mediante documento electrónico II. Cuando la ley requiere la concurrencia personal de alguna de las partes III. En actos y contratos relativos al derecho de familia.",
  },
  {
    question: "¿Para que sirve un estudio de poderes?",
    answer:
      "Con nuestro informe de sociedad y poder podrás determinar quién es el representante de una compañía, verificar si tiene facultades suficientes (por ejemplo: si tiene facultades para otorgar un mandato, o para firmar un contrato determinado) y detectar si existe algún problema o vicio que deba ser subsanado para operar sin problemas.",
  },
  {
    question:
      "¿Qué documentos debo ingresar para obtener un estudio de poderes completo?",
    answer:
      "1.- Copia de inscripción de la sociedad emitido por el Registro de Comercio respectivo. 2.- Copia de escritura pública de constitución y sus modificaciones. 3.- Copia de las cédulas de identidad de los representantes. 4.- Copia de los instrumentos en que conste la designación o personería de los representantes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDisclosure = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-0">
        <div className="mx-auto divide-y divide-gray-900/10">
          <h2 className="font-reddit text-3xl leading-10 tracking-tight text-zinc-800 sm:text-4xl">
            FAQ's
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <button
                    className="group flex w-full items-start justify-between text-left text-zinc-800"
                    onClick={() => toggleDisclosure(index)}
                  >
                    <span className="font-reddit text-base leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {openIndex === index ? (
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="h-6 w-6"
                        />
                      ) : (
                        <PlusSmallIcon aria-hidden="true" className="h-6 w-6" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="font-reddit text-sm text-zinc-600">
                      {faq.answer}
                    </p>
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
