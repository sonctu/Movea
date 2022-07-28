import useSWR from "swr";
import React, { useState } from "react";
import MovieGrid from "../components/MovieGrid";
import { getSearchConfig } from "../services/search";
import FilmLayout from "../layouts/FilmLayout";

const Explore = () => {
  const { data, error } = useSWR(`explore`, getSearchConfig);
  const loading = !data && !error;
  const [sectionIndex, setSectionIndex] = useState(0);
  return (
    <FilmLayout>
      <div className="relative flex items-center gap-5 mb-8">
        {!loading &&
          data.length > 0 &&
          data?.map((item, index) => (
            <div
              key={item.id}
              className={`cursor-pointer border-b-2 pb-1 font-medium capitalize text-primary transition-all dark:text-white ${
                sectionIndex === index
                  ? "border-b-secondary !text-secondary"
                  : "border-b-transparent"
              }`}
              onClick={() => setSectionIndex(index)}
            >
              {item.name}
            </div>
          ))}
      </div>
      {!loading && (
        <MovieGrid
          data={data[sectionIndex]}
          sectionIndex={sectionIndex}
          loading={loading}
        ></MovieGrid>
      )}
    </FilmLayout>
  );
};

export default Explore;
