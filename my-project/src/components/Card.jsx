function Card (props, ) {
  return (
    <div className="mt-16 m-auto shadow-lg shadow-blue-100  bg-white rounded-xl hover:shadow-md transform hover:scale-110 transition duration-500 md:mx-0 w-[90%] md:w-[300px] hover:shadow-blue-200">
                <div className="w-sm ">
                  <div>
                  <img className=" rounded-t-lg m-auto " src={`${props.img}`} alt="captura de pantalla de la web" />
                  </div>
                  <div className=" text-gray-600 text-center">
                    <h2 className="text-xl font-bold px-4 py-2 h-[70px] ">{props.titulo} {/* App Alumnos CantaEscuela */}</h2>
                    <p className="mb-6 px-4 h-[90px] text-sm">
                        {props.descripcion}
                        {/* Aplicación para alumnos de la escuela de música CantaEscuela, para poder ver sus Materias aprobadas y pendientes, ver sus certificados y descargarlos. */}                    
                    </p>
                    
                    <div className="flex justify-center mb-2">

                      <a href={`${props.linkWeb}`} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2  mb-2 rounded-full bg-white text-gray-950 border-2 border-gray-200 transform hover:scale-110 transition duration-500 hover:shadow-md font-semibold hover:shadow-blue-200">
                        
                        <i className="fa-regular fa-eye  px-2 text-2xl"></i>
                        Ver
                      </a>
                    </div>
                    
                  </div>
                </div>
              </div>
  );
}

export default Card;