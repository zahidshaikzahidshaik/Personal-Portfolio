
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Certificates", path: "/certificates" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-white/70 backdrop-blur border-b border-border fixed top-0 left-0 z-20">
      <div className="container flex items-center justify-between mx-auto py-3 px-4">
        <span className="font-playfair font-bold text-xl text-primary">
          Zahid<span className="text-blue-600">.</span>
        </span>
        <ul className="flex items-center gap-6 font-medium text-base">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "transition-colors hover:text-blue-600 px-2 py-1 rounded",
                  location.pathname === item.path
                    ? "text-blue-600 font-semibold"
                    : "text-foreground"
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
