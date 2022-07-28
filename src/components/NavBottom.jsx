import React from "react";
import { NavLink } from "react-router-dom";
import { navMobileList } from "../utils/list";

const NavBottom = () => {
  return (
    <div className="hidden fixed bottom-0 left-0 right-0 z-50 items-center bg-[rgba(0,0,0,0.6)] sm:flex">
      {navMobileList.map((item, index) => {
        return (
          <NavLink
            to={item.link}
            key={index}
            className={({ isActive }) =>
              `flex-grow inline-flex items-center justify-center py-3 ${
                isActive && "border-b-4 border-secondary text-secondary"
              }`
            }
          >
            {item.icon}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavBottom;
