import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const NavigateSignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
      <div className="text-5xl font-semibold uppercase text-slate-600">
        you have not signed in
      </div>
      <Button
        className="border border-secondary text-secondary shadow-[#0D90F3_0px_0px_8px_0px] transition-all hover:text-white hover:bg-secondary hover:border-transparent"
        onClick={() => navigate("/login")}
      >
        Sign In
      </Button>
    </div>
  );
};

export default NavigateSignIn;
