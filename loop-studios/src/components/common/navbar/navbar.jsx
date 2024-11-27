import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseLeave = () => {
    // Set a timeout to close the menu after 1 seconds (1000ms)
    const id = setTimeout(() => {
      setMenuOpen(false);
    }, 1000);

    setTimeoutId(id);
  };

  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat mb-[0rem]" style={{ backgroundImage: "url('/images/desktop/hero.jpg')" }}>
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full text-white">
        {/* Navbar */}
        <header className="flex justify-between items-center p-8">
          {/* Logo */}
          <div className="text-3xl font-bold logo">
            loopstudios
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} >
            <button className="text-white text-3xl btn">
              {menuOpen ? 'X' : '☰'}
            </button>
          </div>



          {/* Navigation Links (hidden on mobile and visible on medium and larger screens) */}
          <nav className=" group hidden md:flex md:relative md:flex-row space-x-8 md:items-center md:bg-transparent">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Events</a>
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">Support</a>
          </nav>

          {/* Mobile Navigation Links (visible only when the hamburger is clicked) */}
          <nav className={`flex-col items-start space-y-4 absolute top-20 left-0 w-full bg-black bg-opacity-80 p-8 md:hidden ${menuOpen ? 'flex' : 'hidden'}`} onMouseLeave={handleMouseLeave}  // Close the menu when mouse leaves the mobile menu
          >
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Events</a>
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">Support</a>
          </nav>
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
