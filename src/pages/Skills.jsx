import React from "react";
import { tech } from "../assets/assets";

const Skills = () => {
  return (
    <section className="h-[100vh] mt-5 pt-25 flex" id="skills">
      <div className="flex-1">
        {/* <input type="text" name="" id="" className='border p-2 pl-4 rounded-full w-[30vh] ml-4' placeholder='Search'/> */}
        <div className="p-4 h-full flex flex-col gap-4 ">
          <p className="text-lg font-semibold border border-black/30 p-2 rounded-lg hover:bg-slate-200/70 text-center">
            Frontend
          </p>
          <p className="text-lg font-semibold border border-black/30 p-2 rounded-lg hover:bg-slate-200/70 text-center">
            Backend
          </p>
          <p className="text-lg font-semibold border border-black/30 p-2 rounded-lg hover:bg-slate-200/70 text-center">
            Database
          </p>
          <p className="text-lg font-semibold border border-black/30 p-2 rounded-lg hover:bg-slate-200/70 text-center">
            Tools
          </p>
          <p className="text-lg font-semibold border border-black/30 p-2 rounded-lg hover:bg-slate-200/70 text-center">
            Languages
          </p>
        </div>
      </div>





      <div className="flex-5 border border-black/30 px-5 rounded-lg mb-6 mt-4">
        <div className="grid grid-cols-6 gap-5 h-50 mt-6">
          {tech.map((item, index) => (
            <p key={index} className="border border-black/30 p-4 flex items-center justify-center rounded-lg bg-blue-50">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
