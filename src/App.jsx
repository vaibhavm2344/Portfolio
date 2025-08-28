import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div >
      <div className="hidden bg-black max-sm:flex-col min-h-screen max-sm:flex justify-center px-6 gap-3">
        <h1 className="text-white text-2xl font-semibold text-center">Go to desktop.</h1>
        <p className="text-white text-2xl text-center">I didn't have time for mobile responsiveness, I have a life.</p>
      </div>

      <div className="max-sm:hidden mx-5">
      
      <Navbar/>
      <div >
        <Home/>
        <Projects/>
        <AboutMe/>
        <Skills/>
        <Contact/>
      </div>
      <Footer/>
      </div>
    </div>
  );
};

export default App;
