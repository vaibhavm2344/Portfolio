import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";

const Navbar = () => {
  const [currentTheme, setCurrentTheme] =useState( localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setCurrentTheme(document.documentElement.getAttribute("data-theme"));
    document.documentElement.setAttribute(
      "data-theme",
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  useEffect(()=>{
    toggleTheme()
  },[currentTheme])


  //  useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  //   localStorage.setItem("theme", theme); // persist preference
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };


  return (
    <div className="fixed flex justify-between items-center z-10 w-[97vw] top-5">
      <h1 className="font-semibold text-3xl">Portfolio</h1>
      <Header/>
      {
        (currentTheme !== 'light')?
        <button onClick={toggleTheme}><img src={`${import.meta.env.BASE_URL}moon.svg`} className="p-3 border border-[var(--subheading-color)] rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-300" /></button>
        :
        <button onClick={toggleTheme}><img src={`${import.meta.env.BASE_URL}sun.svg`} className="p-3 border border-[var(--subheading-color)] rounded-full flex items-center justify-center cursor-pointer text-white hover:bg-white/30"/></button>
      }
    </div>
  );
};

export default Navbar;
