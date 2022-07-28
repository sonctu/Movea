import React from "react";
import PropTypes from "prop-types";

const Title = ({ children, className = "" }) => {
  return (
    <h3
      className={`my-5 inline-block select-none text-2xl font-semibold capitalize text-primary transition-all duration-300 dark:text-white sm:my-4 sm:text-xl ${className}`}
    >
      {children}
    </h3>
  );
};
Title.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
