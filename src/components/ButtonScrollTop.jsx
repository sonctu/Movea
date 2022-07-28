import React, { useEffect, useRef } from "react";

const ButtonScrollTop = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const buttonRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= window.innerHeight) {
        buttonRef.current.classList.add("visible", "opacity-100");
        buttonRef.current.classList.remove(
          "invisible",
          "opacity-0",
          "translate-y-20"
        );
      } else {
        buttonRef.current.classList.remove("visible", "opacity-100");
        buttonRef.current.classList.add(
          "invisible",
          "opacity-0",
          "translate-y-20"
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      ref={buttonRef}
      className="invisible fixed right-8 bottom-6 z-50 flex h-11 w-11 translate-y-20 items-center justify-center rounded-full bg-[#1A1C23] text-secondary opacity-0 transition-all duration-500 sm:bottom-12 sm:right-5 sm:h-10 sm:w-10"
      onClick={handleScrollTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 11l7-7 7 7M5 19l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default ButtonScrollTop;
