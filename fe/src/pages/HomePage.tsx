import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutStrip from "../components/AboutStrip";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import GithubStats from "../components/GithubStats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-canvas text-ink selection:bg-primary selection:text-on-primary">
      <Navbar />
      <main>
        <Hero />
        <AboutStrip />
        <Projects />
        <Skills />
        <Education />
        <GithubStats />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
