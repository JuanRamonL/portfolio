function Contact() {
    return (
      <>
        <section className=" flex justify-center items-center md:w-[80%]  h-[86vh] m-auto" id="contact">
          <div className=" items-center text-center md:pt-20">
              <h2 className=" text-3xl md:text-5xl xl:text-6xl font-bold lg:tracking-tight ">
                Contacto
              </h2>
              <p className="text-2xl tracking-widest text-gray-600 text-center pt-4" >
                Contáctame para colaborar juntos.
              </p>
              <div className="mt-6 md:flex justify-center sm:flex-row gap-3">
                <a href="https://github.com/JuanRamonL" target="_blank" className="px-8 py-2 rounded-full bg-white text-gray-950 border-2 border-gray-200 transform hover:scale-110 transition duration-500 hover:shadow-md font-semibold block md-flex w-[90vw] md:w-auto my-4 mx-auto hover:shadow-blue-200 ">
                  <i className="fa-regular fa-envelope px-2 text-2xl"></i>
                  Email
                </a>
                <a href="https://www.linkedin.com/in/juan-ramon-lopez-35454b189/" target="_blank" className="px-8 py-2 rounded-full bg-white text-gray-950 border-2 border-gray-200 transform hover:scale-110 transition duration-500 hover:shadow-md font-semibold block md-flex w-[90vw] md:w-auto my-4 mx-auto hover:shadow-blue-200 ">
                  <i className="fa-brands fa-whatsapp px-2 text-2xl"></i>
                  Whatsapp
                </a>
                <a href="https://www.linkedin.com/in/juan-ramon-lopez-35454b189/" target="_blank" className="px-8 py-2 rounded-full bg-white text-gray-950 border-2 border-gray-200 transform hover:scale-110 transition duration-500 hover:shadow-md font-semibold block md-flex w-[90vw] md:w-auto my-4 mx-auto hover:shadow-blue-200 ">
                  <i className="fa-brands fa-linkedin-in px-2 text-2xl"></i>
                  LinkedIn
                </a>
              </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Contact