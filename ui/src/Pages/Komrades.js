import React from "react";
import KomradeCard from "../components/KomradeCard";

function Komrades() {
  return (
    <div className="py-20 px-5 md:px-10 flex flex-wrap justify-center">
      <KomradeCard />
      <KomradeCard />
      <KomradeCard />
      <KomradeCard />
      <KomradeCard />
      <KomradeCard />
    </div>
  );
}

export default Komrades;
