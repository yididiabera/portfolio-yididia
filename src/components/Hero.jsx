import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import BlurText from "./BlurText";
const Hero = () => {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 0.5) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background: `linear-gradient(${gradientPosition}deg,rgb(0, 0, 0),rgb(2, 21, 22),rgb(73, 9, 69),rgb(5, 0, 0))`,
          backgroundSize: "300% 300%",
          animation: "gradientShift 15s ease infinite",
        }}
      ></div>

      <div className="relative z-10 text-center px-4">
        {/* Animated Heading */}
        <BlurText
          text="Hello, I'm Yididia Abera"
          delay={700}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-6xl font-sexy font-semibold mb-4 text-white"
        />

        <div className="h-12 md:h-16 mb-8">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "Open Source Enthusiast",
              2000,
              "Backend Engineer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-xl md:text-3xl font-sexy text-cyan-400"
            style={{ display: "inline-block" }}
          />
        </div>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10 text-lg">
          A passionate developer focused on solving problems and building
          innovative solutions with clean code, meaningful contributions, and
          aesthetic design.
        </p>

        {/* <button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="relative group"
        >
          <span className="absolute inset-0 bg-cyan-500 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative px-8 py-3 bg-gray-900 rounded-lg border border-cyan-400 text-cyan-400 font-sexy uppercase text-sm tracking-wider group-hover:bg-cyan-400 group-hover:text-gray-900 transition-all duration-300">
            View My Work
          </span>
        </button> */}

        <div className="mt-20 animate-bounce">
          <svg
            className="w-10 h-20 mx-auto text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
