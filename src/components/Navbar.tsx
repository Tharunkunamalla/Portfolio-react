import React, {useState, useEffect} from "react";
import {Menu, X, Moon, Sun, Github, Linkedin, Instagram} from "lucide-react";
import {useTheme} from "../context/ThemeContext";

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({activeSection, scrollToSection}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {theme, toggleTheme} = useTheme();

  const navItems = [
    {id: "home", label: "Home"},
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    {id: "projects", label: "Projects"},
    {id: "contact", label: "Contact"},
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-light-100/90 dark:bg-dark-100/90 backdrop-blur-md py-5 md:py-6 shadow-md"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
          onClick={() => handleNavClick("home")}
        >
          <span className="text-secondary-500">T</span>harun
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-lg font-medium transition 
        ${
          activeSection === item.id
            ? "text-secondary-500"
            : "text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
        }
      `}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-500 mt-1" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-7 w-7 text-yellow-400" />
            ) : (
              <Moon className="h-7 w-7 text-gray-700" />
            )}
          </button>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Tharunkunamalla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/tharun-kunamalla-b9b477288/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="https://instagram.com/__tharun_0509.__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-7 w-7" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <Menu className="h-8 w-8 text-gray-700 dark:text-white" />
            ) : (
              <Menu className="h-8 w-8 text-gray-700 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-light-100 dark:bg-dark-100 pt-24 transition-all duration-300">
          {/* X (close) button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-8 w-8 text-gray-800 dark:text-white" />
          </button>
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-2xl font-medium ${
                  activeSection === item.id
                    ? "text-secondary-500"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-8 py-4">
                <a
                  href="https://github.com/Tharunkunamalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-8 w-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tharun-kunamalla-b9b477288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://instagram.com/__tharun_0509.__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
