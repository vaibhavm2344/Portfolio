import React, { useEffect, useState } from "react";
import { projects } from "../assets/assets.js";
import { iconMap } from "./Icons.jsx";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

const Card = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(null);

  const pagination = () => {
    setData(projects.slice(4 * page, 4 * page + 4));
  };

  useEffect(() => {
    pagination();
  }, [page]);

  return (
    <div className="flex-col flex h-full justify-between">
      <div className="grid grid-cols-2">
        {data?.map((project, index) => (
          <div
            key={index}
            className="flex flex-col p-4 border border-black/30 m-4 rounded-lg gap-2 bg-slate-400/30"
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
            {/* <p>
            Github Link :{" "}
            <a className="text-blue-700 underline hover:cursor-pointer" href={`${project.github}`} target="_blank">
              {project.github}
            </a>
          </p> */}
          </div>
        ))}
      </div>

      <div className="flex gap-2 justify-center w-full mb-5">
        {(page-1 >=0 ) && <p
          className="py-1 px-2 rounded-md border border-slate-400 cursor-pointer flex items-center "
          onClick={() => setPage(page-1)}
        >
          <FaArrowLeft />
        </p>}
        <p
          className={`py-1 px-2 rounded-md border border-slate-400 cursor-pointer ${(page+1)==1?'bg-zinc-300':''}`}
          onClick={() => setPage(0)}
        >
          1
        </p>
        <p
          className={`py-1 px-2 rounded-md border border-slate-400 cursor-pointer ${(page+1)==2?'bg-zinc-300':''}`}
          onClick={() => setPage(1)}
        >
          2
        </p>
        {(page+1 < 2 ) &&<p
          className="py-1 px-2 rounded-md border border-slate-400 cursor-pointer flex items-center"
          onClick={() => setPage(page+1)}
        >
          <FaArrowRight />
        </p>}
      </div>
    </div>
  );
};

export default Card;
