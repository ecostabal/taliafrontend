import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import { RoutePaths } from "../general/RoutePaths";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const company = [
  {
    name: "Nosotros",
    href: RoutePaths.NOSOTROS,
    description: "¿Quiénes sómos y qué hacemos?",
  },
  {
    name: "Nuestro Equipo",
    href: RoutePaths.MAINTENANCE,
    description: "Conoce el equipo detrás de Talia Abogados.",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Usa useNavigate para programar la navegación

  const handleMobileLinkClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path); // Navega a la ruta correspondiente
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 xl:px-0"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={RoutePaths.HOME} className="-m-1.5 p-1.5">
            <span className="sr-only">Talia</span>
            <img className="h-8 w-auto" src="/logotalia.svg" alt="Talia Logo" />
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
          <Link
            to={RoutePaths.HOME}
            className="font-reddit text-sm leading-6 text-zinc-800"
          >
            Inicio
          </Link>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="flex items-center gap-x-1 font-reddit text-sm leading-6 text-zinc-800">
                  Nosotros
                  <ChevronDownIcon
                    className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-200 ${
                      open ? "scale-y-[-1]" : ""
                    }`}
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
                        className="relative flex items-start gap-x-4 rounded-lg p-4 font-reddit hover:bg-gray-50"
                      >
                        <div>
                          <a
                            href={item.href}
                            className="block font-reddit text-sm font-semibold leading-6 text-blue-500"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-xs leading-6 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://app.talia.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:text-md flex items-center justify-center bg-blue-500 px-5 py-2.5 font-reddit text-sm text-white transition-all duration-300 ease-in-out"
            style={{ transition: "box-shadow 0.3s", boxShadow: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "5px 5px #3A3A3A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span>Ingresa</span>
            <ArrowLongRightIcon className="ml-2 h-4 w-4" />
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
                <img
                  className="h-8 w-auto"
                  src="/logotalia.svg"
                  alt="Talia Logo"
                />
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
              <div className="my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <button
                    onClick={() => handleMobileLinkClick(RoutePaths.HOME)}
                    className="-mx-3 block w-full rounded-lg px-3 py-2 text-left font-reddit leading-7 text-zinc-800 hover:bg-gray-50"
                  >
                    Inicio
                  </button>
                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 font-reddit leading-7 text-zinc-800 hover:bg-gray-50"
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
                    className="-mx-3 block rounded-lg px-3 py-2.5 font-reddit leading-7 text-zinc-800 hover:bg-gray-50"
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
