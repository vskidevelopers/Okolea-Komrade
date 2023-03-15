import React from "react";
import { WelcomeSvg } from "../utils/svgs";

function SignupOverlay() {
  return (
    <div className="w-1/2 absolute py-10 pr-10 pl-20 z-1 top-20 bg-white max-w-xl hidden md:flex">
      <WelcomeSvg />
      <br />
    </div>
  );
}

export default SignupOverlay;
