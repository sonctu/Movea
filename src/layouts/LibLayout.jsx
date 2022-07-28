import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ButtonScrollTop from "../components/ButtonScrollTop";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

const LibLayout = ({ textFound, ...props }) => {
  const { data, handleClearAll, handleDelete } = props;
  const navigate = useNavigate();
  if (data.length === 0)
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen gap-6">
        <div className="inline-block text-3xl font-semibold uppercase text- text-slate-600 sm:text-center">
          {textFound}
        </div>
        <Button
          className="border border-secondary text-secondary shadow-[#0D90F3_0px_0px_8px_0px] transition-all hover:border-transparent hover:bg-secondary hover:text-white"
          onClick={() => navigate("/")}
        >
          return home
        </Button>
      </div>
    );
  return (
    <div className="w-full min-h-screen px-6 sm:px-4">
      <Header className="hidden lg:flex md:left-0 md:px-8"></Header>
      <div className="py-6 lg:pt-[100px] sm:pt-[84px] sm:pb-14">
        <Button
          className="mb-5 border border-secondary text-secondary shadow-[#0D90F3_0px_0px_8px_0px] transition-all hover:border-transparent hover:bg-secondary hover:text-white"
          onClick={handleClearAll}
        >
          Clear all
        </Button>
        <div className="grid grid-cols-5 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {data &&
            data.length > 0 &&
            data
              .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
              .map((item) => (
                <MovieCard key={item.id} plus={false} movie={item}>
                  <div
                    className="absolute top-2 right-2 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.6)] p-2 hover:text-secondary sm:h-7 sm:w-7 sm:p-1"
                    onClick={() => handleDelete(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </MovieCard>
              ))}
        </div>
      </div>
      <ButtonScrollTop></ButtonScrollTop>
    </div>
  );
};

export default LibLayout;
