
import { Github, Linkedin, ArrowUp, Twitter } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/zahidshaikzahidshaik",
    icon: Github,
    color: "#171515",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/zahid.shaik.3114?rdid=ZMFPao1rjPQtc8mM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1L7vj1u2Md%2F#",
    icon: "facebook",
    color: "#0866ff",
  },
  {
    label: "Twitter",
    href: "https://x.com/ZahidSh96544623?t=EAE4jJE0cx12b_T2SG3LSg&s=08",
    icon: Twitter,
    color: "#1DA1F2",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zahid_shaik_56/?igsh=N2hhOHQ0dHE2YnFi#",
    icon: "instagram",
    color: "#e1306c",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shaikzahidhussain",
    icon: Linkedin,
    color: "#0a66c2",
  },
];

const renderIcon = (social: typeof socials[0]) => {
  if (social.icon === "facebook") {
    // SVG for Facebook
    return (
      <svg width={32} height={32} fill={social.color} viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.593 0 0 .592 0 1.326v21.348C0 23.408.593 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.324-.592 1.324-1.326V1.326C24 .592 23.405 0 22.675 0"/>
      </svg>
    );
  }
  if (social.icon === "instagram") {
    // SVG for Instagram
    return (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="none">
        <radialGradient id="instaGradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#feda75"/>
          <stop offset="50%" stopColor="#fa7e1e"/>
          <stop offset="100%" stopColor="#d62976"/>
        </radialGradient>
        <rect width="24" height="24" rx="5" fill="url(#instaGradient)" />
        <path fill="#fff" d="M16.98 2H7.02C4.15 2 2 4.15 2 7.02v9.96C2 19.85 4.15 22 7.02 22h9.96C19.85 22 22 19.85 22 16.98V7.02C22 4.15 19.85 2 16.98 2zM20 16.98A3.02 3.02 0 0 1 16.98 20H7.02A3.02 3.02 0 0 1 4 16.98V7.02A3.02 3.02 0 0 1 7.02 4h9.96A3.02 3.02 0 0 1 20 7.02v9.96z"/>
        <path fill="#fff" d="M12 7.25A4.75 4.75 0 1 0 16.75 12 4.75 4.75 0 0 0 12 7.25zm0 7.75A3 3 0 1 1 15 12a3 3 0 0 1-3 3z"/>
        <circle cx="17.5" cy="6.5" r="1.1" fill="#fff"/>
      </svg>
    );
  }
  const Icon = social.icon as typeof Github;
  return <Icon size={32} color={social.color} />;
};

const Footer = () => (
  <footer className="w-full mt-24">
    {/* Social Links */}
    <div className="bg-gray-50 dark:bg-slate-900 pt-12 pb-5 text-center">
      <h2 className="text-2xl font-bold mb-6" style={{ color: "#6A7324", fontFamily: "'Playfair Display', serif" }}>
        Connect with me
      </h2>
      <div className="flex flex-wrap justify-center gap-5 mt-2 mb-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="rounded-full bg-sky-300 hover:bg-sky-400 transition-colors duration-200 p-3 shadow-lg inline-flex"
          >
            {renderIcon(social)}
          </a>
        ))}
      </div>
      {/* Textual Social Links removed as requested */}
    </div>
    {/* Footer Bar */}
    <div
      className="py-3 px-4 md:px-12 text-sm flex flex-col md:flex-row justify-between items-center border-t-0"
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
        &copy; 2025 Shaik Zahid Hussain
      </span>
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

