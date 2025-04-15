import React from "react";

const certifications = [
  {
    title: "Amazon Junior Software Developer",
    issuer: "Amazon",
    date: "April 2025",
  },
  {
    title: "Certified Amazon Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "March 2025",
  },
  {
    title: "Master Java Programming - Complete Beginner to Advanced",
    issuer: "GeeksForGeeks",
    date: "November 2023",
  },
  {
    title: "Cognitive Class - Machine Learning with Python",
    issuer: "IBM",
    date: "February 2023",
  },
  {
    title: "Cognitive Class - Data Science 101",
    issuer: "IBM",
    date: "December 2022",
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle",
    date: "May 2022",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-white text-center">
      <div className="container mx-auto px-6">
        {/* <h2 className="text-3xl text-4xl font-bold text-blue-600">Certifications</h2> */}
        <h2 className="text-4xl font-bold text-blue-600 mb-10 mt-10">Certifications</h2>


        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600">{cert.title}</h3>
              <p className="text-gray-700 mt-2"><strong>Issued By:</strong> {cert.issuer}</p>
              <p className="text-sm text-gray-500 mt-2"><strong>Date:</strong> {cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
