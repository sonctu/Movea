import WatchView from "../components/WatchView";
import useSWR from "swr";
import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getTVDetail } from "../services/tv";
import WatchViewSkeleton from "../components/skeleton/WatchViewSkeleton";
import FilmLayout from "../layouts/FilmLayout";

const TV = () => {
  const { id } = useParams();
  const [params] = useSearchParams();
  const episodeIndex = Number(params.get("episode"));
  const { data, error } = useSWR(`tv-${id}-${episodeIndex}`, () =>
    getTVDetail(id, episodeIndex - 1)
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, [episodeIndex]);
  const loading = !data && !error;

  return (
    <FilmLayout>
      {!loading ? (
        <WatchView
          sources={data?.sources}
          data={data?.data}
          subtitles={data?.subtitles}
          episodeIndex={episodeIndex}
        ></WatchView>
      ) : (
        <WatchViewSkeleton></WatchViewSkeleton>
      )}
    </FilmLayout>
  );
};

export default TV;
