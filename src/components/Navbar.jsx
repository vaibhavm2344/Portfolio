import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";

const Navbar = () => {
  
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className="fixed flex justify-between items-center z-10 w-[97vw] top-5">
      <h1 className="font-semibold text-3xl">Portfolio</h1>
      <Header/>
      <button onClick={toggleTheme}><img src="src\assets\moon.svg" alt="" /></button>
    </div>
  );
};

export default Navbar;
