import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../public/images/logo.svg";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex backdrop-blur-sm opacity-15 bg-[#242424] p-4 w-full top-0 fixed justify-between h-30 item-center bg-white flex-row justify-center   ">
      <div className="flex w-50 h-8  ">
        <img className="invert" src={logo} alt="" />
      </div>
      <div className="flex w-50   md:flex hidden flex-row h-30 justify-between item-center aligned-center ">
        <ul className="flex flex w-50 md:flex hidden font-weight-399 font-Menlo flex-row h-30   item-center aligned-center   justify-between">
          <li className="text-white mr-4 p-2">Feature</li>
          <li className="text-white mr-4 p-2">member</li>
          <li className="text-white mr-4 p-2">Contact Us</li>
        </ul>
      </div>
      <div className="flex relative">
        <li className="text-white md:flex hidden font-Menlo  bg-violet-400 list-style-none text-decoration-none hover:bg-black p-2 px-5 rounded-full  mr-4">
          Sign Up
        </li>
        <li className="text-white md:flex hidden font-Menlo bg-black list-style-none text-decoration-none hover:bg-violet-400 p-2 px-5 rounded-full  mr-4">
          Sign In
        </li>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
            </li>
            <ul className="my-10 font-Menlo">
              <li className="text-white mr-4 p-2">Feature</li>
              <li className="text-white mr-4 p-2">member</li>
              <li className="text-white mr-4 p-2">Contact Us</li>
            </ul>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
