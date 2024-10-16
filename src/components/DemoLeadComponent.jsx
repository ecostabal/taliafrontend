import React, { useState, useRef } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { sendQuoteToMonday } from "../hooks/sendQuoteToMonday"; // Asegúrate de que la ruta sea correcta

export default function DemoLeadComponent() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const formRef = useRef(null);

  const resetForm = () => {
    formRef.current.reset();
  };

  const handleButtonClick = async () => {
    const form = formRef.current;

    const firstName = form["first-name"].value;
    const lastName = form["last-name"].value;
    const email = form["email"].value;
    const phone = form["phone"].value;
    const companyName = form["company-name"].value;

    if (!firstName || !lastName || !email || !phone) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      companyName, // Es opcional, así que puede estar vacío
    };

    const success = await sendQuoteToMonday(formData);

    if (success) {
      setShowSuccessMessage(true);
      resetForm();
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000); // Oculta el mensaje de éxito después de 5 segundos
    } else {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 5000); // Oculta el mensaje de error después de 5 segundos
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 xl:px-0 xl:pb-48 xl:pt-24">
      <div className="grid grid-cols-1 items-center gap-32 lg:grid-cols-2">
        <div className="space-y-12">
          <div className="flex items-center space-x-2">
            <h1 className="font-reddit text-3xl leading-snug text-zinc-800 sm:text-4xl sm:leading-snug">
              🚀 Descubre la potencia de nuestros servicios{" "}
              <span className="font-semibold text-blue-500">
                y de lo que podemos hacer por ti.
              </span>
            </h1>
          </div>
        </div>
        <div className="-mt-24 space-y-12 sm:mt-0">
          <form
            id="contact-form"
            ref={formRef}
            action="#"
            method="POST"
            className="mt-0 overflow-hidden rounded-md bg-white p-8 py-16 shadow-xl md:mt-6"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block font-reddit text-sm leading-6 text-zinc-800"
                >
                  Nombre *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full border-0 px-3.5 py-2 font-reddit text-zinc-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block font-reddit text-sm leading-6 text-zinc-800"
                >
                  Apellido *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full border-0 px-3.5 py-2 font-reddit text-zinc-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-reddit text-sm leading-6 text-zinc-800"
                >
                  Email *
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full border-0 px-3.5 py-2 font-reddit text-zinc-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block font-reddit text-sm leading-6 text-zinc-800"
                >
                  Teléfono *
                </label>
                <div className="mt-2.5">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full border-0 px-3.5 py-2 font-reddit text-zinc-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company-name"
                  className="block font-reddit text-sm leading-6 text-zinc-800"
                >
                  Nombre Empresa
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    className="block w-full border-0 px-3.5 py-2 font-reddit text-zinc-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="button"
                className="sm:text-md flex w-full items-center justify-center bg-blue-500 px-8 py-4 font-reddit text-sm text-white transition-all duration-300 ease-in-out"
                style={{ transition: "box-shadow 0.3s", boxShadow: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "5px 5px #3A3A3A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
                onClick={handleButtonClick}
              >
                <span>¡Conversemos!</span>
                <ArrowLongRightIcon className="ml-2 h-4 w-4" />
              </button>
            </div>
            {showSuccessMessage && (
              <p className="mt-4 font-reddit text-sm text-green-600">
                ¡Tu mensaje ha sido enviado con éxito!
              </p>
            )}
            {showErrorMessage && (
              <p className="mt-4 font-reddit text-sm text-red-600">
                Hubo un error al enviar tu mensaje. Intenta de nuevo.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
