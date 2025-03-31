import {
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) logo

const contacts = [
  {
    icon: <FaLinkedin size={40} className="text-[#0077B5]" />,
    url: "https://www.linkedin.com/in/yididia-abera-a78276266/",
    name: "LinkedIn",
  },
  {
    icon: <FaGithub size={40} className="text-white" />,
    url: "https://github.com/yididiabera",
    name: "GitHub",
  },
  {
    icon: <FaXTwitter size={40} className="text-white" />, // X (Twitter) logo
    url: "https://x.com/yididia_abera",
    name: "X",
  },
  {
    icon: <FaTelegram size={40} className="text-[#0088CC]" />,
    url: "https://t.me/BelovedofJah",
    name: "Telegram",
  },
  {
    icon: <FaInstagram size={40} className="text-[#E4405F]" />,
    url: "https://www.instagram.com/yididii_abera/",
    name: "Instagram",
  },
  {
    icon: <FaEnvelope size={40} className="text-[#D44638]" />, // Email icon (Gmail color)
    url: "mailto:yididiabera@gmail.com",
    name: "Email",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">
        <span className="text-cyan-400">//</span> Let's Connect
      </h2>
      <p className="text-gray-400 mb-6">
        Feel free to reach out to me via any of the platforms below:
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 transition-transform hover:scale-110"
          >
            {contact.icon}
            <span className="text-gray-300 text-sm">{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
