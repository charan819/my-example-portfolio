import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-32 px-4 md:px-16 bg-white">
  <h2 className="text-4xl font-bold text-blue-600 mb-16 text-center">Experience</h2>

  <div className="container mx-auto px-6 bg-gray-100 shadow-xl rounded-xl p-10">
    <div className="grid grid-cols-12 gap-6">

      {/* Left: 30% */}
      <div className="col-span-12 md:col-span-4 border-r border-gray-300 pr-6 flex items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">BlueJeans | Intern</h3>
          <p className="text-sm text-gray-500 mt-2">Bangalore, India</p>
          <p className="text-sm text-gray-500">January 2022 – December 2022</p>
        </div>
      </div>

      {/* Right: 70% */}
      <div className="col-span-12 md:col-span-8 pl-6">
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-base leading-relaxed">
          <li>
            Implemented 30+ RESTful APIs for Indigo data analytics center and achieved 98% test coverage of more than 80% of the code base within first 2 months.
          </li>
          <li>
            Engineered critical components of the Indigo pipeline to process 1000+ daily traceroutes and endpoint feedback events, utilizing Spring and PostgreSQL with 99.9% reliability.
          </li>
          <li>
            Developed a generic wrapper using Spring Data JPA that supported 25+ unique filter combinations, reducing query processing time by 35% on dashboard analytics.
          </li>
          <li>
            Implemented custom distributed tracing across 6 microservices with unique tracking IDs, decreasing production debugging time by 40% and improving cross-system event visibility by 75%.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>


  );
};

export default Experience;
