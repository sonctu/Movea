import React, { useState } from "react";

import PropTypes from "prop-types";

const Introduction = ({ className = "", introduction = "", limit = 200 }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <p
      className={`pb-5 text-sm text-primary dark:text-gray-400 sm:pb-3 ${className}`}
    >
      <span>
        {seeMore && introduction
          ? introduction
          : introduction.slice(0, limit) + "..."}
      </span>
      <button
        className="block text-base text-secondary sm:text-sm"
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore ? "Collapse" : "See more"}
      </button>
    </p>
  );
};
Introduction.propTypes = {
  introduction: PropTypes.string.isRequired,
  className: PropTypes.string,
  limit: PropTypes.number,
};
export default Introduction;
