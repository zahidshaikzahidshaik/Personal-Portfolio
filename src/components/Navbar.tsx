
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-xl bg-white/60 dark:bg-black/40 border-b border-blue-300/20 shadow-[0_4px_24px_rgba(30,64,175,0.08)]">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <span className="font-playfair text-2xl font-extrabold text-blue-800 tracking-tight drop-shadow-md">
          Zahid
        </span>
        <ul className="flex gap-3 md:gap-7 font-semibold text-base">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "transition px-2 md:px-4 py-1.5 rounded-lg relative hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900/50",
                  location.pathname === item.path
                    ? "bg-blue-700 text-white font-bold shadow-md"
                    : "text-blue-800 dark:text-blue-100"
                )}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 rounded-full bg-blue-300 dark:bg-blue-600 animate-fade-in" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
