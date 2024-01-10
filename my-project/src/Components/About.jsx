function About() {
  return (
    <>
      <div class="grid lg:grid-cols-2 place-items-center  pb-8 ">
        <div class=" md:order-1 hidden md:block">
          <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="" />
        </div>
        <div>
          <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
            Marketing website done with Astro
          </h1>
          <p class="text-lg mt-4 text-slate-600 max-w-xl">
            Astroship is a starter template for startups, marketing websites & landing
            pages.<wbr /> Built with Astro.build, TailwindCSS & Alpine.js. You can quickly
            create any website with this starter.
          </p>
          <div class="mt-6 flex flex-col sm:flex-row gap-3">

          </div>
        </div>
      </div>
    </>
  )
}

export default About