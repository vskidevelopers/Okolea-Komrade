import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useMutation } from "@tanstack/react-query";

import { ProfilePic } from "../utils/svgs";

import logo from "../assets/images/logo.png";
import { logout } from "../utils/api";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { isAnonymousUserAtom, isRegisteredUserAtom } from "../store/atomStore";

export default function Navbar() {
  const [isAnonymousUser, setIsAnonymousUser] = useAtom(isAnonymousUserAtom);
  const [, setIsRegisteredUser] = useAtom(isRegisteredUserAtom);

  console.log("isAnonymousUser ? > ", isAnonymousUser);
  // const token = localStorage.getItem("Token");

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "How it Works", href: "/how-it-works", current: false },
    { name: "Find Komrades", href: "/komrades", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const signOut = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setIsRegisteredUser(false);
      setIsAnonymousUser(true);
    },
  });

  const authLinks = (
    <>
      <Menu.Item>
        {({ active }) => (
          <Link
            to="/profile"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-2 text-sm text-gray-700"
            )}
          >
            Your Profile
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href=".."
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-2 text-sm text-gray-700"
            )}
          >
            Settings
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={signOut}
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-2 text-sm text-gray-700"
            )}
          >
            Sign out
          </button>
        )}
      </Menu.Item>
    </>
  );

  const guestLinks = (
    <>
      <Menu.Item>
        {({ active }) => (
          <Link
            to="/auth"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-2 text-sm text-gray-700"
            )}
          >
            Login
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <Link
            to="/auth"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-2 text-sm text-gray-700"
            )}
          >
            Signup
          </Link>
        )}
      </Menu.Item>
    </>
  );

  return (
    <Disclosure as="nav" className="bg-slate-900 fixed w-screen z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/*  */}

              {/* NAVBAR */}
              <div className="flex  items-center justify-center sm:items-stretch sm:justify-between w-full">
                {/* LEFT NAV LINKS */}
                <div className="flex flex-shrink-0 items-center justify-center">
                  <img
                    className="block h-8 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
                  <h1 className="ml-2 text-white font-semibold">
                    Okolea-Komrade
                  </h1>
                </div>
                {/* CENTRAL NAV LINKS */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* RIGHT NAV LINKS */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <ProfilePic className="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {isAnonymousUser ? guestLinks : authLinks}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                {/*  */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
