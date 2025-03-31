import { useEffect, useRef } from "react";
import me from "../assets/yididia.jpg";

const About = () => {
  const signatureRef = useRef(null);

  useEffect(() => {
    const signature = signatureRef.current;
    if (signature) {
      // Animate signature drawing effect
      signature.style.strokeDasharray = signature.getTotalLength();
      signature.style.strokeDashoffset = signature.getTotalLength();
      signature.style.animation = `draw 2s ease-in-out forwards`;
    }
  }, []);

  return (
    <section id="about" className="py-20 scroll-mt-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-sexy font-semibold mb-12 text-center">
          <span className="text-cyan-400">//</span> About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 tracking-wide">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a{" "}
              <span className="font-bold tracking-wide">
                third-year Computer Science student
              </span>{" "}
              and{" "}
              <span className="font-bold tracking-wide">
                ALX Software Engineering graduate
              </span>{" "}
              with a passion for building efficient, scalable systems. My
              journey in tech combines rigorous academic training with hands-on
              experience in both frontend and backend development.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              As an{" "}
              <span className="font-bold tracking-wide">A2SV DSA trainee</span>,
              I've honed my problem-solving skills through competitive
              programming on platforms like{" "}
              <span className="tracking-wide font-bold">LeetCode</span> and{" "}
              <span className="tracking-wide font-bold">Codeforces</span>. I
              thrive on algorithmic challenges and enjoy optimizing solutions
              for peak performance.
            </p>

            <div className="mb-6">
              {/* <h3 className="text-xl font-sexy font-bold italic  mb-3">
                Current Focus:
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded bg-cyan-400 mr-2"></span>
                  Full-Stack Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded bg-cyan-400 mr-2"></span>
                  Data Structures & Algorithms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded bg-cyan-400 mr-2"></span>
                  Backend Architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded bg-cyan-400 mr-2"></span>
                  Open Source Contributions
                </li>
              </ul> */}
            </div>

            <p className="text-gray-300 leading-relaxed tracking-wide">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or mentoring fellow
              developers. I believe in building solutions that are as elegant
              under the hood as they are intuitive to use.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="w-80 h-80 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={me}
                  alt="Yididia Abera's Photo"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-80"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-gray-900 px-3 py-1 rounded font-sexy text-sm group-hover:bg-cyan-400 group-hover:text-gray-900 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
