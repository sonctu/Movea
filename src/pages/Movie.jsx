import WatchView from "../components/WatchView";
import useSWR from "swr";
import React from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../services/movie";
import FilmLayout from "../layouts/FilmLayout";

const Movie = () => {
  const { id } = useParams();
  const { data, error } = useSWR(["movie", id], () => getMovieDetail(id));
  if (!data && !error) return <Loading></Loading>;
  return (
    <FilmLayout>
      <WatchView
        sources={data?.sources}
        subtitles={data?.subtitles}
        data={data?.data}
      ></WatchView>
    </FilmLayout>
  );
};

export default Movie;
