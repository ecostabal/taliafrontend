import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "Informes de Sociedad y Poderes",
    description:
      "Análisis legal de una organización, estatutos, modificaciones, representantes con sus debidas facultades y limitaciones, socios y capital.",
    href: "#",
    icon: "/taliaicons/sociedadesypoderes.svg",
    soon: false,
  },
  {
    name: "Informes de Perfil Comercial",
    description:
      "Perfilamiento comercial completo con tramos de venta, socios, sociedades en las que participa, activos, deudas, juicios, etc.",
    href: "#",
    icon: "/taliaicons/perfilcomercial.svg",
    soon: false,
  },
];

const company = [
  {
    name: "Soporte Clientes",
    href: "#",
    description:
      "¿Tienes algún problema con la plataforma? Ingresa tu ticket desde aquí.",
  },
  {
    name: "Nosotros",
    href: "#",
    description:
      "¿Como nace Talia? Te contamos la interesante historia detrás de esta startup.",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 xl:px-0 py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={RoutePaths.HOME} className="-m-1.5 p-1.5">
            <span className="sr-only">Talia</span>
            <img className="h-8 w-auto" src="/logotalia.svg" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 font-lora text-sm font-light leading-6 text-zinc-800">
              Productos
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-zinc-800/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <img
                          src={item.icon}
                          className="h-12 w-12"
                          alt={item.name}
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-lora font-semibold text-zinc-800"
                        >
                          {item.name}
                          {item.soon && (
                            <span className="ml-2 rounded-full border border-blue-500 bg-blue-100 px-2 text-xs font-light text-blue-500">
                              Pronto
                            </span>
                          )}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 font-lora font-light text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 font-lora text-sm font-light leading-6 text-zinc-800">
              Nosotros
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-md bg-white p-4 shadow-lg ring-1 ring-zinc-800/5">
                {company.map((item) => (
                  <div
                    key={item.name}
                    className="relative rounded-lg p-4 font-lora font-light hover:bg-gray-50"
                  >
                    <a
                      href={item.href}
                      className="block font-lora text-sm font-semibold leading-6 text-zinc-800"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://app.talia.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-800 px-4 py-2 font-lora text-sm font-light leading-6 text-zinc-800 transition-all duration-300 ease-in-out hover:border-zinc-800 hover:bg-blue-500"
            style={{ transition: "box-shadow 0.3s", boxShadow: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "5px 5px #3A3A3A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Ingresa <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-zinc-800/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link to={RoutePaths.HOME} className="-m-1.5 p-1.5">
                <span className="sr-only">Talia</span>
                <img className="h-8 w-auto" src="/logotalia.svg" alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="mt-12 space-y-2 py-6 sm:hidden">
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 font-lora text-base font-light leading-7 text-zinc-800 hover:bg-gray-50"
                    >
                      <img
                        src={item.icon}
                        className="h-8 w-8"
                        alt={item.name}
                      />
                      {item.name}
                      {item.soon && (
                        <span className="-ml-4 rounded-full border border-blue-500 bg-blue-100 px-2 text-xs font-light text-blue-500">
                          Pronto
                        </span>
                      )}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 py-6">

                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 font-lora text-base font-light leading-7 text-zinc-800 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https://app.talia.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 font-lora text-base font-light leading-7 text-zinc-800 hover:bg-gray-50"
                  >
                    Ingresa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
