
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const typingStrings = [
  "Hi, I’m Zahid.",
  "A Frontend + Python Developer.",
  "I turn ideas into reality!",
];

// Custom hook for typing effect
function useTyping(texts: string[], speed = 64, pause = 1200) {
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
    <div className="relative min-h-screen flex flex-col">
      {/* Animated gradient overlays for modern background */}
      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-white to-blue-300 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_20%,rgba(37,99,235,0.15),transparent_100%)]" />
      </div>
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 md:px-6">
        <section
          className="
            w-full max-w-2xl py-16 md:py-32 px-6 md:px-10
            flex flex-col items-center shadow-2xl
            bg-white/[.93] dark:bg-black/50
            border border-blue-200/60 dark:border-blue-900/60
            backdrop-blur-lg rounded-3xl
            animate-fade-in
            transition-all duration-300
          "
        >
          <h1 className="font-playfair text-4xl sm:text-6xl font-extrabold text-center mb-7 tracking-tight text-blue-800 drop-shadow">
            <span>{typing}</span>
            <span className="blinking px-1 text-blue-700 text-2xl align-super">|</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground text-center mb-8 font-sans px-2">
            Building with{" "}
            <span className="font-semibold text-blue-700">Python</span>,{" "}
            <span className="font-semibold text-blue-700">React</span>, Spark, and SQL &mdash;
            with an eye for clean, impactful code and modern UI.{" "}
            <span className="block md:inline text-sm text-blue-500/90 font-normal mt-2 md:mt-0">
              Let’s create together.
            </span>
          </p>
          <a
            href="/projects"
            className="
              bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-900 hover:to-blue-800
              text-white font-bold px-8 py-3 rounded-xl shadow-lg
              hover:scale-105 hover:shadow-xl
              text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 animate-enter
              mb-2 transition duration-200
            "
          >
            View My Projects
          </a>
          <div className="flex gap-4 mt-6 transition-opacity">
            <a
              href="/about"
              className="text-blue-800 hover:underline underline-offset-2 font-medium text-base"
            >
              About Me
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a
              href="/contact"
              className="text-blue-800 hover:underline underline-offset-2 font-medium text-base"
            >
              Contact
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
