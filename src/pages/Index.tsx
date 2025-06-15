
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const typingStrings = [
  "Hi, I'm Zahid.",
  "A Modern Developer.",
  "I turn ideas into reality.",
];

// Custom hook for typing effect
function useTyping(texts: string[], speed = 66, pause = 1200) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [typePos, setTypePos] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let time: NodeJS.Timeout;
    const currentText = texts[index];
    if (!isDeleting && typePos < currentText.length) {
      time = setTimeout(() => setTypePos((pos) => pos + 1), speed);
    } else if (isDeleting && typePos > 0) {
      time = setTimeout(() => setTypePos((pos) => pos - 1), speed / 2);
    } else if (!isDeleting && typePos === currentText.length) {
      time = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && typePos === 0) {
      setIsDeleting(false);
      setIndex((idx) => (idx + 1) % texts.length);
    }
    setDisplay(currentText.slice(0, typePos));
    return () => clearTimeout(time);
  }, [typePos, isDeleting, texts, index, speed, pause]);

  return display;
}

const Index = () => {
  const typing = useTyping(typingStrings);

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-black dark:via-slate-900 dark:to-blue-900">
      {/* Animated Fine Blob Overlay */}
      <div aria-hidden className="absolute -top-44 -right-36 sm:-top-52 sm:-right-44 md:right-0 w-[520px] h-[420px] rounded-full bg-gradient-to-br from-blue-400/20 via-blue-300/25 to-indigo-300/20 blur-3xl opacity-80 pointer-events-none z-0" />
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-28 pb-10 px-4 z-10">
        <section
          className="
            w-full max-w-2xl py-16 md:py-24 px-7 md:px-12
            flex flex-col items-center bg-white/95 dark:bg-black/60
            border border-blue-200/60 dark:border-blue-900/60
            shadow-2xl rounded-3xl animate-fade-in
          "
        >
          <h1 className="font-playfair text-5xl md:text-6xl font-extrabold text-center mb-7 tracking-tight text-blue-800 drop-shadow-sm">
            <span>{typing}</span>
            <span className="blinking px-1 text-blue-700 text-2xl align-super">|</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-200 text-center mb-8 font-sans px-2">
            Building <span className="font-semibold text-blue-700">Frontend</span> & <span className="font-semibold text-blue-700">Backend</span>—clean UI, data-driven solutions, and modern web experiences.
            <span className="block md:inline text-sm text-blue-500/90 font-normal mt-2 md:mt-0">
              Let&apos;s create something great.
            </span>
          </p>
          <Link
            to="/projects"
            className="
              bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-900 hover:to-blue-700
              text-white font-bold px-8 py-3 rounded-xl shadow-lg
              hover:scale-105 hover:shadow-xl
              text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 animate-enter
              mb-2 transition duration-200
            "
          >
            View My Projects
          </Link>
          <div className="flex gap-4 mt-6">
            <Link
              to="/about"
              className="text-blue-800 underline underline-offset-4 font-medium text-base hover:text-blue-900 transition"
            >
              About Me
            </Link>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link
              to="/contact"
              className="text-blue-800 underline underline-offset-4 font-medium text-base hover:text-blue-900 transition"
            >
              Contact
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
