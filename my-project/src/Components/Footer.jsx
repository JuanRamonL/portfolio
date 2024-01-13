function FooterWeb() {
  return (
    <>
    <footer className="bg-white  dark:bg-gray-900 m-4">
        <div className="w-full  p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <p className="text-2xl md:text-3xl font-bold font-heading pl-4 my-4">Lopez Juan Ramón</p>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#about" className="hover:underline me-4 md:me-6">Sobre mi</a>
                    </li>
                    <li>
                        <a href="#proyects" className="hover:underline me-4 md:me-6">Proyectos</a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:underline me-4 md:me-6">habilidades</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">Contacto</a>
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
