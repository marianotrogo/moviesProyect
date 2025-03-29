import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa'; // Asegúrate de que esto esté correcto
import { useState } from "react"; // Para manejar el estado del menú móvil

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú en móviles

  // Función para alternar el menú en dispositivos móviles
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título del navbar */}
        <h1 className="text-2xl font-bold">
          <Link to="/">🎬 MovieCatalog</Link>
        </h1>

        {/* Menú de navegación para pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400">Inicio</Link>
          </li>
          <li>
            <Link to="/popular" className="hover:text-gray-400">Populares</Link>
          </li>
          <li>
            <Link to="/top-rated" className="hover:text-gray-400">Mejor Valoradas</Link>
          </li>
          <li>
            <Link to="/list" className="hover:text-gray-400">Listas</Link>
          </li>
        </ul>

        {/* Icono de inicio de sesión - solo visible en pantallas grandes */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="flex items-center hover:text-gray-400">
            <FaUserCircle className="text-2xl" />
            <span className="ml-2">Iniciar sesión</span>
          </Link>
        </div>

        {/* Botón hamburguesa para menú móvil */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-800 text-white py-4 space-y-4">
          <li>
            <Link to="/" className="block px-6 py-2 hover:bg-gray-700">Inicio</Link>
          </li>
          <li>
            <Link to="/popular" className="block px-6 py-2 hover:bg-gray-700">Populares</Link>
          </li>
          <li>
            <Link to="/top-rated" className="block px-6 py-2 hover:bg-gray-700">Mejor Valoradas</Link>
          </li>
          <li>
            <Link to="/list" className="block px-6 py-2 hover:bg-gray-700">Listas</Link>
          </li>
          {/* Icono de "Iniciar sesión" dentro del menú desplegable */}
          <li>
            <Link to="/login" className="block px-6 py-2 flex items-center hover:bg-gray-700">
              <FaUserCircle className="text-2xl" />
              <span className="ml-2">Iniciar sesión</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
