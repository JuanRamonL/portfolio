function About() {
  return (
    <>
    <section id="about" className="md:h-[90vh] mb-12 ">
      <div>
        <h2 class="text-2xl tracking-widest text-gray-600 text-center"> conocer más</h2>
        <h3 class="mt-2 text-center text-5xl text-gray-600 font-bold mb-4">Sobre mi</h3>
      </div>
      <div class="grid lg:grid-cols-2 place-items-center md:w-[80%]  m-auto" >
        <div class=" md:block md:order-1">
          <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="" />
        </div>
        
        <div className="px-8 ">
          

          <p class="text-lg mt-4 text-slate-600 max-w-xl ">
            Astroship is a starter template for startups, marketing websites & landing
            pages.<wbr /> Built with Astro.build, TailwindCSS & Alpine.js. You can quickly
            create any website with this starter.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About