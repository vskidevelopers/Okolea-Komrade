import React from "react";
import { Link } from "react-router-dom";
import { DesignProcess, OurSolution } from "../utils/svgs";

function SplashPage() {
  return (
    <div className="w-screen px-10 h-screen bg-gradient-to-r from-sky-500 to-sky-800 flex">
      <div className="w-1/2 h-full bg-sky-500 flex justify-center items-center">
        <OurSolution />
        <Link
          to="/komrades"
          className="rounded-xl absolute top-[60vh] w-52 p-5 border-2   hover:border-slate-900 bg-slate-900 hover:bg-white hover:text-slate-900  text-white text-center"
        >
          <h2>Continue as a client hiring Komrades</h2>
        </Link>
      </div>
      <div className="w-1/2 h-full bg-sky-800 flex justify-center items-center">
        <DesignProcess />
        <Link
          to="/profile"
          className="rounded-xl absolute top-[60vh] w-52 p-5 border-2  hover:border-gray-300 bg-white hover:bg-slate-900 hover:text-white  text-slate-900 text-center"
        >
          <h2>Continue as a Komrade looking for work</h2>
        </Link>
      </div>
    </div>
  );
}

export default SplashPage;
