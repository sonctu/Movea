import React from "react";

const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-primary flex items-center justify-center">
      <div className="w-6 h-6 rounded-full border-2 border-secondary border-r-transparent animate-spin"></div>
    </div>
  );
};

export default Loading;
