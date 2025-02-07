import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">Sai Charan Chandra</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navbar Links */}
        <nav className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li><a href="#about" className="text-gray-700 hover:text-blue-500">About</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-blue-500">Skills</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a></li>
            <li><a href="#education" className="text-gray-700 hover:text-blue-500">Education</a></li>
            <li><a href="#certifications" className="text-gray-700 hover:text-blue-500">Certifications</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
