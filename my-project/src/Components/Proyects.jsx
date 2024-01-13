function Contact() {
  return (
    <>
      <section className="grid md:h-[100vh] m-auto" id="proyects">
          <div class="bg-white py-14">
            <h2 class="text-2xl tracking-widest text-gray-600 text-center">Explorá</h2>
            <h3 class="mt-2 text-center text-5xl text-gray-600 font-bold">Mis proyectos</h3>

            <div class="md:flex md:justify-center mx-2 md:space-x-8 md:px-14 ">


              <div className="mt-16 min-h-[460px]  md:h-[500px] m-auto border-1 border-2 border-gray-900  bg-white rounded-xl hover:shadow-xl transform hover:scale-110 transition duration-500 md:mx-0 w-[90%] md:w-[400px] ">
                <div className="w-sm ">
                  <img class=" shadow-md rounded-lg" src="./img/appcanta.jpg" alt="captura de pantalla de la web" />
                  <div class="mt-4 text-gray-600 text-center">
                    <h2 class="text-xl font-bold mb-4 px-4 py-4">App Alumnos CantaEscuela</h2>
                    <p className="mb-6 px-4 h-[100px] ">
                      Aplicación para alumnos de la escuela de música CantaEscuela, para poder ver sus Materias aprobadas y pendientes, ver sus certificados y descargarlos.
                    </p>
                    <a href="https://appcantaescuela.com.ar/" target="_blank" rel="noopener noreferrer"
                    className=" border-2 border-gray-950 px-8 py-2 rounded-lg">
                      Ver
                    </a>
                    
                  </div>
                </div>
              </div>

              <div className="mt-16 min-h-[460px] md:h-[500px] m-auto border-1 border-2 border-gray-900  bg-white rounded-xl hover:shadow-xl transform hover:scale-110 transition duration-500 md:mx-0 w-[90%] md:w-[400px] ">
                <div className="w-sm ">
                  <img class=" shadow-md rounded-lg" src="./img/canta.jpg" alt="captura de pantalla de la web" />
                  <div class="mt-4 text-gray-600 text-center">
                    <h2 class="text-xl font-bold mb-4 px-4 py-4">Sistema de validación de certificados</h2>
                    <p className="mb-6 px-4 h-[100px] ">
                      Sistema de validación de certificados para alumnos de la escuela de música CantaEscuela.
                    </p>
                    <a href="https://appcantaescuela.com.ar/" target="_blank" rel="noopener noreferrer"
                    className=" border-2 border-gray-950 px-8 py-2 mt-8 rounded-lg">
                      Ver
                    </a>
                    
                  </div>
                </div>
              </div>

              <div className="mt-16 min-h-[460px] md:h-[500px] m-auto border-1 border-2 border-gray-900  bg-white rounded-xl hover:shadow-xl transform hover:scale-110 transition duration-500 md:mx-0 w-[90%] md:w-[400px] ">
                <div className="w-sm ">
                  <img class=" shadow-md rounded-lg" src="./img/git.jpg" alt="captura de pantalla de la web" />
                  <div class="mt-4 text-gray-600 text-center">
                    <h2 class="text-xl font-bold mb-4 px-4 py-4">Github</h2>
                    <p className="mb-6 px-4 h-[100px] ">
                      ver mas proyectos realizados en mi cuenta de github.
                    </p>
                    <a href="https://github.com/JuanRamonL" target="_blank" rel="noopener noreferrer"
                    className=" border-2 border-gray-950 px-8 py-2 mt-8 rounded-lg">
                      Ver
                    </a>
                    
                  </div>
                </div>
              </div>


            </div>

          </div>
        </section>
      
    </>
  )
}

export default Contact