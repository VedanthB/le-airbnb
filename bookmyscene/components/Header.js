import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 80) {
        setHandleShow(true);
      } else setHandleShow(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 grid w-screen grid-cols-1  transition duration-100 ease-out p-5 ${
        handleShow ? "bg-white shadow-md" : ""
      } md:grid-cols-3  z-50 grid grid-flow-row grid-cols-2 p-5 md:px-10 sm:grid-cols-3 text-white`}
    >
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 shadow-sm ">
        <input
          type="text"
          placeholder="Start Your Search"
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-500 ">
        <p className="hidden md:inline cursor-pointer ">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 items-center space-x-2 rounded-full p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
