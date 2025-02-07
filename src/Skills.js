import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-4xl font-bold text-blue-600">Technical Skills</h2>

        <div className="mt-6 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg">
          <div className="bg-white p-4 shadow-md rounded-lg">Java</div>
          <div className="bg-white p-4 shadow-md rounded-lg">SQL</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Python</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Unity</div>
          <div className="bg-white p-4 shadow-md rounded-lg">XV6</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
