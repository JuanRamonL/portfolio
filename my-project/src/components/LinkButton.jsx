
function LinkButton(props ) {
  return (
    <>
        <a href={`${props.link}`} target="_blank" className="block px-1 lg:px-2 xl:px-8 py-2 mb-4 md:mb-0 text-center rounded-full bg-white text-gray-950 border-2 border-gray-200 transform hover:scale-110 transition duration-500 hover:shadow-md font-semibold hover:text-dark hover:shadow-blue-200 ">
          <i className={`${props.icono} pr-2 text-md lg:text-2xl`} ></i>
          {props.nombre}
        </a>
    </>
  );
}   

export default LinkButton;