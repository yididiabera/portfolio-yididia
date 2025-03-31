import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ThreeDCardDemo from "./components/ThreeDCardDemo";
import GridOverlay from "./components/GridOverlay";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      {/* Subtle grid overlay for tech vibe */}
      <div className="fixed inset-0 bg-black -z-50">
        <GridOverlay gridSize={24} opacity={0.05} animated={true} />
      </div>

      {/* Sticky navbar that morphs on scroll */}
      <Navbar scrolled={scrolled} />

      <main className="container mx-auto px-4 pb-20">
        <Hero />
        {/* <ThreeDCardDemo /> */}
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Cyberpunk Portfolio. All systems
          nominal.
        </p>
      </footer>
    </div>
  );
}

export default App;
