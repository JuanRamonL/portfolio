import React from "react"
import Card from "../components/Card"

function Contact() {
  return (
    <>
      <section className="grid md:h-[70vh] m-auto" id="proyects">
          <div className="bg-white py-14">
            <h2 className="text-2xl tracking-widest text-gray-600 text-center">Explorá</h2>
            <h3 className="mt-2 text-center text-3xl md:text-5xl text-gray-600 font-bold">Mis proyectos</h3>

            <div className="md:flex md:justify-center mx-2 md:space-x-8 md:px-14 ">

              <Card titulo="CantaEscuela"  descripcion="Aplicación para alumnos de la escuela de música CantaEscuela, para poder ver sus Materias aprobadas y pendientes, ver sus certificados y descargarlos." img="./img/appcanta.png" linkGit="https://appcantaescuela.com.ar/" linkWeb="https://appcantaescuela.com.ar/"/>

              <Card titulo="Ennoia"  descripcion="Sistema de validación de certificados para alumnos de la escuela de música CantaEscuela." img="./img/ennoia.png" linkGit="https://appcantaescuela.com.ar" linkWeb="https://appcantaescuela.com.ar"/>

            </div>

          </div>
        </section>
      
    </>
  )
}

export default Contact