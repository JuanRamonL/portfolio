function Home() {
  return (
    <>
      <div class="grid lg:grid-cols-2 place-items-center md:w-[80%] h-[90vh] m-auto" id="Home">
        <div class=" md:order-1 md:block">
          <img src="./img/uno.png" alt="" />
        </div>
        <div className="px-8 items-center">
            <h2 class=" text-lg">
              ¡Biemvenidos!, Soy
            </h2>
            <p className=" text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight ">
              Juan Ramón López
            </p>
            <p class="text-2xl lg:text-3xl xl:text-4xl font-bold mt-4 max-w-xl">
              Desarrollador web Full Stack
            </p>
            <div class="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="https://github.com/JuanRamonL" target="_blank" className="px-8 py-2 rounded bg-white text-gray-950 border-2 border-gray-200 transform hover:scale-110 transition duration-500 hover:shadow-md font-semibold">
                <i class="fa-brands fa-github px-2 text-2xl"></i>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/juan-ramon-lopez-35454b189/" target="_blank" className="px-8 py-2 rounded bg-white text-gray-950 border-2 border-gray-200 transform hover:scale-110 transition duration-500 hover:shadow-md font-semibold">
                <i class="fa-brands fa-linkedin-in px-2 text-2xl"></i>
                LinkedIn
              </a>
              {/* <a href="" target="_blank" className="px-8 py-2 rounded bg-white text-gray-950 border-2 border-gray-200 transform hover:scale-110 transition duration-500 hover:shadow-md font-semibold">
                <i class="fa-brands fa-figma px-2 text-2xl"></i>
                Figma
              </a> */}
            </div>
        </div>
      </div>
    </>
  )
}

export default Home