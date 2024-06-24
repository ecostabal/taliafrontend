import React, { useState, useRef } from "react";
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
    const website = form["company-url"].value;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !companyName ||
      !website
    ) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      companyName,
      website,
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
        <div className="space-y-12">
          <form
            id="contact-form"
            ref={formRef}
            action="#"
            method="POST"
            className="mt-0 overflow-hidden bg-white p-8 shadow md:mt-6"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block font-reddit text-sm font-light leading-6 text-gray-900"
                >
                  Nombre *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block font-reddit text-sm font-light leading-6 text-gray-900"
                >
                  Apellido *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-reddit text-sm font-light leading-6 text-gray-900"
                >
                  Email *
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block font-reddit text-sm font-light leading-6 text-gray-900"
                >
                  Teléfono *
                </label>
                <div className="mt-2.5">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company-name"
                  className="block font-reddit text-sm font-light leading-6 text-gray-900"
                >
                  Nombre Empresa *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company-url"
                  className="block font-reddit text-sm font-light leading-6 text-gray-900"
                >
                  Sitio Web *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company-url"
                    id="company-url"
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="button"
                className="block w-full bg-blue-500 px-3.5 py-2.5 text-center font-reddit text-sm font-light text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={handleButtonClick}
              >
                ¡Conversemos!
              </button>
              {showSuccessMessage && (
                <p className="mt-2 font-reddit text-sm leading-6 text-green-500">
                  Mensaje enviado con éxito.
                </p>
              )}
              {showErrorMessage && (
                <p className="mt-2 font-reddit text-sm leading-6 text-red-500">
                  Error al enviar el mensaje. Inténtalo de nuevo.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
