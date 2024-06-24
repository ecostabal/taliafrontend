import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const practiceAreas = [
  {
    name: "Sociedades",
    href: "/sociedades",
  },
  {
    name: "Corporativo",
    href: "#",
  },
  {
    name: "Laboral y Migratorio",
    href: "#",
  },
  {
    name: "Inmobiliario",
    href: "#",
  },
  {
    name: "Administrativo",
    href: "#",
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
  const navigate = useNavigate();

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    }
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 xl:px-0"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to={RoutePaths.HOME}
            className="-m-1.5 p-1.5"
            onClick={() => handleLinkClick(RoutePaths.HOME)}
          >
            <span className="sr-only">Talia</span>
            <img className="h-8 w-auto" src="/logotalia.svg" alt="Talia logo" />
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
            {({ close }) => (
              <>
                <Popover.Button className="flex items-center gap-x-1 font-reddit text-sm font-normal leading-6 text-zinc-800">
                  Áreas de Práctica
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
                      {practiceAreas.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex-auto">
                            <Link
                              to={item.href}
                              className="block font-reddit font-normal text-zinc-800"
                              onClick={() => {
                                handleLinkClick(item.href);
                                close();
                              }}
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ close }) => (
              <>
                <Popover.Button className="flex items-center gap-x-1 font-reddit text-sm font-normal leading-6 text-zinc-800">
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
                        className="relative rounded-lg p-4 font-reddit hover:bg-gray-50"
                      >
                        <a
                          href={item.href}
                          className="block font-reddit text-sm font-semibold leading-6 text-zinc-800"
                          onClick={() => {
                            handleLinkClick(item.href);
                            close();
                          }}
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
              </>
            )}
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://app.talia.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-800 px-4 py-2 font-reddit text-sm leading-6 text-zinc-800 transition-all duration-300 ease-in-out hover:border-zinc-800 hover:bg-blue-500"
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
              <Link
                to={RoutePaths.HOME}
                className="-m-1.5 p-1.5"
                onClick={() => handleLinkClick(RoutePaths.HOME)}
              >
                <span className="sr-only">Talia</span>
                <img
                  className="h-8 w-auto"
                  src="/logotalia.svg"
                  alt="Talia logo"
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
              <div className="mt-8 divide-y divide-gray-500/10">
                <div className="py-6">
                  {practiceAreas.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 font-reddit leading-7 text-zinc-800 hover:bg-gray-50"
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 font-reddit leading-7 text-zinc-800 hover:bg-gray-50"
                      onClick={() => handleLinkClick(item.href)}
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
