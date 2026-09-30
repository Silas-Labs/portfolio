import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"
import Resume from "./sections/Resume"
import Hobbies from "./sections/Hobbies"
import Articles from "./sections/Articles"
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
        <Resume />
        <Hobbies />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
