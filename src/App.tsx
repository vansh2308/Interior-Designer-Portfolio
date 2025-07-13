
import Hero from "./components/Hero"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import ProjectsContainer from "./components/Projects"

function App() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <About />
      <Experience />
      <ProjectsContainer />
      <section className="w-screen h-screen bg-white" />
    </div>
  )
}

export default App