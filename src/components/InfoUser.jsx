import useDarkMode from "../hooks/useDarkMode";
import useClickOutSide from "../hooks/useClickOutside";
import React, { useMemo } from "react";
import IconSignOut from "./icons/IconSignOut";
import IconProfileUser from "./icons/IconProfileUser";
import IconDarkMode from "./icons/IconDarkMode";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const InfoUser = ({ user }) => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const menuUserList = useMemo(
    () => [
      {
        icon: <IconDarkMode darkMode={darkMode}></IconDarkMode>,
        title: "Dark mode",
        onClick: () => {
          toggleDarkMode();
        },
      },
      {
        icon: <IconProfileUser></IconProfileUser>,
        title: "Profile user",
        onClick: () => navigate("/user"),
      },
      {
        icon: <IconSignOut></IconSignOut>,
        title: "Sign out",
        onClick: () => signOut(auth),
      },
    ],
    [navigate, darkMode, toggleDarkMode]
  );
  const { displayName, email, photoURL } = user;
  const { show, setShow, nodeRef: menuRef } = useClickOutSide();
  return (
    <div className="relative" ref={menuRef}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="rounded-full h-9 w-9">
            <img
              src={
                photoURL ||
                "https://haycafe.vn/wp-content/uploads/2022/02/Avatar-chat-cho-nu.jpg"
              }
              alt="img"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div>
            <h3 className="text-sm leading-[1.2] text-primary dark:text-white">
              {displayName}
            </h3>
            <p className="text-xs text-[#9CA3AF]">{email}</p>
          </div>
        </div>
        <button
          className="text-primary dark:text-white"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`absolute right-0 top-full mt-2 min-w-[280px] rounded-md bg-slate-800 px-4 py-3 transition-all duration-200 dark:bg-[#0D0D0D] ${
          !show ? "invisible opacity-0" : ""
        }`}
      >
        <div className="flex mb-5 gap-x-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full">
            <img
              src={
                photoURL ||
                "https://haycafe.vn/wp-content/uploads/2022/02/Avatar-chat-cho-nu.jpg"
              }
              alt="img"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-medium">{displayName}</div>
            <span className="text-sm">User</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          {menuUserList.length > 0 &&
            menuUserList.map((item) => (
              <div
                className={`flex cursor-pointer select-none items-center gap-x-3 rounded-sm px-3 py-2 transition-all duration-300 hover:bg-[#202020] dark:hover:bg-[#3D3D3D]`}
                key={item.title}
                onClick={item?.onClick}
              >
                <span className="w-5 h-5">{item.icon}</span>
                <div className="font-medium capitalize">{item.title}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
