import LinkButton from '../components/LinkButton'
function Home() {
  return (
    <>
      <div className=" md:grid lg:grid-cols-2 place-items-center md:w-[80%] h-[100vh] md:m-auto pt-8 md:pt-0" >
        <div className="flex justify-center relative md:order-1 pb-12 w-[100%] md:w-[100%] m-auto" >
          <img src="./img/circulo.png" alt="" className=""/>

          <img src="./img/icon/html.png" alt="" className="w-[10%] rotate-[12deg] absolute  top-0 left-[5%] z-0" />

          <img src="./img/icon/css.png" alt="" className="w-[12%]  rotate-[-12deg] absolute top-30 right-[5%] z-0" />

          <img src="./img/icon/js.png" alt="" className="w-[12%] rotate-[-15deg] absolute bottom-[40%] left-3 z-0" />

          <img src="./img/icon/laravel.png" alt="" className="w-[15%] rotate-[-12deg] absolute top-[20%] left-[15%] z-0" />

          <img src="./img/icon/tailwind.png" alt="" className="w-[8%] rotate-[-12deg] absolute top-[20%] right-[20%] z-0" />

          <img src="./img/icon/php.png" alt="" className="w-[15%] rotate-[5deg] absolute bottom-[40%] right-[8%] z-0" />
        </div>
        <div className="px-4 pt-8 md:p-0 items-center">
            <h2 className=" text-lg">
              ¡Bien venidos!, Soy
            </h2>
            <p className=" text-3xl md:text-5xl xl:text-6xl font-bold lg:tracking-tight ">
              Juan Ramón López
            </p>
            <p className="text-2xl lg:text-3xl xl:text-4xl font-bold mt-4 max-w-xl">
              Desarrollador web Full Stack
            </p>
            <div className="mt-6 lg:flex flex-col sm:flex-row gap-3">
              <LinkButton link="https://github.com/JuanRamonL" nombre="GitHub" icono="fa-brands fa-github"/>
              <LinkButton link="https://github.com/JuanRamonL" nombre="LinkedIn" icono="fa-brands fa-linkedin"/>
              <LinkButton link="https://github.com/JuanRamonL" nombre="Descargar CV" icono="fa-solid fa-file-arrow-down" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home