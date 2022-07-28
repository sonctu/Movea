import Search from "./Search";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import Button from "./Button";
import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { forwardRef } from "react";
import { auth } from "../utils/firebase";

const Header = ({ className = "" }, ref) => {
  const navigate = useNavigate();
  const [activeNavbar, setActiveNavbar] = useState(false);
  const user = useStore((state) => state.user);
  return (
    <>
      <div
        ref={ref}
        className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-8 py-3 shadow-xl transition-all duration-200 dark:bg-primary sm:px-5 sm:py-3 ${className}`}
      >
        <div
          className="hidden w-8 h-8 cursor-pointer text-secondary lg:block sm:h-7 sm:w-7"
          onClick={() => setActiveNavbar(!activeNavbar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <Logo></Logo>
        <Search className="w-[400px] lg:hidden"></Search>
        <div className="fixed z-20 bottom-6 left-8 lg:relative lg:bottom-0 lg:left-0">
          <DarkMode></DarkMode>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 bottom-0 z-30 hidden bg-white pl-8 pt-8 shadow-lg  transition-all duration-300 dark:bg-primary lg:top-[63px] lg:block lg:pt-6 md:top-0 md:pt-[90px] sm:pt-[80px] sm:pl-6 ${
          !activeNavbar ? "lg:-translate-x-full" : ""
        }`}
      >
        <div className="pr-4">
          <Search></Search>
        </div>
        <Navbar className="mt-6 w-full text-primary transition-all dark:text-[#9CA3AF]"></Navbar>
        {user ? (
          <div className="flex items-center justify-center mt-3 -translate-x-4">
            <Button
              className="w-[160px] border border-secondary text-secondary shadow-[#0D90F3_0px_0px_8px_0px] transition-all hover:border-transparent hover:bg-secondary hover:text-white"
              onClick={() => signOut(auth)}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-center mt-3 -translate-x-4">
            <Button
              className="w-[160px] border border-secondary text-secondary shadow-[#0D90F3_0px_0px_8px_0px] transition-all hover:border-transparent hover:bg-secondary hover:text-white"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default forwardRef(Header);
