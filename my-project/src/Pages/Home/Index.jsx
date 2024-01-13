import '../../App.css'
import About from '../../Components/About'
import Navbar from '../../Components/Navbar'
import FooterWeb from '../../Components/Footer'
import Contact from '../../Components/Contact'
import Proyects from '../../Components/Proyects'
import Skills from '../../Components/Skills'
import Home from '../../Components/Home'
function App() {

  return (
    <>
      <div className="">

        <header className=" w-full flex justify-center">
            <Navbar  />
        </header>

        <main>
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
