import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import apollo from "../assets/apollo.png";
import blog from "../assets/blog.png";
import student from "../assets/student.png";

const Projects = () => {
  const projects = [
    {
      title: "Chronicles",
      description:
        "Chronicles is a simple and elegant blog platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, edit, and share blog posts while focusing on clean design and an intuitive user experience. Features include user authentication, role-based access, responsive design, third-party API integration, and customizable themes.",
      tags: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "bcrypt.js",
      ],
      image: blog, // Replace 'chronicles' with your actual image variable or path
      links: {
        demo: "#",
        github: "https://github.com/yididiabera/Chronicles",
      },
    },

    {
      title: "ApolloLironRecs",
      description:
        "ApolloLironRecs is a web application that provides personalized music recommendations using the Spotify API. It features a user-friendly design, allowing users to search for tracks, explore various genres, select their favorite genres for tailored suggestions, access detailed track information, and listen to songs directly via Spotify.",
      tags: ["React", "Tailwind CSS", "Python", "Spotify API"],
      image: apollo,
      links: {
        demo: "#",
        github: "https://github.com/yididiabera/ApolloLironRecs",
      },
    },

    {
      title: "Student Budget Planner",
      description:
        "Student Budget Planner is a web and mobile application collaboratively developed with my teammates during the GDG AAU 30-Hour Innovation Challenge. It empowers students to take control of their finances with features like real-time expense tracking, smart alerts for overspending, AI-powered financial insights, and cross-platform availability. Our team placed 3rd in the hackathon for this innovative and impactful project!",
      tags: [
        "React",
        "Tailwind CSS",
        "Go",
        "Flutter",
        "Next.js",
        "PostgreSQL",
        "AI",
      ],
      image: student,
      links: {
        demo: "#",
        github: "https://github.com/GDGAAU/student_budget_planner",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-cyan-400">//</span> Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-900 relative group/card border border-gray-700 w-full h-full rounded-xl p-6 hover:shadow-2xl hover:shadow-cyan-400/[0.1] transition-all">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-300 text-sm max-w-sm mt-2 tracking-wide"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover rounded-xl"
                  />
                </CardItem>

                <div className="flex flex-wrap gap-2 mt-6 p-3">
                  {project.tags.map((tag, i) => (
                    <CardItem
                      key={i}
                      translateZ={20}
                      className="px-3 py-1.5 bg-gray-800 text-white text-xs rounded-xl"
                    >
                      {tag}
                    </CardItem>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                  {project.links.demo && (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.links.demo}
                      target="_blank"
                      className="px-4 py-2 rounded-xl border border-cyan-400 text-cyan-400  text-xs font-bold flex items-center gap-1"
                    >
                      <FiExternalLink /> Demo
                    </CardItem>
                  )}
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.links.github || "#"}
                    target="_blank"
                    className="px-4 py-2 rounded-xl border border-cyan-400 text-cyan-400 text-xs font-bold flex items-center gap-1"
                  >
                    <SiGithub /> Code
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
