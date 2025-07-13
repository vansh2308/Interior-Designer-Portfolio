
import Hero from "./components/Hero"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import ProjectsContainer from "./components/Projects"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <About />
      <Experience />
      <ProjectsContainer />
      <Footer />

    </div>
  )
}

export default App