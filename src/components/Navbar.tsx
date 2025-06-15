import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", anchor: "hero" },
  { label: "About", anchor: "about" },
  { label: "Experience", anchor: "experience" },
  { label: "Projects", anchor: "projects" },
  { label: "Resume", anchor: "resume" },
  { label: "Certificates", anchor: "certificates" },
  { label: "Contact", anchor: "contact" },
];

interface NavbarProps {
  onSectionLink?: (id: string) => void;
}

const Navbar = ({ onSectionLink }: NavbarProps) => {
  // Use hash to determine active section on scroll (optional, could be improved)
  const currentHash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "hero";

  return (
    <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-xl bg-white/60 dark:bg-black/40 border-b border-blue-300/20 shadow-[0_4px_24px_rgba(30,64,175,0.08)] rounded-t-2xl">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <span className="font-playfair text-2xl font-extrabold text-blue-800 tracking-tight drop-shadow-md">
          Zahid
        </span>
        <ul className="flex gap-3 md:gap-7 font-semibold text-base">
          {navItems.map((item) => {
            const isActive = (window.location.hash === `#${item.anchor}`) || (!window.location.hash && item.anchor === "hero");
            return (
              <li key={item.anchor} className="relative">
                <a
                  href={`#${item.anchor}`}
                  className={cn(
                    "transition px-2 md:px-4 py-1.5 rounded-lg relative hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900/50",
                    isActive
                      ? "text-blue-800 font-bold"
                      : "text-blue-800 dark:text-blue-100"
                  )}
                  onClick={e => {
                    e.preventDefault();
                    if (onSectionLink) {
                      onSectionLink(item.anchor);
                    } else {
                      const el = document.getElementById(item.anchor);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                    window.location.hash = `#${item.anchor}`;
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-7/12 rounded-full bg-blue-700 dark:bg-blue-400" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
