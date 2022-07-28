import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white select-none bg-primary">
      <div className="mb-8 text-5xl font-semibold">
        Oops! 404 - Page Not Found
      </div>
      <Button
        className="transition-all duration-300 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
        onClick={() => navigate("/")}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default PageNotFound;
