import React from "react";

export const Footer = () => {
  return (
    <section className="bg-black py-6">
  
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
      
        <div className="text-white">
      
          <h1 className="text-3xl font-bold sm:text-center md:text-justify">loopstudios</h1>

          {/* Navigation Links */}
          <nav className="mt-4 sm:grid">
            <ul className="md:flex sm:grid md:flex-wrap gap-4 md:gap-8 text-sm sm:text-center">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section: Social Media and Copyright */}
        <div className="mt-8 md:mt-0 text-white text-center md:text-right">
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end gap-4 ">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline-offset-2"
            >
              <img src="images/facebook.svg" alt="Facebook" className="w-6" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/twitter.svg" alt="Twitter" className="w-6" />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/pinterest.svg" alt="Pinterest" className="w-6" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/instagram.svg" alt="Instagram" className="w-6" />
            </a>
          </div>

          {/* Copyright */}
          <footer className="text-gray-500 text-sm mt-4">
            &copy; 2021 Loopstudios. All rights reserved.
          </footer>
        </div>
      </div>
    </section>
  );
};
