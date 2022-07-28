import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarList } from "../utils/list";

const Navbar = ({ className = "" }) => {
  const location = useLocation();
  return (
    <div className={className}>
      <h2 className="mb-4 text-lg font-medium uppercase">Menu</h2>
      <div className="flex flex-col">
        {sidebarList.map((item) => (
          <Link
            key={item.id}
            className={`flex cursor-pointer items-stretch gap-2 py-2 transition-all sm:items-center ${
              location.pathname === item.link
                ? "text-secondary"
                : "hover:text-secondary dark:hover:text-white"
            }`}
            to={item.link}
          >
            <span className="inline-block h-[24px] w-[24px] sm:h-5 sm:w-5">
              {item.icon}
            </span>
            <h3
              className={`w-full text-base leading-7 sm:text-sm ${
                location.pathname === item.link &&
                "border-r-[3px] border-secondary"
              }`}
            >
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
