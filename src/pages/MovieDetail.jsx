import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { getMovieDetail } from "../services/movie";
import Detail from "../components/Detail";
import Loader from "../components/Loader";

const MovieDetail = () => {
  const { id } = useParams();
  const { data, error } = useSWR(["movie", id], () => getMovieDetail(id));
  const loading = !data && !error;
  if (loading) return <Loader></Loader>;
  return <Detail data={data?.data}></Detail>;
};

export default MovieDetail;
