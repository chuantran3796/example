import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import Testimonial from "./components/Testimonials";
import Hero from "./components/Hero";
function App() {
  return (
    <React.Fragment>
      <Hero />
      <Header />
      <div id="main">
        <About />
        <Skills />
        <Resume />
        <Service />
        <Portfolio />
        <Testimonial />
        <Contact />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
