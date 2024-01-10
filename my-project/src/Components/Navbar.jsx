function Navbar() {
    return (
      <>
        <div className="container mx-auto flex items-center h-24">
    <a href="" className="flex items-center justify-center">
      <h1 classNameName="ml-4 uppercase font-black">Juan Ramón López</h1>
    </a>
    <nav className="contents font-semibold text-base lg:text-lg">
      <ul className="mx-auto flex items-center">
        <li className="p-5 xl:p-8">
          <a href="#about">
            <span>Sobre mi</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="#projects">
            <span>Proyectos</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="#skills">
            <span>Habilidades</span>
          </a>
        </li>
        
      </ul>
    </nav>
    <ul className="border border-white rounded-full font-bold px-8 py-2">
      <li className="p-5 xl:p-8">
        <a href="#Contact">
          <span>Contacto</span>
        </a>
      </li>
    </ul>
  </div>
      </>
    )
  }
  
  export default Navbar