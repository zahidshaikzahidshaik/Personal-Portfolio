
import { Mail, Linkedin, Twitter, Instagram, Facebook, ArrowUp } from "lucide-react";

const socials = [
  {
    label: "Email",
    href: "mailto:zahid@email.com",
    icon: Mail,
  },
  // WhatsApp removed as lucide-react does not export it
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: Facebook,
  },
];

const Footer = () => (
  <footer className="w-full mt-24">
    {/* CONTACT ME SECTION */}
    <div className="bg-gray-50 dark:bg-slate-900 pt-14 pb-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#6A7324", fontFamily: "'Playfair Display', serif" }}>
        Contact Me
      </h2>
      <div className="flex flex-wrap justify-center gap-5 mb-3">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="rounded-full bg-sky-300 hover:bg-sky-400 transition-colors duration-200 p-4 md:p-4 shadow-lg"
            style={{ display: "inline-flex" }}
          >
            <Icon size={32} color="white" />
          </a>
        ))}
      </div>
    </div>
    {/* FOOTER BAR */}
    <div
      className="py-2 px-4 md:px-12 text-sm flex flex-col md:flex-row justify-between items-center border-t-0"
      style={{
        background: "#222933",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        boxShadow: "0 0 0 2px #ddd",
        position: "relative",
      }}
    >
      {/* Gradient Top Border */}
      <div
        style={{
          height: "5px",
          width: "100%",
          background:
            "linear-gradient(90deg, #ff4b87 0%, #ffa34b 33%, #faff5e 66%, #54ff8a 100%)",
          position: "absolute",
          top: 0,
          left: 0,
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <span className="z-10 mt-2 md:mt-0 text-white font-semibold">
        &copy; 2024 <span className="ml-1" style={{ color: "#12ccc8" }}>Sohaib Hussain Pathan</span>
      </span>
      <div className="flex items-center gap-3 mt-2 md:mt-0 z-10">
        <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <Facebook size={24} color="#3b82f6" />
        </a>
        <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <Twitter size={24} color="#38bdf8" />
        </a>
        <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} color="#e1306c" />
        </a>
        <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} color="#0a66c2" />
        </a>
      </div>
      {/* Back To Top Button */}
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400 hover:border-cyan-500 bg-white w-10 h-10 flex items-center justify-center shadow-md z-20"
        style={{ outline: "none" }}
      >
        <ArrowUp color="#12ccc8" size={28} />
      </button>
    </div>
  </footer>
);

export default Footer;

