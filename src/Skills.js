import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 text-center">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl text-4xl font-bold text-blue-600">Technical Skills</h2>

    <div className="mt-6 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-lg">
      {/* Languages */}
      <div className="bg-white p-4 shadow-md rounded-lg">Java</div>
      <div className="bg-white p-4 shadow-md rounded-lg">JavaScript</div>
      <div className="bg-white p-4 shadow-md rounded-lg">SQL</div>
      <div className="bg-white p-4 shadow-md rounded-lg">HTML5</div>
      <div className="bg-white p-4 shadow-md rounded-lg">CSS3</div>
      <div className="bg-white p-4 shadow-md rounded-lg">Python</div>

      {/* Frameworks & Libraries */}
      <div className="bg-white p-4 shadow-md rounded-lg">React.js</div>
      <div className="bg-white p-4 shadow-md rounded-lg">Redux</div>
      <div className="bg-white p-4 shadow-md rounded-lg">Spring Boot</div>
      <div className="bg-white p-4 shadow-md rounded-lg">Node.js</div>
      <div className="bg-white p-4 shadow-md rounded-lg">Tailwind CSS</div>

      {/* Database & Tools */}
      <div className="bg-white p-4 shadow-md rounded-lg">Firebase</div>
      <div className="bg-white p-4 shadow-md rounded-lg">MySQL</div>
      <div className="bg-white p-4 shadow-md rounded-lg">PostgreSQL</div>
      <div className="bg-white p-4 shadow-md rounded-lg">Git</div>
      <div className="bg-white p-4 shadow-md rounded-lg">AWS</div>
      <div className="bg-white p-4 shadow-md rounded-lg">RESTful APIs</div>

      {/* IDEs & Development */}
      <div className="bg-white p-4 shadow-md rounded-lg">VS Code</div>
      <div className="bg-white p-4 shadow-md rounded-lg">IntelliJ IDEA</div>
      <div className="bg-white p-4 shadow-md rounded-lg">GitHub</div>
      <div className="bg-white p-4 shadow-md rounded-lg">Jira</div>
      <div className="bg-white p-4 shadow-md rounded-lg">Agile/Scrum</div>
    </div>
  </div>
</section>

  );
};

export default Skills;
