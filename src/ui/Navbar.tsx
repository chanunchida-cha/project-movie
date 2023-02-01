import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SearchText from "./SearchText";
import { setStateStore } from "@/store/setStateStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";

const category = [
  {
    name: "All",
  },
  {
    name: "Action",
  },
  {
    name: "Fantasy",
  },
];

const resources = [
  {
    name: "All Movie Information",
    path: "all-movie-information",
  },
  {
    name: "Add Movie Information",
    path: "add-movie",
  },
  {
    name: "Add Movie Catrgory",
    path: "all-category",
  },
];

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = observer(() => {
  const [navbar, setNavbar] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeManageMovie, setActiveManageMovie] = useState(
    ""
  );
  const scrollNav = () => {
    if (window.scrollY > 60) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
    return () => {
      window.removeEventListener("scroll", scrollNav);
    };
  }, []);

  useEffect(() => {
    setStateStore.setCategoryActive(activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setStateStore.setManagementActive(activeManageMovie);
  }, [activeManageMovie]);

  return (
    <Popover
      className={`${
        navbar && " w-full z-50 bg-[#330b0d] ease-in duration-500"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 text-white">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-4xl logofont text-white">
              Movie
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500  ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-gray-300",
                      "group inline-flex items-center rounded-md  text-lg font-medium hover:text-white focus:outline-none   "
                    )}
                  >
                    <span>Category</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-white" : "text-gray-300",
                        "ml-2 h-5 w-5 group-hover:text-white"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ">
                        <div className="relative grid gap-6 bg-[#1B1C1C] px-5 py-6 sm:gap-8 sm:p-8">
                          {category.map((item) => (
                            <a
                              key={item.name}
                              onClick={() => {
                                setActiveCategory(item.name);
                              }}
                              className={
                                item.name === activeCategory
                                  ? "-m-3 flex items-start rounded-lg p-3 bg-[#4B4C4C] text-white"
                                  : "-m-3 flex items-start rounded-lg p-3 hover:bg-[#4B4C4C] text-gray-400 hover:text-white"
                              }
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium">
                                  {item.name}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-gray-300",
                      "group inline-flex items-center rounded-md  text-lg font-medium hover:text-white focus:outline-none"
                    )}
                  >
                    <span>Manage Movie</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-white" : "text-gray-300",
                        "ml-2 h-5 w-5 group-hover:text-white"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-[#1B1C1C] px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link
                              href={`/management-movie/${item.path}`}
                              key={item.name}
                              onClick={() => {
                                setActiveManageMovie(item.name);
                              }}
                              className={
                                item.name === activeManageMovie
                                  ? "-m-3 flex items-start rounded-lg p-3 bg-[#4B4C4C] text-white"
                                  : "-m-3 flex items-start rounded-lg p-3 hover:bg-[#4B4C4C] text-gray-400 hover:text-white"
                              }
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium ">
                                  {item.name}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <SearchText />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {category.map((item) => (
                    <Link
                      key={item.name}
                      href="/"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricings
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href="/"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
});

export default Navbar;
