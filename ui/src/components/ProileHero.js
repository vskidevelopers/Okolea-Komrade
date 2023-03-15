import { PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

function ProileHero() {
  return (
    <div className="rounded-xl overflow-clip">
      {/* Banner Picture */}
      <div>
        <div className="h-36 md:h-40 ">
          <img
            className="object-cover h-full w-full"
            src="http://images6.fanpop.com/image/photos/39600000/Sparkle-Stars-Profile-Banner-smile19-39654242-946-250.jpg"
            alt=""
          />
        </div>

        <div className="hidden h-20 bg-gradient-to-r from-purple-500 to-pink-500 h-full text-white flex justify-center items-center">
          <span>Your Banner Image goes here</span>
        </div>
      </div>

      {/* Profile Pic */}
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          alt=""
          className="rounded-full border-4 border-white h-32 md:h-40 absolute top-36 md:top-40 left-8 md:left-16"
        />
      </div>

      {/* About Div */}
      <div className="flex flex-col bg-white">
        {/* edit div */}
        <div className="h-14 w-full px-4 py-4 flex justify-end">
          <PencilSquareIcon className="h-6 w-6 text-slate-700" />
        </div>
        {/* Name Div */}
        <div className="py-6 px-4 divide-y-2 divide-slate-700/300">
          {/* name */}
          <div className="w-full flex flex-col sm:flex-row mb-2 ">
            <div className="w-full ">
              <h2 className=" font-medium text-md text-slate-700 ">Name </h2>
            </div>
            <div className="w-full ">
              <h2 className=" md:text-md">Jane Doe</h2>
            </div>
          </div>
          {/* Registration Number : */}
          <div className="w-full flex flex-col sm:flex-row mb-2 ">
            <div className="w-full ">
              <h2 className=" font-medium text-md text-slate-700  ">
                Registration Number
              </h2>
            </div>
            <div className="w-full ">
              <h2 className=" md:text-md">bbitc01/0030/2019</h2>
            </div>
          </div>
          {/*  Course*/}
          <div className="w-full flex flex-col sm:flex-row mb-2 ">
            <div className="w-full ">
              <h2 className=" font-medium text-md text-slate-700  ">Course</h2>
            </div>
            <div className="w-full ">
              <h2 className=" md:text-md">
                Barchelor of Business and Infomation Technology
              </h2>
            </div>
          </div>
          {/*  Year*/}
          <div className="w-full flex flex-col sm:flex-row mb-2 ">
            <div className="w-full ">
              <h2 className=" font-medium text-md text-slate-700  ">
                Year of Study
              </h2>
            </div>
            <div className="w-full ">
              <h2 className=" md:text-md">Year 4</h2>
            </div>
          </div>
          {/*Bio  */}
          <div className="w-full flex flex-col sm:flex-row mb-2 ">
            <div className="w-full ">
              <h2 className=" font-medium text-md text-slate-700  ">Bio</h2>
            </div>
            <div className="w-full ">
              <h2 className=" md:text-md">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis rerum, commodi inventore rem unde voluptates,
                voluptatem quod sunt repudiandae omnis hic molestias non ipsum.
                Deserunt a laboriosam reprehenderit perspiciatis ad?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProileHero;
