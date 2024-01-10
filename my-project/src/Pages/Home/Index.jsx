import '../../App.css'
import About from '../../Components/About'
import Navbar from '../../Components/Navbar'
import FooterWeb from '../../Components/Footer'
import Contact from '../../Components/Contact'
import Proyects from '../../Components/Proyects'
import Skills from '../../Components/Skills'
function App() {

  return (
    <>
      <div className="">

        <header>
            <Navbar  />
        </header>

        <main>
          {/* <Home id="home" /> */}
          <About id="about" />
          <Skills id="sliks" />
          <Proyects id="proyects" />
          <Contact id="contact" />
        </main>

        <FooterWeb />

      </div>
    </>
  )
}

export default App
