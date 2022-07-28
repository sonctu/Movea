import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DarkMode from "../components/DarkMode";
import { useStore } from "../store/store";

const FormLayout = ({ children }) => {
  const user = useStore((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);
  return (
    <div className="flex items-center justify-center w-full min-h-screen dark:bg-primary">
      <div
        className="fixed cursor-pointer top-8 left-8 text-primary dark:text-white sm:top-4 sm:left-4"
        onClick={() => navigate("/")}
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
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
      <div className="w-full h-full py-4 sm:px-3">{children}</div>
      <div className="fixed left-8 bottom-8 md:hidden">
        <DarkMode></DarkMode>
      </div>
    </div>
  );
};

export default FormLayout;
