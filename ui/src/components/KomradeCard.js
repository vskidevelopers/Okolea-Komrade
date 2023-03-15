import { BriefcaseIcon } from "@heroicons/react/24/solid";
import React from "react";

function KomradeCard() {
  return (
    <div>
      <div className="card  w-full sm:w-96  border border-gray-100 bg-purple-100   transition-shadow shadow hover:shadow-xl mb-8 mr-4">
        <div className="w-full card__media">
          <img
            src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg"
            alt="..."
            className="w-full h-44 object-cover"
          />
        </div>
        <div className="  card__media--aside "></div>
        <div className="flex items-center p-4">
          <div className="relative flex flex-col items-center w-full">
            <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
              <img
                className="h-24 w-24 md rounded-full relative"
                src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                alt=""
              />
              <div className="absolute"></div>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
              <span className="text-md whitespace-nowrap text-gray-800 font-semibold">
                Brahim
              </span>
              <span className="text-md whitespace-nowrap text-gray-600">
                Web Designer
              </span>
              <p className="text-sm text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit nulla temporibus, pariatur alias, o
              </p>
              <div className="py-2 flex space-x-2">
                <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-700 text-purple-700 hover:border-purple-800 hover:border-purple-800 px-4 py-1 flex items-center hover:shadow-lg">
                  <span className="mr-2"></span>Know More
                  <span className="ml-2"></span>
                </button>
                <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                  <span className="mr-2">
                    <BriefcaseIcon className="h-5 w-5 text-white" />
                  </span>
                  Hire Me <span className="ml-2"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KomradeCard;
