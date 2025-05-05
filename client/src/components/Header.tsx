import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }} 
            className="text-xl font-bold font-poppins"
          >
            <span className="dark:text-white">Shasi</span>
            <span className="text-primary-500">Kiran</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              // Home page navigation - scroll to sections
              <>
                {["home", "about", "projects", "experience", "contact"].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                    className="nav-link font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 relative"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                ))}
                <Link href="/blog">
                  <span className="cursor-pointer nav-link font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 relative">
                    Blog
                  </span>
                </Link>
              </>
            ) : (
              // Other pages - link back to home and sections
              <>
                <Link href="/">
                  <span className="cursor-pointer nav-link font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 relative">
                    Home
                  </span>
                </Link>
                <Link href="/blog">
                  <span className={`cursor-pointer nav-link font-medium ${location.startsWith('/blog') ? 'text-primary-500 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'} relative`}>
                    Blog
                  </span>
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden px-4 pb-4 bg-white dark:bg-gray-900 shadow-md ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {isHomePage ? (
          // Home page navigation for mobile
          <>
            {["home", "about", "projects", "experience", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <Link href="/blog">
              <span 
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer"
                onClick={closeMobileMenu}
              >
                Blog
              </span>
            </Link>
          </>
        ) : (
          // Other pages navigation for mobile
          <>
            <Link href="/">
              <span 
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer"
                onClick={closeMobileMenu}
              >
                Home
              </span>
            </Link>
            <Link href="/blog">
              <span 
                className={`block py-2 cursor-pointer ${
                  location.startsWith('/blog') 
                    ? 'text-primary-500 dark:text-primary-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                }`}
                onClick={closeMobileMenu}
              >
                Blog
              </span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
