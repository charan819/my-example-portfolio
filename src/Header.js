import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Left Section: Hamburger Menu + Name */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Name (Now Next to Hamburger) */}
          <h1 className="text-white text-xl font-bold tracking-wide">Charan's</h1>
        </div>

      {/* Sidebar Navigation */}
      <nav
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-start items-center px-6 py-4">
          {/* Close Button (✖) */}
          <button onClick={() => setIsOpen(false)} className="text-blue-500 text-3xl mr-11">
            <FaTimes />
          </button>
          <h1 className="text-grey text-xl font-bold tracking-wide">Contents</h1>




        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col space-y-6 mt-6 px-6">
          <li><a href="#home" className="text-lg hover:text-pink-500" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="text-lg hover:text-pink-500" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" className="text-lg hover:text-pink-500" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#education" className="text-lg hover:text-pink-500" onClick={() => setIsOpen(false)}>Education</a></li>
          <li><a href="#experience" className="text-lg hover:text-pink-500" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#projects" className="text-lg hover:text-pink-500" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#certifications" className="text-lg hover:text-pink-500" onClick={() => setIsOpen(false)}>Certifications</a></li>
          <li><a href="#contact" className="text-lg hover:text-pink-500" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
