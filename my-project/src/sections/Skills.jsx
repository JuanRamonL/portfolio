import Skill from "../components/Skill";

function Experience() {
  // Array de objetos con información de las habilidades
  const skillsData = [
    { link: "https://developer.mozilla.org/en-US/docs/Web/HTML", img: "html", skill: "HTML5", description: "Intermedio" },
    { link: "https://developer.mozilla.org/en-US/docs/Web/CSS", img: "css", skill: "CSS3", description: "Intermedio" },
    { link: "https://developer.mozilla.org/en-US/docs/Web/javascript", img: "js", skill: "JavaScript", description: "Intermedio" },
    { link: "https://getbootstrap.com/", img: "bootstrap", skill: "Bootstrap", description: "Intermedio" },
    { link: "https://tailwindcss.com/", img: "tailwind", skill: "Tailwind", description: "Intermedio" },
    { link: "https://vuejs.org/", img: "vue", skill: "Vue.Js", description: "Intermedio" },
    { link: "https://react.dev/", img: "react", skill: "React.Js", description: "Intermedio" },
    { link: "https://inertiajs.com/", img: "inertia", skill: "inertia.JS", description: "Intermedio" },
    // Agrega o quita habilidades según sea necesario
  ];
  const skillback = [    
    { link: "https://www.php.net/", img: "php", skill: "PHP", description: "Intermedio" },
    { link: "https://laravel.com/", img: "laravel", skill: "Laravel", description: "Intermedio" },
    { link: "https://nodejs.org/en", img: "node", skill: "Node", description: "Basico" },
    { link: "https://github.com/", img: "git", skill: "Git", description: "Intermedio" },
  ];
  const skillDb = [
    { link: "https://www.mysql.com/", img: "sql", skill: "MySQL", description: "Basico" },
    { link: "https://firebase.google.com/?hl=es-419", img:"firebase", skill:"firebase", description:"Intermedio"},
    { link: "https://www.mongodb.com/", img: "mongo", skill: "MongoDB", description: "Intermedio" },
  ];
  

  return (
    <>
      <section className="w-full" id="skills">
        <div className="md:grid  md:h-[90vh] m-auto">
          <div>
            <h2 className="mt-8 text-2xl tracking-widest text-gray-600 text-center">Explorá</h2>
            <h3 className="mt-2 text-center text-3xl md:text-5xl text-gray-600 font-bold ">Mis Habilidades</h3>

            <div className="md:w-[60vw] m-auto my-8">

              <p className="text-center mb-8 mx-4"> 
                A lo largo de estos últimos años, he ido adquiriendo habilidades en el área de la programación. He aprendido varios lenguajes, tanto del lado del servidor como del cliente. A continuación, te mostraré algunos de estos.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 box-border flex-wrap h-auto">
                {skillsData.map((skill, index) => (
                  <Skill key={index} link={skill.link} img={skill.img} skill={skill.skill} description={skill.description} />
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 box-border flex-wrap h-auto my-8">
                {skillback.map((skill, index) => (
                  <Skill key={index} link={skill.link} img={skill.img} skill={skill.skill} description={skill.description} />
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 box-border flex-wrap h-auto my-8">
                {skillDb.map((skill, index) => (
                  <Skill key={index} link={skill.link} img={skill.img} skill={skill.skill} description={skill.description} />
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;