import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [state, setState] = useState("Home");
  const [blockScroll, setBlockScroll] = useState(false);

  useEffect(() => {
    
    const hash = window.location.hash.replace("#", "");
     setBlockScroll(true);
    if (hash) {
      setState(hash);
    } else {
      setState("Home");
    }

     const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setState(entry.target.id); 
          window.history.replaceState(null, null, `#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    setTimeout(() => {
    setBlockScroll(false);
  }, 800); 
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };


  }, []);


  return (
    <div className="flex justify-around gap-4 border border-neutral-500/50 px-4 py-2 rounded-full items-center max-sm:w-[100px] md:w-[620px]">
      <a
        href="#"
        className={`px-4 py-1 ${
          state === "home"
            ? 'border border-neutral-300 rounded-full backdrop-blur-lg bg-white/30 shadow-lg shadow-white/10 font-medium translate-y-6 transition-all duration-300'
            : ""
        }`}
        onClick={() => blockScroll && setState("home")}
      >
        Home
      </a>
      <a
        href="#projects"
        className={`px-4 py-1 ${
          state === "projects"
            ? 'border border-neutral-300 rounded-full backdrop-blur-lg bg-white/30 shadow-lg shadow-white/10 font-medium translate-y-6 transition-all duration-300'
            : ""
        }`}
        onClick={() => blockScroll && setState("projects")}
      >
        Projects
      </a>
      <a
        href="#about"
        className={`px-4 py-1 ${
          state === "about"
            ? 'border border-neutral-300 rounded-full backdrop-blur-lg bg-white/30 shadow-lg shadow-white/10 font-medium translate-y-6 transition-all duration-300'
            : ""
        }`}
        onClick={() => blockScroll && setState("about")}
      >
        About
      </a>
      <a
        href="#skills"
        className={`px-4 py-1 ${
          state === "skills"
            ? 'border border-neutral-300 rounded-full backdrop-blur-lg bg-white/30 shadow-lg shadow-white/10 font-medium translate-y-6 transition-all duration-300'
            : ""
        }`}
        onClick={() => blockScroll && setState("skills")}
      >
        Skills
      </a>
      <a
        href="#contact"
        className={`px-4 py-1 ${
          state === "contact"
            ? ' border border-neutral-300 rounded-full  backdrop-blur-lg bg-white/30 shadow-lg shadow-white/10 font-medium translate-y-6 transition-all duration-300'
            : ""
        }`}
        onClick={() => blockScroll && setState("contact")}
      >
        Contact
      </a>

    </div>
  );
};

export default Header;
