
import { Mail, Linkedin, Github } from "lucide-react";

const socials = [
  {
    label: "Email",
    href: "mailto:zahid@email.com",
    icon: Mail,
    color: "#3b82f6",
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Github,
    color: "#171515",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: Linkedin,
    color: "#0a66c2",
  },
];

const SocialLinks = () => (
  <div className="flex flex-wrap justify-center gap-5 mt-6 mb-3">
    {socials.map(({ label, href, icon: Icon, color }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="rounded-full bg-sky-300 hover:bg-sky-400 transition-colors duration-200 p-3 shadow-lg inline-flex"
      >
        <Icon size={32} color={color} />
      </a>
    ))}
  </div>
);

export default SocialLinks;

