import React from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default App;
