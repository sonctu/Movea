import React from "react";

const TagList = ({ tagNameList, className = "" }) => {
  return (
    <div
      className={`mt-6 mb-3 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-3 sm:gap-x-3 sm:gap-y-2 ${className}`}
    >
      {tagNameList &&
        tagNameList.length > 0 &&
        tagNameList.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 border-2 rounded-full border-secondary text-secondary dark:text-white sm:py-1 sm:px-3 sm:text-sm"
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export default TagList;
