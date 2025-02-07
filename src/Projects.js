import React from "react";

const projects = [
  {
    title: "Image Cartoonification",
    tech: "CNN, Flask, TensorFlow, Keras",
    description: "Developed a CNN-based model for image cartoonification and style transfer, integrating advanced image processing with PIL and Matplotlib.",
  },
  {
    title: "Comprehensive OS Enhancement",
    tech: "C, xv6, Unix, Virtual Memory, Scheduling",
    description: "Implemented advanced scheduling algorithms in xv6, added Unix command replicas, and improved memory management.",
  },
  {
    title: "Deep Learning Applications",
    tech: "Python, TensorFlow, PyTorch, CNN, RNN, LSTM",
    description: "Developed deep neural networks for time-series prediction, image classification, and robotic action sequence engineering.",
  },
  {
    title: "Social Media Mining",
    tech: "Python, Jupyter Notebook, Machine Learning",
    description: "Developed ML models to predict user behavior and automate sentiment analysis on social media data.",
  },
  {
    title: "Twitter Disaster Analysis",
    tech: "Python, NLP, TensorFlow, Scikit-learn",
    description: "Built an NLP model to classify disaster-related tweets, improving real-time disaster response efforts.",
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
              <h3 className="text-2xl font-semibold text-blue-600">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2"><strong>Technologies:</strong> {project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
