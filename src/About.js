import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-4xl font-bold text-blue-600">About Me</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Developer with a Master’s in Computer Science, looking for opportunities that provide ample learning
          and would help me become a distinguished professional. Enthusiastic about full-stack development of 
          applications that leverage machine learning.
        </p>
        <div className="mt-6 max-w-3xl mx-auto text-left bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-lg"><strong>First Name:</strong> Sai Charan</p>
          <p className="text-lg"><strong>Last Name:</strong> Chandra</p>
          <p className="text-lg"><strong>Date of Birth:</strong> January 21, 2002</p>
          <p className="text-lg"><strong>Job:</strong> Full-Stack Developer</p>
          <p className="text-lg"><strong>Email:</strong> 
            <a href="mailto:saicharanchandra0@gmail.com" className="text-blue-500 hover:underline">
              saicharanchandra0@gmail.com
            </a>
          </p>
          <p className="text-lg"><strong>Interests:</strong> Cricket, Movies</p>
        </div>
      </div>
    </section>
  );
};

export default About;

