import React from "react";
const ExternalLinks = () => {
  return (
    <div className="flex mt-6 gap-4 w-fit">
      <a href="https://github.com/vaibhavm2344" target="_blank">
        <img
          src="src\assets\brand-github.svg"
          alt=""
          className="p-2 border border-black/30 rounded-full hover:bg-slate-200 hover:cursor-pointer"
        />
      </a>
      <a href="https://leetcode.com/u/vaibhav2344/" target="_blank">
        <img
          src="src\assets\brand-leetcode.svg"
          alt=""
          className="p-2 border border-black/30 rounded-full hover:bg-slate-200 hover:cursor-pointer"
        />
      </a>
      <a href="https://www.linkedin.com/in/vaibhav-more-767019283/" target="_blank">
        <img
          src="src\assets\brand-linkedin.svg"
          alt=""
          className="p-2 border border-black/30 rounded-full hover:bg-slate-200 hover:cursor-pointer"
        />
      </a>
    </div>
  );
};

export default ExternalLinks;
