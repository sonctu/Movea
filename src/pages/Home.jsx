import React from "react";
import MovieHome from "../components/MovieHome";
import TopSearches from "../components/TopSearches";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <MovieHome></MovieHome>
      <TopSearches></TopSearches>
    </MainLayout>
  );
};

export default Home;
