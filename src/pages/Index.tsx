
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 px-4 relative">
        <div
          className="
            w-full max-w-2xl 
            bg-white/70 dark:bg-black/30 shadow-xl rounded-3xl
            border border-blue-100/60 dark:border-blue-950/60
            backdrop-blur-lg
            px-8 py-16
            flex flex-col items-center
            animate-fade-in
          "
        >
          <h1 className="font-playfair text-4xl md:text-6xl font-extrabold text-center mb-6">
            <span className="text-blue-700 drop-shadow-md">{typing}</span>
            <span className="blinking px-1 text-blue-900 text-2xl align-super">|</span>
          </h1>
          <p className="max-w-xl text-base lg:text-lg text-muted-foreground text-center mb-8">
            Building with <span className="font-semibold text-blue-700">Python</span>, <span className="font-semibold text-blue-700">React</span>, and a passion for clean, impactful code. 
          </p>
          <a
            href="/projects"
            className="
              bg-blue-700 hover:bg-blue-900 text-white font-semibold px-8 py-3
              rounded-xl shadow-md transition 
              duration-300 hover:scale-105 hover:shadow-lg
              text-base lg:text-lg
              animate-enter
              focus:outline-none focus:ring-2 focus:ring-blue-600
              mt-2
            "
          >
            View My Projects
          </a>
        </div>
      </main>
    </div>
  );
};

export default Index;
