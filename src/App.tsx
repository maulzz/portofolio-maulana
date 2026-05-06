import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import GithubStats from "./components/GithubStats";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Education />
        <GithubStats />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
