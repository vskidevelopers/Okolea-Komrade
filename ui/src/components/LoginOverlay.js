import React from "react";
import { LoginSvg } from "../utils/svgs";

function LoginOverlay() {
  return (
    <div className="p-10">
      <div className="rounded-3xl  bg-gradient-to-r from-slate-500 to-sky-500 hidden md:flex p-4">
        <LoginSvg />
        <br />
      </div>
    </div>
  );
}

export default LoginOverlay;
