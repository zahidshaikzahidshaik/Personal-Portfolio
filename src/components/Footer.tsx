
import SocialLinks from "./SocialLinks";
import { ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="w-full mt-24">
    {/* CONTACT ME SECTION */}
    <div className="bg-gray-50 dark:bg-slate-900 pt-14 pb-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#6A7324", fontFamily: "'Playfair Display', serif" }}>
        Contact Me
      </h2>
      <SocialLinks />
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
