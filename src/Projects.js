import React from "react";

const projects = [
  {
    title: "Personal Goal Tracker (Jira Clone)",
    tech: "React, Node.js, Java, Spring Boot",
    date: "February 2025 - April 2025",
    description:
      "Architected a full-stack Jira-inspired task management system with customizable workflows, drag-and-drop task boards, real-time collaboration for 10+ users, and version tracking across 30+ revisions.",
  },
  {
    title: "Medicine Prescription Tracker",
    tech: "Python, Flask, HTML, CSS, Chart.js",
    date: "December 2024 - February 2025",
    description:
      "Built a cross-platform healthcare management system to track medications, log health metrics, access records across devices, and deliver smart reminders. Included AI-driven health insights, multilingual support, and emergency services integration.",
  },
  {
    title: "Travel Journal App (MERN)",
    tech: "MongoDB, Express.js, React, Node.js, Cloudinary",
    date: "January 2025 - March 2025",
    description:
      "Built a full-stack travel journaling app where users can register/login, write entries with rich text and images, and manage posts securely using JWT authentication. Integrated Cloudinary for image uploads and MongoDB for data persistence.",
  },
  {
    title: "Live Script Compiler",
    tech: "HTML, CSS, JavaScript, GitHub Pages, Ace Editor",
    date: "August 2024 - October 2024",
    description:
      "Built a responsive, web-based code editor with real-time preview, supporting 15+ syntax themes, live editing of 2000-line scripts, and cross-browser compatibility across 6 major browsers.",
  },
  {
    title: "Task Manager Web App",
    tech: "React, Redux Toolkit, Firebase, Tailwind CSS",
    date: "March 2024 - July 2024",
    description:
      "Developed a Kanban-style task manager with real-time Firebase sync, interactive drag-and-drop interface, user roles, and a dashboard visualizing 12+ productivity metrics.",
  },
  {
    title: "Image Cartoonification",
    tech: "CNN, Flask, TensorFlow, Keras",
    date: "January 2023 - April 2023",
    description:
      "Developed a CNN-based model for image cartoonification and style transfer, integrating advanced image processing with PIL and Matplotlib.",
  }
];


const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-4xl font-bold text-blue-600">Projects</h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
              <p className="font-semibold text-gray-600 mt-2">{project.date}</p>
              <p className="text-gray-700 mt-1">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2"><strong>Technologies:</strong> {project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
