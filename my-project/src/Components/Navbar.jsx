import React, { useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    
      <nav className="flex text-gray  z-50 top-0 w-full md:w-[80%] bg-white ">
        <div className="px-5 py-6 flex justify-between w-full items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-heading pl-4" >
              Juan Ramón López
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><a className="hover:text-gray-300 text-xl" href="#about">Sobre mi</a></li>
              <li><a className="hover:text-gray-300 text-xl" href="#skills">Habilidades</a></li>
              <li><a className="hover:text-gray-300 text-xl" href="#proyects">Proyectos</a></li>
              <li><a className="hover:text-gray-300 text-xl" href="#contact">Contacto</a></li>
            </ul>
          </div>

          {/* Responsive navbar  */}
          <button className="md:hidden pr-4" onClick={toggleMenu} id="toggleMenu">
            <i className={` ${!showMenu ? 'fa-solid fa-bars' : 'fa-solid fa-x'} h-6 w-6 hover:text-gray-950 flex justify-end text-2xl transition duration-300 ease-in-out`}></i>
          </button>

          <ul
            className={`md:hidden px-6 py-6 w-full font-semibold absolute top-[80px] shadow-lg right-0 bg-white text-gray-950 rounded-b-lg transition duration-300 ease-in-out transform ${
              showMenu ? 'translate-x-0' : 'hidden translate-x-[100%]'
            }`}
          >
            <li className=" py-2">
              <a className="hover:text-gray-300 flex items-center" href="#about">
                <i className="fa-solid fa-face-laugh-beam text-2xl pr-2"></i>
                   Sobre mi
              </a>
            </li>
            <li className="py-2">
              <a className="hover:text-gray-300 flex items-center" href="#skills">
                <i className="fa-solid fa-rocket text-2xl pr-2"></i> Hablilidades
              </a>
            </li>
            <li className=" py-2">
              <a className="hover:text-gray-300 flex items-center" href="#proyects">
                <i className="fa-solid fa-diagram-project text-2xl pr-2"></i> Proyectos
              </a>
            </li>
            <li className=" py-2">
              <a className="hover:text-gray-300 flex items-center" href="#contact">
                <i className="fa-solid fa-message text-2xl pr-2"></i> Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
