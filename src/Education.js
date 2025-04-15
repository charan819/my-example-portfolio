import React from "react";

const education = [
  {
    degree: "Master’s in Computer Science",
    school: "University of South Florida",
    year: "August 2023 – May 2025",
    gpa: "GPA: 3.89",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "CVR College of Engineering, India",
    year: "August 2019 – May 2023",
    gpa: "GPA: 8.40",
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-4xl font-bold text-blue-600">Education</h2>

        <div className="mt-6 max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600">{edu.degree}</h3>
              <p className="text-gray-700 mt-2">{edu.school}</p>
              <p className="text-sm text-gray-500 mt-2"><strong>Year:</strong> {edu.year}</p>
              <p className="text-sm text-gray-500"><strong>{edu.gpa}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
