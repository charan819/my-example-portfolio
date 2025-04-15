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
import Experience from "./Experience";

function App() {
  return (
    <div >
      <Header />
      <section id="Home"><Me /></section>
      <section id="about" className="min-h-screen flex flex-col justify-start pt-32 px-4 md:px-16"><About /></section>
      <section id="skills" className="min-h-screen flex flex-col justify-start pt-32 px-4 md:px-16"><Skills /></section>
      <section id="education" className="min-h-screen flex flex-col justify-start pt-32 px-4 md:px-16"><Education /></section>
      <section id="experience" className="min-h-screen flex flex-col justify-start pt-16 px-4 md:px-16"><Experience /></section>
      <section id="projects" className="min-h-screen flex flex-col justify-start pt-8 px-4 md:px-16"><Projects /></section>
      {/* <section id="certifications" className="min-h-screen flex flex-col justify-start scroll-mt-24 py-32 px-4 md:px-16"><Certifications /></section> */}
      <section id="certifications" className="min-h-screen pt-128 px-4 md:px-16"><Certifications /></section>

      <section id="contact" className="min-h-screen flex flex-col justify-start pt-32 px-4 md:px-16"><Contact /></section>

      <Footer />
    </div>
  );
}

export default App;
