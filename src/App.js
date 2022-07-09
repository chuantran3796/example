import React, { useRef } from "react";
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
  const _sections = [
    {
      id: 1,
      name: "About",
      section: <About ref={useRef(null)} name="About" />,
    },
    {
      id: 2,
      name: "Skills",

      section: <Skills ref={useRef(null)} name="Skills" />,
    },
    {
      id: 3,
      name: "Resume",

      section: <Resume ref={useRef(null)} name="Resume" />,
    },
    {
      id: 4,
      name: "Service",

      section: <Service ref={useRef(null)} name="Service" />,
    },
    {
      id: 5,
      name: "Portfolio",
    
      section: <Portfolio ref={useRef(null)} name="Portfolio" />,
    },
    {
      id: 6,
      name: "Testimonial",

      section: <Testimonial ref={useRef(null)} name="Testimonial" />,
    },
    {
      id: 7,
      name: "Contact",
      section: <Contact ref={useRef(null)} name="Contact" />,
    },
  ];
  return (
    <React.Fragment>
      <Hero />
      <Header menus={_sections} />
      <div id="main">
        {_sections.map((section) => (
          <React.Fragment key={section.id}>{section.section}</React.Fragment>
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
