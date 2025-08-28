import React, { useState } from "react";
import { tech } from "../assets/assets";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  return (
    <section className="h-[100vh] mt-5 pt-25 flex" id="skills">
      <div className="flex-1">
        {/* <input type="text" name="" id="" className='border p-2 pl-4 rounded-full w-[30vh] ml-4' placeholder='Search'/> */}
        <div className="p-4 h-full flex flex-col gap-4 ">
          <p className={`text-lg font-semibold border border-black/30 p-2 rounded-lg  text-center cursor-pointer ${selectedCategory === 'Frontend'?'bg-zinc-300':'hover:bg-slate-200/70'}`} onClick={()=>selectedCategory==='Frontend'?setSelectedCategory('All'):setSelectedCategory('Frontend')}>
            Frontend
          </p>
          <p className={`text-lg font-semibold border border-black/30 p-2 rounded-lg  text-center cursor-pointer ${selectedCategory === 'Backend'?'bg-zinc-300':'hover:bg-slate-200/70'}`} onClick={()=>selectedCategory==='Backend'?setSelectedCategory('All'):setSelectedCategory('Backend')}>
            Backend
          </p>
          <p className={`text-lg font-semibold border border-black/30 p-2 rounded-lg  text-center cursor-pointer ${selectedCategory === 'Database'?'bg-zinc-300':'hover:bg-slate-200/70'}`} onClick={()=>selectedCategory==='Database'?setSelectedCategory('All'):setSelectedCategory('Database')}>
            Database
          </p>
          <p className={`text-lg font-semibold border border-black/30 p-2 rounded-lg  text-center cursor-pointer ${selectedCategory === 'Tools'?'bg-zinc-300':'hover:bg-slate-200/70'}`} onClick={()=>selectedCategory==='Tools'?setSelectedCategory('All'):setSelectedCategory('Tools')}>
            Tools
          </p>
          <p className={`text-lg font-semibold border border-black/30 p-2 rounded-lg  text-center cursor-pointer ${selectedCategory === 'Languages'?'bg-zinc-300':'hover:bg-slate-200/70'}`} onClick={()=>selectedCategory==='Languages'?setSelectedCategory('All'):setSelectedCategory('Languages')}>
            Languages
          </p>
        </div>
      </div>





      <div className="flex-5 border border-black/30 px-5 rounded-lg mb-6 mt-4">
        <div className={`grid grid-cols-6 gap-5  mt-6 ${selectedCategory === 'All' ? 'h-50' : 'h-10'}`}>
          {tech[selectedCategory].map((item, index) => (
            <p key={index} className="border border-black/30 p-4 flex items-center justify-center rounded-lg bg-blue-50 outfit">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
