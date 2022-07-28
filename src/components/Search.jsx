import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

const Search = ({ className = "" }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${slugify(value)}`);
  };
  return (
    <form
      onSubmit={handleSubmitSearch}
      className={`flex items-center gap-2 rounded-lg bg-light dark:bg-[#0B1120] ${className}`}
    >
      <input
        autoComplete="off"
        type="text"
        placeholder="Search movies..."
        id="search"
        className="flex-grow py-3 pl-3 rounded-lg bg-inherit text-primary dark:text-white"
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        htmlFor="search"
        className="p-3 cursor-pointer text-primary dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </label>
    </form>
  );
};

export default Search;
