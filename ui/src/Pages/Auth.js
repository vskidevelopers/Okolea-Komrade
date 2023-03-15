import React, { useState, useEffect } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import LoginOverlay from "../components/LoginOverlay";
import SignupOverlay from "../components/SignupOverlay";
import { useAtom } from "jotai";
import { isRegisteredUserAtom } from "../store/atomStore";

function Auth() {
  const [isOpen, setIsOpen] = useState(true);
  const isRegisteredUser = useAtom(isRegisteredUserAtom);

  console.log("Is Registered User? > ", isRegisteredUser[0]);

  useEffect(() => {
    if (isRegisteredUser[0]) {
      setIsOpen(true);
    }
  }, [isRegisteredUser]);

  const handleToggleOpen = () => {
    console.log("is open? >", isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className="flex flex-wrap w-full justify-center items-center h-screen ">
        <div className=" w-full md:w-1/2 ">
          {/* {username ? setIsOpen(true) : setIsOpen(false)} */}
          {isOpen ? <LoginOverlay /> : <Signup />}
        </div>
        <div className="w-full md:w-1/2 self-baseline md:self-center">
          {isOpen ? <Login /> : <SignupOverlay />}
        </div>
      </div>
      <div className=" absolute bottom-0 w-full flex justify-center mb-10">
        {isOpen ? (
          <button
            onClick={handleToggleOpen}
            className="font-semibold underline cursor-pointer"
          >
            Create an Account
          </button>
        ) : (
          <button onClick={handleToggleOpen}>
            Already a member?{" "}
            <span className="font-semibold underline cursor-pointer">
              Login
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Auth;
