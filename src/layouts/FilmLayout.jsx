import React from "react";
import Header from "../components/Header";
import NavBottom from "../components/NavBottom";

const FilmLayout = ({ children }) => {
  return (
    <div className="min-h-screen max-w-screen ">
      <Header></Header>
      <div className="min-h-screen bg-white px-8 pt-[100px] dark:bg-primary sm:px-5 sm:pt-[80px]">
        {children}
        <NavBottom></NavBottom>
      </div>
    </div>
  );
};

export default FilmLayout;
