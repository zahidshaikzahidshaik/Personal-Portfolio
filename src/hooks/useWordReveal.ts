
import { useEffect, useState } from "react";

export function useWordReveal(fullString: string, delay: number = 600) {
  const [current, setCurrent] = useState("");
  const words = fullString.split(" ");
  useEffect(() => {
    let mounted = true;
    let i = 0;
    if (words.length === 0) return;
    setCurrent("");
    function reveal() {
      if (!mounted) return;
      setCurrent(words.slice(0, i + 1).join(" "));
      i++;
      if (i < words.length) {
        setTimeout(reveal, delay);
      }
    }
    reveal();
    return () => {
      mounted = false;
    };
    // Only restart if string changes
    // eslint-disable-next-line
  }, [fullString]);
  return current;
}
