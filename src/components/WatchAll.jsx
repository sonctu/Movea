import React from "react";
import { Link } from "react-router-dom";

const WatchAll = () => {
  return (
    <Link
      to={"/"}
      className="flex items-center flex-shrink-0 gap-2 font-medium leading-4 transition-all cursor-pointer text-primary hover:text-secondary dark:text-white sm:text-sm"
    >
      <span>See all</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
};

export default WatchAll;
