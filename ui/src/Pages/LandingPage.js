import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ProjectComplete } from "../utils/getSvgs";

function LandingPage() {
  return (
    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="h-full flex items-center justify-center text-white">
        <div className="w-full m-8 md:w-3/5 md:my-20 md:mx-14 md:px-14">
          <h2 className="text-4xl md:text-6xl">
            Find a{" "}
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-900 relative inline-block">
              <span class="relative text-white font-mono font-black">
                Komrade
              </span>
            </span>{" "}
            skilled for your needs!
          </h2>
          <br />
          <p>
            Telents are endless in CUK. Browse though our skilled and talented
            comrades who can help you out today!
          </p>
          {/* Input */}
          <br />
          <label class="relative block w-full md:w-4/5 ">
            <input
              class="w-full placeholder:italic placeholder:text-slate-400 block bg-white text-sky-900 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder='Try "Photography" or  "Graphic Design"'
              type="text"
              name="search"
            />
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <MagnifyingGlassIcon className="h-6 w-6 text-sky-900" />
            </span>
            <button className="absolute inset-y-0 right-0 w-16 bg-slate-900 rounded-md ">
              {" "}
              Search
            </button>
          </label>
        </div>

        {/* UNDRAW.IO SVG */}
        <div className="hidden md:flex w-2/5 py-14 pr-20">
          <ProjectComplete className="h-4/5 w-auto" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
