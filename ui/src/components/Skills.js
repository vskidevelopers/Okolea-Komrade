import { PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

function Skills() {
  const skills = [
    "photography",
    "It",
    "academic writing",
    "technical writing",
    "programming",
    "web development",
    "graphic design",
  ];
  return (
    <div className="my-10 bg-white  rounded-xl overflow-clip">
      <div className="px-4 pt-4 text-md font-medium w-full flex justify-between">
        <div>Skills</div>
        <PencilSquareIcon className="h-6 w-6 text-slate-900 " />
      </div>
      <div className="py-8 px-8  flex flex-wrap">
        {skills?.map((skill) => (
          <div className="p-2 mr-2 mb-2 capitalize rounded-full border border-sky-500 bg-gray-600 flex justify-center items-center text-white">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
