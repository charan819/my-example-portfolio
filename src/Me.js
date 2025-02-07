import React from "react";

const Me = () => {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      <h1 className="text-3xl text-5xl font-extrabold text-blue-600">Sai Charan Chandra</h1>
      <p className="text-xl text-gray-700 mt-4">Full-Stack Developer</p>
      <a
        href="#contact"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Me;
