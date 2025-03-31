import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = ({ scrolled }) => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2 bg-gray-900/90 backdrop-blur-md shadow-lg" : "py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className={`font-sexy text-xl font-semibold cursor-pointer transition-all ${scrolled ? "text-cyan-400" : "text-white"}`}
        >
          {scrolled ? "Yididia Abera" : "Yididia Abera"}
        </Link>

        <div className="hidden md:flex space-x-8">
          {["about", "skills", "projects", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className={`cursor-pointer uppercase text-sm font-sexy transition-all hover:text-cyan-400 ${activeSection === item ? "text-cyan-400" : "text-gray-300"}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
