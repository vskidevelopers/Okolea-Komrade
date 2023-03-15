import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../utils/api";
import { User, Passlock } from "../utils/svgs";
import { Navigate } from "react-router-dom";
import { isAnonymousUserAtom } from "../store/atomStore";
import { useAtom } from "jotai";

function Login() {
  const [, setIsAnonymousUser] = useAtom(isAnonymousUserAtom);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("target name", e.target.name, "Target Value ", e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(" ############ ");
    mutation.mutate(formData);
  };

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: setIsAnonymousUser(false),
  });

  const token = localStorage.getItem("Token");
  if (token) return <Navigate to="/" />;

  return (
    <div className="w-full md:w-4/5">
      <div className="mt-8 max-w-md ml-10">
        <div className="grid grid-cols-1 gap-6">
          <div className="my-5">
            <h1 className="font-bold text-3xl">Login</h1>
          </div>
          <form onSubmit={onSubmit}>
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
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
            </label>
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
                  value={password}
                  onChange={onChange}
                  required
                />
              </div>
            </label>
            <br />
            <button
              type="submit"
              className="flex-none rounded-md bg-slate-900 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Login{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
