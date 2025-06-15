// Update this page (the content is just a fallback if you fail to update the page)

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const typingStrings = [
  "Hi, I’m Zahid.",
  "A Frontend + Python Developer.",
  "I turn ideas into reality!",
];

function useTyping(texts: string[], speed = 64, pause = 1000) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [typePos, setTypePos] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let time: NodeJS.Timeout;
    const currentText = texts[index];
    if (!isDeleting && typePos < currentText.length) {
      time = setTimeout(
        () => setTypePos((pos) => pos + 1),
        speed
      );
    } else if (isDeleting && typePos > 0) {
      time = setTimeout(
        () => setTypePos((pos) => pos - 1),
        speed / 2
      );
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
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-100">
      <Navbar />
      <main className="pt-24 flex flex-col items-center justify-center min-h-[80vh] animate-fade-in">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 text-center animate-enter">
          <span className="text-blue-600">{typing}</span>
          <span className="blinking px-1 text-blue-700 text-2xl align-super">|</span>
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-muted-foreground text-center mb-8">
          Building with Python, React, and a love for clean code.
        </p>
        <a
          href="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition shadow-sm hover:scale-105"
        >
          View My Projects
        </a>
      </main>
    </div>
  );
};

export default Index;
