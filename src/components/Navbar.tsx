
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
    <nav className="w-full bg-white/80 dark:bg-black/40 backdrop-blur border-b border-blue-300/30 dark:border-blue-700/40 fixed top-0 left-0 z-30 shadow-md">
      <div className="container flex items-center justify-between mx-auto py-4 px-6">
        <span className="font-playfair font-bold text-2xl text-blue-800 tracking-tight">
          Zahid<span className="text-blue-600">.</span>
        </span>
        <ul className="flex items-center gap-7 font-semibold text-base">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "transition-colors px-3 py-1 rounded-lg hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/40",
                  location.pathname === item.path
                    ? "text-white bg-blue-700 shadow font-bold"
                    : "text-blue-800 dark:text-blue-100"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
