import React, { useState } from "react";
import { useController } from "react-hook-form";

import PropTypes from "prop-types";

const Input = ({ className = "", label, control, children, ...props }) => {
  const {
    field: { onBlur, ...rest },
  } = useController({
    name: props.name,
    control,
    defaultValue: "",
  });
  const [focus, setFocus] = useState(false);
  return (
    <label
      htmlFor={props.id}
      className={`flex w-full items-center rounded-lg border bg-light px-4 transition-all dark:bg-[#323645] ${
        focus ? "border-secondary" : "border-primary dark:border-transparent"
      } ${className}`}
    >
      <div className="flex-grow">
        <div className="mt-[2px] inline-block select-none text-sm text-slate-700 dark:text-slate-500">
          {label}
        </div>
        <input
          className="w-full py-1 font-semibold transition-all bg-light bg-inherit text-primary dark:text-white"
          onFocus={() => setFocus(true)}
          onBlur={() => {
            onBlur();
            setFocus(false);
          }}
          {...props}
          {...rest}
        />
      </div>
      {children && (
        <div className="relative z-10 flex-shrink-0 pl-2 cursor-pointer text-primary dark:text-white">
          {children}
        </div>
      )}
    </label>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
};
export default Input;
