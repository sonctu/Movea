import React from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";
import slugify from "slugify";
import { getSearchKeyWord } from "../services/search";
import MovieCard from "../components/MovieCard";
import Skeleton from "react-loading-skeleton";
import ButtonScrollTop from "../components/ButtonScrollTop";
import FilmLayout from "../layouts/FilmLayout";

const SearchPage = () => {
  const [params] = useSearchParams();
  const keyword = params.get("query");
  const key = slugify(keyword, { lower: true });
  const { data, error } = useSWR(`search-${key}`, () =>
    getSearchKeyWord(keyword.replaceAll("-", " "))
  );
  const loading = !data && !error;
  return (
    <FilmLayout>
      <div className="inline-block px-8 py-2 mb-8 text-xl font-semibold uppercase rounded-md bg-secondary md:mb-6 md:text-base">
        Search Results
      </div>
      <div className="grid grid-cols-6 gap-6 pb-10 lg:grid-cols-3 md:grid-cols-2">
        {!loading && data?.length === 0 && (
          <div className="text-xl text-slate-500">No result found</div>
        )}
        {!loading &&
          data?.length > 0 &&
          data.map((item) => (
            <MovieCard key={item.id} movie={item}></MovieCard>
          ))}
        {loading &&
          new Array(12)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                key={index}
                className="h-[300px] !w-[200px] !rounded-xl sm:h-[200px] sm:!w-[150px]"
              ></Skeleton>
            ))}
      </div>
      <ButtonScrollTop></ButtonScrollTop>
    </FilmLayout>
  );
};

export default SearchPage;
