import useSWR from "swr";
import React from "react";
import MovieList from "./MovieList";
import ListSkeleton from "./skeleton/ListSkeleton";
import HeroSkeleton from "./skeleton/HeroSkeleton";
import Hero from "./Hero";
import Header from "./Header";
import { getHome } from "../services/home";

const MovieHome = () => {
  const { data, error } = useSWR("home-0", () => getHome(0));
  const loading = !data && !error;
  return (
    <div className="relative max-w-[780px] px-8 pb-8 lt:max-w-[676px] lg:w-full lg:max-w-full lg:flex-grow md:max-w-full sm:px-4">
      <Header className="hidden lg:flex md:px-8"></Header>
      {!loading ? (
        <>
          <Hero data={data[0]}></Hero>
          <div className="mt-10 sm:mt-5 sm:mb-10">
            {data?.length > 0 &&
              data.map((item, index) => {
                return <MovieList key={index} data={item}></MovieList>;
              })}
          </div>
        </>
      ) : (
        <>
          <HeroSkeleton></HeroSkeleton>
          <div className="mt-10 sm:mt-5 sm:mb-10">
            <ListSkeleton></ListSkeleton>
            <ListSkeleton></ListSkeleton>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieHome;
