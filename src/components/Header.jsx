import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { RoutePaths } from '../general/RoutePaths'; 
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Informes Societarios', description: 'Informe instantáneo de sociedades.', href: '#', icon: ChartPieIcon, soon: false },
  { name: 'Nueva Función', description: 'Aquí describimos los siguientes productos.', href: '#', icon: CursorArrowRaysIcon, soon: true },
]

const company = [
  { name: 'Soporte Clientes', href: '#', description: '¿Tienes algún problema con la plataforma? Ingresa tu ticket desde aquí.' },
  { name: 'Nosotros', href: '#', description: '¿Como nace Talia? Te contamos la interesante historia detrás de esta startup.' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        <Link to={RoutePaths.HOME} className="-m-1.5 p-1.5">
          <span className="sr-only">Talia</span>
          <img className="h-8 w-auto" src="/LOGOTEST.svg" alt="" />
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
            <Popover.Button className="font-lora font-light flex items-center gap-x-1 text-sm leading-6 text-zinc-800">
              Soluciones
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-500" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="font-lora font-semibold block text-zinc-800">
                        {item.name}
                        {item.soon && <span className="ml-2 text-xs font-light px-2 bg-blue-100 rounded-full border border-blue-500 text-blue-500">Pronto</span>}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="font-lora font-light mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="font-lora font-light text-sm leading-6 text-zinc-800">
            Features
          </a>

          <Popover className="relative">
            <Popover.Button className="font-lora font-light flex items-center gap-x-1 text-sm leading-6 text-zinc-800">
              Nosotros
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                  <div key={item.name} className="font-lora font-light relative rounded-lg p-4 hover:bg-gray-50">
                    <a href={item.href} className="font-lora font-semibold block text-sm leading-6 text-zinc-800">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://app.talia.cl" target="_blank" rel="noopener noreferrer" className="font-lora font-light text-sm leading-6 px-4 py-2 border border-white text-zinc-800 hover:bg-zinc-800 hover:text-white transition-all duration-300 ease-in-out">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-zinc-800/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link to={RoutePaths.HOME} className="-m-1.5 p-1.5">
                <span className="sr-only">Talia</span>
                <img
                  className="h-8 w-auto"
                  src="/LOGOTEST.svg"
                  alt=""
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
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
              <div className="sm:hidden space-y-2 py-6">
                {products.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-lora font-light group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base leading-7 text-zinc-800 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    {item.name}
                    {item.soon && <span className="ml-2 text-xs font-light px-2 bg-blue-100 rounded-full border border-blue-500 text-blue-500">Pronto</span>}
                  </a>
                ))}
              </div>
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="font-lora font-light -mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-zinc-800 hover:bg-gray-50"
                  >
                    Features
                  </a>

                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-lora font-light -mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-zinc-800 hover:bg-gray-50"
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
                  className="font-lora font-light -mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-zinc-800 hover:bg-gray-50"
                >
                  Log in
                </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
