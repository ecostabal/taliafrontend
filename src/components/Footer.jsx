import { Link } from 'react-router-dom';
import { RoutePaths } from '../general/RoutePaths'; 

const navigation = {
    main: [
      { name: 'Home', to: RoutePaths.HOME },
      { name: 'Demo', to: RoutePaths.DEMOLEAD },
      { name: 'Soporte', to: '#' },
      { name: 'Nosotros', to: '#' },
      { name: 'Ingresa', to: 'https://app.talia.cl' },
    ],
  }
  
  export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-2 text-center sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <Link to={item.to} className="text-sm font-lora leading-6 text-gray-600 hover:text-gray-900">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                <p className="mt-10 text-center font-lora text-xs leading-5 text-gray-500">
                    &copy; {currentYear} Talia - Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}
  