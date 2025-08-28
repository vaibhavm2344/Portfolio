import React, { useEffect, useState } from "react";
import { projects } from "../assets/assets.js";
import { iconMap } from "./Icons.jsx";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

const Card = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const pagination = () => {
    setData(projects.slice(4 * page, 4 * page + 4));
  };

  useEffect(() => {
    pagination();
  }, [page]);


  if (selectedProject) {
    return (
      <div className="px-8 pt-0 flex flex-col gap-2 h-full">
        <button
          className="self-start px-3 py-1 bg-gray-700 text-white rounded-lg flex items-center gap-1 cursor-pointer hover:bg-gray-500"
          onClick={() => setSelectedProject(null)}
        >
          <FaArrowLeft/> Back
        </button>

        <h1 className="text-3xl font-bold mt-2">{selectedProject.title}</h1>
        <p className="text-md">{selectedProject.description}</p>

        <div>
          <h2 className="text-xl font-semibold mt-2">Features:</h2>
          <ul className="list-disc list-inside space-y-1 mt-2 px-8">
            {selectedProject.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">

        
        <div>
          <h2 className="text-xl font-semibold mt-2">Tech Stack:</h2>
          <div className="flex gap-3 mt-2 flex-wrap">
            {selectedProject.techStack.map((item, i) => (
              <span key={i} className="px-3 py-1 bg-gray-200 rounded-lg">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-col flex gap-2 text-center mt-0">
          {selectedProject.demo && (
            <a
              // href={selectedProject.demo}
              target="_blank"
              className="px-2 py-1 bg-blue-600 text-white rounded-lg cursor-pointer"
              onClick={()=>alert('comming soon...')}
            >
              Live Demo
            </a>
          )}
          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              className="px-2 py-1 bg-gray-800 text-white rounded-lg"
            >
              GitHub
            </a>
          )}
        </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-col flex h-full justify-between">
      <div className="grid grid-cols-2">
        {data?.map((project, index) => (
          <div
            onClick={() => setSelectedProject(project)}
            key={index}
            className="flex flex-col p-4 border border-black/30 m-4 rounded-lg gap-2 bg-slate-400/30 cursor-pointer"
          >
            <p className="text-xl font-medium">{project.title}</p>
            <p className="text-md">{project.shortDescription}</p>
            <div className="flex gap-3 items-center">
              <p>Tech Stack :</p>
              <div className="flex gap-2">
                {project.techStack.map((item, ind) => (
                  <div key={ind} className="relative">
                    <p className="flex gap-5 cursor-pointer">{iconMap[item]}</p>
                  </div>
                ))}
              </div>
            </div>
           
          </div>
        ))}
      </div>

      <div className="flex gap-2 justify-center w-full mb-5">
        {(page-1 >=0 ) && <button
          className="py-1 px-2 rounded-md border border-slate-400 cursor-pointer flex items-center "
          onClick={() => setPage(page-1)}
        >
          <FaArrowLeft />
        </button>}
        <button
          className={`py-1 px-2 rounded-md border border-slate-400 cursor-pointer ${(page+1)==1?'bg-zinc-300':''}`}
          onClick={() => setPage(0)}
        >
          1
        </button>
        <button
          className={`py-1 px-2 rounded-md border border-slate-400 cursor-pointer ${(page+1)==2?'bg-zinc-300':''}`}
          onClick={() => setPage(1)}
        >
          2
        </button>
        {(page+1 < 2 ) &&<button
          className="py-1 px-2 rounded-md border border-slate-400 cursor-pointer flex items-center"
          onClick={() => setPage(page+1)}
        >
          <FaArrowRight />
        </button>}
      </div>
    </div>
  );
};

export default Card;
