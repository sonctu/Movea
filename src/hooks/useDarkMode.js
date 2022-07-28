import { useEffect, useState } from "react";

export default function useDarkMode() {
  const initialValue = localStorage.getItem("theme") || "light";
  const [darkMode, setDarkMode] = useState(() => initialValue === "dark");
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const html = window.document.documentElement;
    const prev = darkMode ? "light" : "dark";
    html.classList.remove(prev);
    const next = darkMode ? "dark" : "light";
    html.classList.add(next);
    localStorage.setItem("theme", next);
  }, [darkMode]);

  return {
    darkMode,
    toggleDarkMode,
  };
}
