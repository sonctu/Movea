import React from "react";
import PropTypes from "prop-types";
import useAddBookmark from "../hooks/useAddBookmark";

const ButtonPlus = ({ className = "", data }) => {
  const { addBookmark, setAddBookmark } = useAddBookmark(data);
  return (
    <div
      className={`absolute z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.6)] p-2 transition-all duration-200 hover:text-secondary ${className}`}
      onClick={() => setAddBookmark(true)}
    >
      {addBookmark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};
ButtonPlus.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
};
export default ButtonPlus;
