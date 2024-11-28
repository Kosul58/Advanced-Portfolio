import { useRef } from "react";
import "./App.css";
import Home from "./assets/Frontend/Home.jsx";
import Navbar from "./assets/Frontend/navbar.jsx";
import About from "./assets/Frontend/about.jsx";
import Experience from "./assets/Frontend/experience.jsx";
import Projects from "./assets/Frontend/Projects.jsx";
import Contact from "./assets/Frontend/Contact.jsx";

function App() {
  // Create refs for each section
  const homeref = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Array of refs
  const sectionRefs = [
    aboutRef,
    projectsRef,
    experienceRef,
    contactRef,
    homeref,
  ];

  // Function to scroll to the specified section
  const scrollToAbout = (index) => {
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToAbout={scrollToAbout} />
      <div ref={homeref}>
        <Home scrollToAbout={scrollToAbout} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;
