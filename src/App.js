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
      <Me />
      <section className="pt-20 px-4 md:px-16"><About /></section>
      <section className="pt-20 px-4 md:px-16"><Skills /></section>
      <section className="pt-20 px-4 md:px-16"><Projects /></section>
      <section className="pt-20 px-4 md:px-16"><Education /></section>
      <section className="pt-20 px-4 md:px-16"><Certifications /></section>
      <section className="pt-20 px-4 md:px-16"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
