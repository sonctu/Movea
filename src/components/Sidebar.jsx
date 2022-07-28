import React from "react";
import Logo from "./Logo";
import IconSignOut from "./icons/IconSignOut";
import { useStore } from "../store/store";
import { signOut } from "firebase/auth";
import { sidebarList } from "../utils/list";
import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../utils/firebase";

const Sidebar = () => {
  const location = useLocation();
  const user = useStore((state) => state.user);
  return (
    <div className="fixed inset-0 max-w-[290px] border-r border-r-secondary pt-[42px] pl-[42px] transition-all lg:-translate-x-full">
      <Logo></Logo>
      <div className="mt-[48px] text-primary dark:text-[#9CA3AF]">
        <div>
          <h2 className="mb-4 text-lg font-medium uppercase">Menu</h2>
          <div className="flex flex-col">
            {sidebarList.map((item) => (
              <Link
                key={item.id}
                className={`flex cursor-pointer items-stretch gap-2 py-2 font-medium transition-all duration-200 ${
                  location.pathname === item.link
                    ? "text-secondary"
                    : "hover:text-secondary dark:hover:text-white"
                }`}
                to={item.link}
              >
                <span className="inline-block h-[24px] w-[24px]">
                  {item.icon}
                </span>
                <h3
                  className={`w-full border-r-[3px] text-base leading-7 transition-all ${
                    location.pathname === item.link
                      ? "border-secondary"
                      : "border-transparent"
                  }`}
                >
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
        {user && (
          <div className="mt-[36px]">
            <h2 className="mb-4 text-lg font-medium uppercase">Personal</h2>
            <div
              className="flex items-center gap-2 py-2 cursor-pointer"
              onClick={() => signOut(auth)}
            >
              <span className="inline-block h-[24px] w-[24px]">
                <IconSignOut></IconSignOut>
              </span>
              <h3 className="w-full text-base">Sign Out</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Sidebar);
