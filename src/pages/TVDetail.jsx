import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { getTVDetail } from "../services/tv";
import Detail from "../components/Detail";
import Loader from "../components/Loader";

const TVDetail = () => {
  const { id } = useParams();
  const { data, error } = useSWR(["tv", id], () => getTVDetail(Number(id), 0));
  const loading = !data && !error;
  if (loading) return <Loader></Loader>;
  return <Detail data={data?.data}></Detail>;
};

export default TVDetail;
