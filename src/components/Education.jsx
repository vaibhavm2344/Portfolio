import React from "react";

const Education = () => {
  return (
    <div className="relative ml-30">

    <div className="mt-10 aboslute left-0 border-l-2 border-dashed h-[70vh] pt-8">
        <span className="absolute left-[-10px] text-4xl top-11">&#9679;</span>
      <div className="border-l-2 flex flex-col gap-15 absolute left-0">
        <div className="px-10">
          <p>Vishwakarma Institute of Technology, Pune</p>
          <p className="text-[var(--text-secondary)]">2022-2026</p>
          <p>(B.Tech) in Information Technology</p>
        </div>
        <span className="absolute left-[-12px] text-4xl top-36">&#9679;</span>
        <div className="px-10">
          <p>M.J.College, Jalgoan</p>
          <p className="text-[var(--text-secondary)]">2020-2022</p>
          <p>HSC(XII)</p>
        </div>
        <span className="absolute left-[-12px] text-4xl top-69">&#9679;</span>
        <div className="px-10">
          <p>Podar International School, Jalgaon</p>
          <p className="text-[var(--text-secondary)]">2019-2020</p>
          <p>SSC(X)</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Education;
