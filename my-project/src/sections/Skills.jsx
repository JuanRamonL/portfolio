
import Skill from "../components/Skill"
function Experience() {
    return (
      <>
        <section className="w-full" id="skills">

          <div className="md:grid  md:h-[70vh] m-auto">
            <div>
              <h2 className="mt-8 text-2xl tracking-widest text-gray-600 text-center">Explorá</h2>
              <h3 className="mt-2 text-center text-3xl md:text-5xl text-gray-600 font-bold ">Mis Habilidades</h3>

              <div className="md:w-[60vw] m-auto my-8">

              <p className="text-center mx-4"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore pariatur unde, illum veritatis nobis tempora est assumenda quia consectetur quibusdam animi perferendis quas. Earum iure aliquid quis perferendis voluptatem.
              </p>
              <div className="flex justify-center md:block">

                <div className="md:flex md:justify-center my-4 mx-2 md:space-x-8 ">
                  <Skill icon="fa-brands fa-html5 text-orange-600" skill="HTML5" description="Intermedio"/>
                  <Skill icon="fa-brands fa-css3-alt text-sky-600" skill="CSS3" description="Intermedio"/>
                  <Skill icon="fa-brands fa-js text-amber-400" skill="JavaScript" description="Intermedio"/>
                  <Skill icon="fa-brands fa-php text-indigo-600" skill="PHP" description="Intermedio"/>
                </div>

                <div className="md:flex md:justify-center my-4 md:space-x-2 ">
                  <Skill icon="fa-brands fa-bootstrap text-violet-600"skill="Bootstrap" description="Intermedio"/>
                  <Skill icon="fa-brands fa-bootstrap" skill="Tailwind" description="Intermedio"/>
                  <Skill icon="fa-brands fa-vuejs text-emerald-400" skill="Vue.Js" description="Intermedio"/>
                  <Skill  icon="fa-brands fa-react text-sky-400" skill="React.Js" description="Intermedio"/>
                </div>

                <div className="md:flex md:justify-center my-4 md:space-x-2 ">
                  <Skill icon="fa-brands fa-node-js text-emerald-600" skill="Node" description="Intermedio"/>
                  <Skill icon="fa-brands fa-laravel text-orange-600" skill="Laravel" description="Intermedio"/>
                  <Skill icon="fa-solid fa-database text-sky-700" skill="SQL" description="Basico"/>
                  <Skill icon="fa-brands fa-github-alt" skill="Git" description="Intermedio"/>
                </div>
              

              </div>

            </div>
            </div>
            
          </div>
        </section>
      </>
    )
  }
  
  export default Experience