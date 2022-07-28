import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`rounded-full py-2 px-8 text-base font-medium capitalize sm:px-4 sm:text-sm ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  props: PropTypes.any,
};
export default Button;
