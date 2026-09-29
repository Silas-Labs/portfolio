import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
