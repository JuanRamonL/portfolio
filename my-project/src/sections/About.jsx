function About() {
  return (
    <>
    <section id="about" className="grid md:h-[70vh] m-auto">
      <div className="md:mb-20 md:mt-4">
        <h2 className="text-2xl text-gray-600 text-center"> conocer más</h2>
        <h3 className="mt-2 text-center text-3xl md:text-5xl text-gray-600 font-bold mb-4">Sobre mi</h3>
      </div>
      <div className="md:flex place-items-center" >

        
        <div className="md:px-8  ">
          <div className="md:flex  justify-center">
            <div className="mt-2 py-4 px-4 border-1 border-2 border-gray-900 w-[auto] mx-4 bg-white rounded-xl md:w-[500px] ">
              <div className="w-sm ">
                <div className=" text-gray-600 text-center px-2">
                  <i className="fa-regular fa-circle-check text-3xl"></i>
                  <h1 className="text-xl font-bold mb-1">Experiencia</h1>
                  <p className="text-left font-semibold mb-1">2022-2023 -  Desarrollador web Full Stack y Diseñador Gráfico 
                  <i className="font-normal ml-1">Canta Escuela, San justo - La matanza, Provincia de Buenos Aires, Argentina</i> </p>
                  {/* <p className="text-left mb-1">
                    Diseñé y creé un sistema académico, utilizando PHP, JavaScript, HTML5, CSS3 y SQL. Mi enfoque se centró en mejorar la experiencia del alumno mediante la implementación de funcionalidades, como la visualización de calificaciones, descarga de anaitico y de certificados. Tambien, contribuí con el desarrollo de la identidad visual de la academia y la creación de materiales promocionales.
                  </p> */}
                  {/* <p className="text-left font-semibold mb-1">
                    2022-2023 Desarrollador web Full Stack y Diseñador Gráfico - <i className="font-normal"> Canta Escuela, San justo - La matanza, Provincia de Buenos Aires, Argentina</i>
                  </p> */}
                </div>
              </div>
            </div>

            <div className="mt-2 py-4 px-4 border-1 border-2 border-gray-900 w-[auto] mx-4 bg-white rounded-xl md:w-[500px] ">
              <div className="w-sm ">
                <div className=" text-gray-600 text-center px-2">
                  <i className="fa-solid fa-graduation-cap text-3xl"></i>
                  <h1 className="text-xl font-bold mb-1">Educación</h1>
                  <p className="text-left font-semibold mb-1">
                  2022-2023 - Técnico Superior en Diseño y Programación Web <i className="font-normal">Escuela Da Vinci, Ciudad de Buenos Aires, Provincia de Buenos Aires, Argentina</i>
                  </p>
                  <p className="text-left font-semibold">
                  2016-2021 - Diseñador Multimedial - <i className="font-normal">Escuela Da Vinci, Ciudad de Buenos Aires, Provincia de Buenos Aires, Argentina</i> (sin-concluir)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-2 py-4 px-4 border-1 border-2 border-gray-900 w-[auto] mx-4 bg-white rounded-xl md:w-[500px] ">
              <div className="w-sm ">
                <div className=" text-gray-600 text-center px-2">
                  <i className="fa-solid fa-graduation-cap text-3xl"></i>
                  <h1 className="text-xl font-bold mb-1">Educación</h1>
                  <p className="text-left font-semibold mb-1">
                  2022-2023 - Técnico Superior en Diseño y Programación Web <i className="font-normal">Escuela Da Vinci, Ciudad de Buenos Aires, Provincia de Buenos Aires, Argentina</i>
                  </p>
                  <p className="text-left font-semibold">
                  2016-2021 - Diseñador Multimedial - <i className="font-normal">Escuela Da Vinci, Ciudad de Buenos Aires, Provincia de Buenos Aires, Argentina</i> (sin-concluir)
                  </p>
                </div>
              </div>
            </div>

          </div>

          
          <div className="my-8 px-8 md:px-0 py-4  md:w-10/12 m-auto">
            <p >
              Hola! Soy Juan, actualmente explorando el mundo del diseño y programación web. Desde que descubrí mi interés en el desarrollo web, no paro de aprender y explorar técnicas para crear experiencias únicas, emocionándome al ver mis diseños cobrar vida gracias a mi conocimiento en diseño y programación. 
            </p>
            
          </div>
          

          
        </div>
      </div>
    </section>
    </>
  )
}

export default About