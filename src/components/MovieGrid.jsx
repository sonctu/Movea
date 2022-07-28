import React from "react";
import Skeleton from "react-loading-skeleton";
import { advancedSearch } from "../services/search";
import MovieCard from "./MovieCard";
import ButtonScrollTop from "./ButtonScrollTop";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-infinite-scroll-component";

const MovieGrid = ({ data, sectionIndex, loading }) => {
  const configs = data.screeningItems.reduce((acc, current) => {
    acc[current.items[0].screeningType] = current.items[0].params;
    return acc;
  }, {});

  const getKey = (index) => {
    return `explore-${data.name}-${index}`;
  };
  const amountData = 12;
  const {
    data: configData,
    error,
    setSize,
  } = useSWRInfinite(getKey, (key) =>
    advancedSearch(
      data.params,
      configs,
      (Number(key.split("-").slice(-1)[0]) + 1) * amountData
    )
  );
  const results = configData
    ? configData.map((item, index) =>
        item?.slice(amountData * index, amountData * (index + 1))
      )
    : [];

  return (
    <div>
      <InfiniteScroll
        dataLength={results?.length || 0}
        next={() => setSize((size) => size + 1)}
        hasMore={!error && results?.slice(-1)?.[0]?.length !== 0}
        loader={
          <div className="flex items-center justify-center py-4">
            <div className="w-6 h-6 border-2 rounded-full animate-spin border-secondary border-r-transparent"></div>
          </div>
        }
        className="!overflow-hidden"
      >
        <div className="grid grid-cols-6 gap-x-3 gap-y-6 lg:grid-cols-3 md:grid-cols-2">
          {!loading &&
            results &&
            Array.from(
              new Set(
                results
                  .reduce((acc, current) => [...acc, ...current], [])
                  .map(JSON.stringify)
              )
            )
              .map(JSON.parse)
              ?.map((item) => (
                <MovieCard key={item.id} movie={item}></MovieCard>
              ))}
          {!configData &&
            !error &&
            new Array(12)
              .fill(0)
              ?.map((_, index) => (
                <Skeleton
                  key={index}
                  className="card-container relative h-[280px] w-[190px] select-none lg:w-full md:h-[230px]"
                ></Skeleton>
              ))}
        </div>
      </InfiniteScroll>
      <ButtonScrollTop></ButtonScrollTop>
    </div>
  );
};

export default MovieGrid;
