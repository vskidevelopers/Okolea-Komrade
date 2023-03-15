import React from "react";
import ProileHero from "../components/ProileHero";
import Skills from "../components/Skills";

export default function ProfilePage() {
  return (
    <div className="py-20 px-2 md:px-10 bg-slate-300 ">
      <div className="w-full md:w-3/5">
        {/* Profile hero */}
        <ProileHero />
        {/* skills div */}
        <Skills />
        {/* Related Profiles */}
      </div>
    </div>
  );
}
