import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-4xl font-bold text-blue-600">Contact Me</h2>

        <p className="mt-4 text-lg text-gray-700">Feel free to reach out to me via email or connect on LinkedIn & GitHub.</p>

        <div className="mt-6 flex justify-center space-x-6">
          <a href="mailto:saicharanchandra0@gmail.com" className="text-blue-600 text-3xl hover:text-blue-800">
            <FaEnvelope />
          </a>
          <a href="https://github.com/charan819" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-3xl hover:text-gray-600">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/charan-ch" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl hover:text-blue-800">
            <FaLinkedin />
          </a>
        </div>

        <a
          href="mailto:saicharanchandra0@gmail.com"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
