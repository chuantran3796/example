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
      id: 0,
      name: "Home",
      tab: "home",
      section: <Hero ref={useRef(null)} name="About" />,
    },
    {
      id: 1,
      name: "About",
      tab: "about",
      section: <About ref={useRef(null)} name="About" />,
    },
    {
      id: 2,
      name: "Skills",
      tab: "skills",
      section: <Skills ref={useRef(null)} name="Skills" />,
    },
    {
      id: 3,
      name: "Resume",
      tab: "resume",
      section: <Resume ref={useRef(null)} name="Resume" />,
    },
    {
      id: 4,
      name: "Service",
      tab: "service",
      section: <Service ref={useRef(null)} name="Service" />,
    },
    {
      id: 5,
      name: "Portfolio",
      tab: "portfolio",
      section: <Portfolio ref={useRef(null)} name="Portfolio" />,
    },
    {
      id: 6,
      name: "Testimonial",
      tab: "testimonial",
      section: <Testimonial ref={useRef(null)} name="Testimonial" />,
    },
    {
      id: 7,
      name: "Contact",
      tab: "contact",
      section: <Contact ref={useRef(null)} name="Contact" />,
    },
  ];
  return (
    <React.Fragment>
      <Header menus={_sections} />
      {_sections.map((section) => (
        <React.Fragment key={section.id}>{section.section}</React.Fragment>
      ))}
      <Footer />
    </React.Fragment>
  );
}

export default App;
