import { useRef } from "react";
import Navbar from "@/components/Navbar";
import About from "@/pages/about";
import Experience from "@/pages/experience";
import Projects from "@/pages/projects";
import Certificates from "@/pages/certificates";
import Resume from "@/pages/resume";
import Contact from "@/pages/contact";
import { useWordReveal } from "@/hooks/useWordReveal";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const LandingSinglePage = () => {
  const animatedText = useWordReveal("Hi, I'm Shaik Zahid Hussain.");

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-black dark:via-slate-900 dark:to-blue-900 pb-0">
      <Navbar onSectionLink={scrollToSection} />
      {/* HERO SECTION */}
      <section id="hero" className="relative w-full pt-24 pb-10 px-4 flex justify-center items-center min-h-[65vh] overflow-hidden">
        {/* Soft Blurred Gradient Blob */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full
            w-[60vw] h-[55vw] md:w-[38vw] md:h-[32vw] bg-gradient-to-r from-blue-300/60 via-purple-200/50 to-yellow-100/60
            blur-3xl opacity-70 pointer-events-none animate-fade-in"
          style={{ filter: 'blur(64px)', minWidth: 330, minHeight: 200 }}
          aria-hidden="true"
        />
        <div className="max-w-2xl w-full text-center flex flex-col items-center justify-center relative z-10">
          <h1 className="font-playfair text-5xl md:text-6xl text-blue-800 font-extrabold mb-7 tracking-tight drop-shadow-sm min-h-[3.5rem]">
            {animatedText}
          </h1>
          <p className="max-w-2xl text-lg text-blue-700 mb-7 font-semibold">
            a web developer | Python | MySQL | React.js
          </p>
          <a
            href="#about"
            className="
              bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-900 hover:to-blue-700
              text-white font-bold px-8 py-3 rounded-xl shadow-lg
              hover:scale-105 hover:shadow-xl
              text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 animate-enter
              mb-2 transition duration-200
              "
          >
            Explore
          </a>
        </div>
      </section>
      <section id="about" className="scroll-mt-20 py-12"><About /></section>
      <section id="experience" className="scroll-mt-20 py-12"><Experience /></section>
      <section id="projects" className="scroll-mt-20 py-12"><Projects /></section>
      <section id="certificates" className="scroll-mt-20 py-12"><Certificates /></section>
      <section id="resume" className="scroll-mt-20 py-12"><Resume /></section>
      <section id="contact" className="scroll-mt-20 py-12"><Contact /></section>
      {/* Footer removed – now globally rendered in App.tsx */}
    </div>
  );
};

export default LandingSinglePage;
