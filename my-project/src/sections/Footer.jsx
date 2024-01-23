function FooterWeb() {
  return (
    <>
    <footer className="bg-white  dark:bg-gray-900 m-4">
        <div className="w-full text-center  p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-center">
                <ul className="flex justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li className='btn btnUndeline'>
                        <a href="#home" className="text-sm md:text-lg">Inicio</a>
                    </li>
                    <li className='btn btnUndeline'>
                        <a href="#about" className="text-sm md:text-lg">Sobre mi</a>
                    </li>
                    <li className='btn btnUndeline'>
                        <a href="#proyects" className="text-sm md:text-lg">Proyectos</a>
                    </li>
                    <li className='btn btnUndeline'>
                        <a href="#skills" className="text-sm md:text-lg">habilidades</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 López Juan Ramón.</span>
        </div>
    </footer>
    </>
  )
}

export default FooterWeb
