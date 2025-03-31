import { motion } from "framer-motion";
import {
  SiPostman,
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux,
  SiVisualstudiocode,
  SiNeovim,
} from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    color: "#00f0ff",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
        level: 90,
      },
      {
        name: "Python",
        icon: <SiPython className="text-blue-400" />,
        level: 85,
      },
      { name: "C", icon: <SiC className="text-gray-400" />, level: 80 },
      {
        name: "C++",
        icon: <SiCplusplus className="text-blue-600" />,
        level: 75,
      },
    ],
  },
  {
    category: "Frontend",
    color: "#00f0ff",
    skills: [
      {
        name: "HTML5",
        icon: <SiHtml5 className="text-orange-500" />,
      },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" />, level: 90 },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
        level: 85,
      },
      { name: "React", icon: <SiReact className="text-blue-400" />, level: 90 },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" />,
        level: 85,
      },
    ],
  },
  {
    category: "Backend & Databases",
    color: "#00f0ff",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500" />,
        level: 85,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-300" />,
        level: 80,
      },
      { name: "Flask", icon: <SiFlask className="text-gray-200" />, level: 75 },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-400" />,
        level: 80,
      },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" />, level: 75 },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "#00f0ff",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" />, level: 90 },
      {
        name: "GitHub",
        icon: <SiGithub className="text-gray-300" />,
        level: 85,
      },
      {
        name: "Postman",
        icon: <SiPostman style={{ color: "#EF5B25" }} size={40} />,
      },
      {
        name: "Linux",
        icon: <SiLinux className="text-yellow-500" />,
        level: 80,
      },
      {
        name: "VS Code",
        icon: <SiVisualstudiocode className="text-blue-500" />,
        level: 95,
      },
      {
        name: "Neovim",
        icon: <SiNeovim className="text-green-500" />,
        level: 70,
      },
    ],
  },
];

const SkillCategory = ({ category, color, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <h3 className="text-2xl font-bold mb-8" style={{ color }}>
      {category}
    </h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1">
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} color={color} />
      ))}
    </div>
  </motion.div>
);

const SkillItem = ({ name, icon }) => (
  <motion.div
    whileHover={{ scale: 1.15 }}
    className="flex flex-col items-center"
  >
    <div className="text-5xl mb-2">{icon}</div>
    <span className="text-gray-300 text-sm font-medium text-center">
      {name}
    </span>
    {/* <div className="w-full mt-2 bg-gray-700 h-1 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div> */}
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-cyan-400">//</span> Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              category={category.category}
              color={category.color}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
