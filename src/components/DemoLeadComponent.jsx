import React, { useState } from 'react';

export default function DemoLeadComponent() {
  const [isCompany, setIsCompany] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const resetForm = () => {
    document.getElementById('contact-form').reset();
    setIsCompany(false);
  };

  const handleButtonClick = async () => {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!firstName || !lastName || !email || !phone) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }

    const formData = {
      isCompany,
      companyName: isCompany ? document.getElementById('company-name').value : '',
      website: document.getElementById('company-website').value,
      firstName,
      lastName,
      email,
      phone,
      plan: document.getElementById('options').value
    };

    const success = await sendQuoteToMonday(formData);

    if (success) {
      setShowSuccessMessage(true);
      resetForm();
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000); // Oculta el mensaje de éxito después de 5 segundos
    }
  };

  return (
    <div className="bg-white pt-8 pb-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="flex flex-col gap-16 sm:gap-y-40 md:flex-row ">
          <div className="md:w-1/2 md:mt-16 lg:ml-8">
            <img src="/imagenprueba.png" className="w-96" alt="" />
          </div>
          <form id="contact-form" action="#" method="POST" className="md:w-1/2 lg:mr-8 p-8 mt-0 md:mt-6 overflow-hidden bg-white shadow">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="font-lora font-light block text-sm leading-6 text-gray-900">
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
                <label htmlFor="last-name" className="font-lora font-light block text-sm leading-6 text-gray-900">
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
                <label htmlFor="email" className="font-lora font-light block text-sm leading-6 text-gray-900">
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
                <label htmlFor="phone" className="font-lora font-light block text-sm leading-6 text-gray-900">
                  Teléfono *
                </label>
                <div className="mt-2.5">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    pattern="[0-9]*"
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company-name" className="font-lora font-light block text-sm leading-6 text-gray-900">
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
                <label htmlFor="company-url" className="font-lora font-light block text-sm leading-6 text-gray-900">
                  Sitio Web *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company-url"
                    id="company-url"
                    pattern="[0-9]*"
                    className="block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="button"
                className="font-lora block w-full bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                ¡Conversémos!
              </button>
              {showSuccessMessage && (
                <p className="font-lora mt-2 text-sm leading-6 text-green-500">Mensaje enviado con éxito.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
