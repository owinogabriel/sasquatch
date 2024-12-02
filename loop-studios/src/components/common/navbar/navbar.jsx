import React, { useState, useRef } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutIdRef = useRef(null);

  const handleMouseLeave = () => {
    // Clear any existing timeout to avoid stacking calls
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    // Set a timeout to close the menu after 1 second
    timeoutIdRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 1000);
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat mb-0"
      style={{ backgroundImage: "url('/images/desktop/hero.jpg')" }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full text-white">
        {/* Navbar */}
        <header className="flex justify-between items-center p-8">
          {/* Logo */}
          <div className="text-3xl font-bold">loopstudios</div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="text-white text-3xl md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "X" : "☰"}
          </button>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Careers
            </a>
            <a href="#" className="hover:underline">
              Events
            </a>
            <a href="#" className="hover:underline">
              Products
            </a>
            <a href="#" className="hover:underline">
              Support
            </a>
          </nav>

          {/* Mobile Navigation Links */}
          {menuOpen && (
            <nav
              className="absolute top-20 left-0 w-full bg-black bg-opacity-80 p-8 flex flex-col space-y-4 md:hidden"
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Careers
              </a>
              <a href="#" className="hover:underline">
                Events
              </a>
              <a href="#" className="hover:underline">
                Products
              </a>
              <a href="#" className="hover:underline">
                Support
              </a>
            </nav>
          )}
        </header>

        {/* Main Hero Text */}
        <div className="flex items-center justify-center flex-1 px-8">
          <div className="border-2 border-white p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-light leading-tight">
              IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
