import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const navItems = ["about", "projects", "skills", "contact"];
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbarToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border w-screen  ">
      <div className="max-w-6xl mx-auto px-4 sm:px6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo  */}
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text mt-3 text-transparent">
            <a href="#hero">Mohamed</a>
          </div>

          {/* Desktop Navigation  */}
          <nav>
            <div className=" gap-8 hidden md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-sm capitalize font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
          <button
            className="md:hidden hover:bg-card p-2 rounded-lg transition-colors text-white"
            onClick={(e) => handleNavbarToggle(e)}
          >
            {isOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile  */}
      {isOpen && (
        <div className="md:hidden pb-4  space-y-3  ">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-4 py-2   capitalize font-medium text-foreground/70 hover:bg-card hover:text-primary duration-300 transition-colors rounded-lg"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
