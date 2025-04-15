import React from "react";
import Header from "./Header";
import Me from "./Me";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Certifications from "./Certifications";
import Education from "./Education";
import Footer from "./Footer";

function App() {
  return (
    <div >
      <Header />
      <section id="Home"><Me /></section>
      <section id="about" className="min-h-screen flex flex-col justify-start pt-32 px-4 md:px-16"><About /></section>
      <section id="skills" className="min-h-screen flex flex-col justify-start pt-32 px-4 md:px-16"><Skills /></section>
      <section id="education" className="min-h-screen flex flex-col justify-start pt-32 px-4 md:px-16"><Education /></section>
      <section id="projects" className="min-h-screen flex flex-col justify-start pt-32 px-4 md:px-16"><Projects /></section>
      <section id="certifications" className="min-h-screen flex flex-col justify-start pt-32 px-4 md:px-16"><Certifications /></section>
      <section id="contact" className="min-h-screen flex flex-col justify-start pt-32 px-4 md:px-16"><Contact /></section>

      <Footer />
    </div>
  );
}

export default App;
