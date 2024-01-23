import '../../App.css'
import About from '../../sections/About'
import Navbar from '../../sections/Navbar'
import FooterWeb from '../../sections/Footer'
import Contact from '../../sections/Contact'
import Proyects from '../../sections/Proyects'
import Skills from '../../sections/Skills'
import Home from '../../sections/Home'
function App() {

  return (
    <>
      <div >

        <header className=" w-full flex justify-center">
            <Navbar  />
        </header>

        <main >
          <Home /> 
          <About />
          <Skills />
          <Proyects />
          <Contact />
        </main>

        <FooterWeb />

      </div>
    </>
  )
}

export default App
