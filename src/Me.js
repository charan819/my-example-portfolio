import React from "react";
import profilePic from "./profile.jpg"; // ✅ Import Profile Picture
import bgImage from "./nobody.jpg"; // ✅ Import Background Image
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // ✅ Import Icons

const Me = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6"
      style={{
        backgroundImage: `url(${bgImage})`,  // ✅ Background Image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Profile Picture (Left Side) */}
      <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg bg-gray-300 flex justify-center items-center">
        <img
          src={profilePic}  // ✅ Profile Picture
          alt="Sai Charan Chandra"
          className="w-full h-full object-cover border-3 border-white shadow-2xl shadow-gray-500"
        />
      </div>

      {/* Text Content (Right Side) */}
      <div className="relative z-10 md:ml-10 mt-6 md:mt-0 bg-red-900 bg-opacity-60 p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-white">Hello, People</h2>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white animate-pulse">Sai Charan Chandra</h1>
        <p className="text-xl text-white mt-4 animate-bounce">| Full-Stack Developer | JAVA |</p>
      </div>

      {/* Social Links (At the Bottom of Home Page) */}
      <div className="absolute bottom-10 flex space-x-6">
        {/* GitHub */}
        <a
          href="https://github.com/charan819"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/charan-ch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-3xl hover:text-blue-700 transition"
        >
          <FaLinkedin />
        </a>

        {/* Email */}
        <a
          href="mailto:saicharanchandra0@gmail.com"
          className="text-orange-100 text-3xl hover:text-red-700 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Me;
