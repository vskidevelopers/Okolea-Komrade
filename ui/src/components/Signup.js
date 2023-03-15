import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../utils/api";
import { User, Passlock } from "../utils/svgs";
import { isRegisteredUserAtom } from "../store/atomStore";
import { useAtom } from "jotai";

function Signup() {
  const [, setIsRegisteredUser] = useAtom(isRegisteredUserAtom);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("target name", e.target.name, "Target Value ", e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(" ############ ");
    console.log(username);
    mutation.mutate(formData);
  };

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      alert("Account Successfully Created");
      setIsRegisteredUser(true);
    },
  });

  return (
    <div className="w-full md:w-4/5 md:mx-20">
      <div className="mt-8 max-w-md px-10 md:ml-10">
        <div className="grid grid-cols-1 gap-6">
          <div className="my-5 ">
            <h1 className="font-bold text-3xl">Sign Up</h1>
          </div>
          <form onSubmit={onSubmit}>
            <label className="block">
              <span className="text-gray-900 font-semibold ">Username</span>
              <div className="flex justify-center items-center">
                <User color="none" />
                <input
                  type="text"
                  className="
                          mt-0
                          block
                          w-full
                          px-0.5
                          border-0 border-b-2 border-gray-200
                          focus:ring-0 focus:border-black
                      "
                  placeholder="johndoe"
                  name="username"
                  onChange={onChange}
                  value={username}
                  required
                />
              </div>
            </label>
            <br />
            <label className="block">
              <span className="text-gray-900 font-semibold ">Email</span>
              <div className="flex justify-center items-center">
                <User color="none" />
                <input
                  type="email"
                  className="
                          mt-0
                          block
                          w-full
                          px-0.5
                          border-0 border-b-2 border-gray-200
                          focus:ring-0 focus:border-black
                      "
                  placeholder="johndoe@student.cuk.ac.ke"
                  name="email"
                  onChange={onChange}
                  value={email}
                  required
                />
              </div>
            </label>
            <br />
            <label className="block">
              <span className="text-gray-900 font-semibold">Password</span>
              <div className="flex justify-center items-center">
                <Passlock />
                <input
                  type="password"
                  className="
                          mt-0
                          block
                          w-full
                          px-0.5
                          border-0 border-b-2 border-gray-200
                          focus:ring-0 focus:border-black
                      "
                  placeholder="***************"
                  name="password"
                  onChange={onChange}
                  value={password}
                />
              </div>
            </label>
            <br />
            <button
              type="submit"
              className="flex-none rounded-md bg-slate-900 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
