import { useState } from "react";

const ProjectCard = ({ title, description, tags, image, links }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: (y - centerY) / 20,
      y: (centerX - x) / 20,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleClick = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  };

  return (
    <div
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className={`relative overflow-hidden rounded-lg border border-gray-700 transition-all duration-300 ${isGlitching ? "animate-glitch" : ""}`}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          boxShadow: `${tilt.y * 2}px ${tilt.x * 2}px 15px rgba(0, 240, 255, 0.1)`,
        }}
      >
        {/* Project image placeholder */}
        <div className="h-48 bg-gray-800 flex items-center justify-center">
          <div className="text-gray-500">{image || "Project Image"}</div>
        </div>

        <div className="p-6 bg-gray-900/80 backdrop-blur-sm">
          <h3 className="text-xl font-sexy mb-2 text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-400 text-gray-900 text-sm font-sexy rounded hover:bg-cyan-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-sexy rounded hover:bg-cyan-400 hover:text-gray-900 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Neon border effect */}
        <div className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden">
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 opacity-0 group-hover:opacity-50 blur-sm group-hover:animate-pulse transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Neon Dashboard",
      description:
        "A sleek admin dashboard with cyberpunk aesthetics and real-time data visualization.",
      tags: ["React", "Tailwind", "D3.js", "WebSockets"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "CyberTerminal",
      description:
        "A web-based terminal emulator with custom commands and cyberpunk styling.",
      tags: ["JavaScript", "CSS", "Node.js"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Synthwave Player",
      description:
        "Music player with visualizer and synthwave theme. Responsive and accessible.",
      tags: ["React", "Web Audio API", "Canvas"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "AR Cityscape",
      description:
        "Augmented reality experience overlaying cyberpunk elements on real-world views.",
      tags: ["Three.js", "AR.js", "WebXR"],
      links: {
        github: "#",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-sexy font-semibold mb-12 text-center">
          <span className="text-magenta-400">//</span> Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
