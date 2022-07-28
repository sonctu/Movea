import React, { useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { useStore } from "../store/store";
import IconDarkMode from "./icons/IconDarkMode";

const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const setToggleDarkMode = useStore((state) => state.setToggleDarkMode);
  useEffect(() => {
    setToggleDarkMode(darkMode);
  }, [darkMode, setToggleDarkMode]);
  return (
    <div
      className={`h-8 w-[70px] cursor-pointer select-none rounded-full p-[2px] transition-all ${
        darkMode ? "bg-slate-800" : "bg-slate-200"
      }`}
      onClick={toggleDarkMode}
    >
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-primary p-[3px] text-white transition-all ${
          darkMode && "translate-x-9"
        }`}
      >
        <IconDarkMode darkMode={darkMode}></IconDarkMode>
      </div>
    </div>
  );
};

export default DarkMode;
