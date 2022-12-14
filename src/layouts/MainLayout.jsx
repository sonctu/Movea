import Sidebar from "../components/Sidebar";
import React, { useEffect } from "react";
import NavBottom from "../components/NavBottom";

const MainLayout = ({ children }) => {
  useEffect(() => {
    document.title = "Movea";
  }, []);
  return (
    <div className="w-full min-h-screen bg-white dark:bg-primary">
      <Sidebar></Sidebar>
      <div className="relative ml-[290px] flex lg:ml-0 lg:w-full">
        {children}
      </div>
      <NavBottom></NavBottom>
    </div>
  );
};

export default MainLayout;
