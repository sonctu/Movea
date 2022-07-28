import Star from "./Star";
import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import ButtonPlus from "./ButtonPlus";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { categoryFilm, resizeImage } from "../utils/constants";
import { useStore } from "../store/store";

const MovieCard = ({ movie, plus = true, children }) => {
  const navigate = useNavigate();
  const darkMode = useStore((state) => state.darkMode);
  const {
    score,
    title,
    imageUrl,
    category,
    id,
    coverVerticalUrl,
    name,
    domainType,
    sort,
  } = movie;
  const imgUrl = useMemo(
    () =>
      imageUrl?.replaceAll(" ", "%20") ||
      coverVerticalUrl?.replaceAll(" ", "%20"),
    [imageUrl, coverVerticalUrl]
  );
  const cate = useMemo(() => category ?? domainType, [category, domainType]);
  const dataBookmark = useMemo(() => {
    return {
      category,
      imageUrl,
      id,
      score,
      title,
      coverVerticalUrl,
      name,
      domainType,
      sort,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, category, domainType]);
  if (!movie) return null;
  return (
    <div className="card-container">
      {plus && (
        <ButtonPlus
          className="top-2 right-2 sm:h-7 sm:w-7 sm:p-1"
          data={dataBookmark}
        ></ButtonPlus>
      )}
      {children}
      <div
        className={`group relative inline-block h-full w-full cursor-pointer rounded-xl ${
          darkMode ? "movie-card-dark" : "movie-card"
        }`}
        onClick={() =>
          navigate(`/${cate === categoryFilm.MOVIE ? "movie" : "tv"}/${id}`)
        }
      >
        <div className="absolute inset-0 z-10 invisible transition-all duration-200 opacity-0 rounded-xl bg-primary group-hover:visible group-hover:opacity-40"></div>
        <LazyLoadImage
          effect="blur"
          src={resizeImage(imgUrl, "200")}
          alt="img"
          className="object-cover w-full h-full rounded-xl"
        />
        <div className="absolute top-0 z-20 flex items-center justify-center invisible w-full h-full transition-all duration-300 opacity-0 lef-0 text-secondary group-hover:visible group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute left-0 right-0 bottom-0 z-20 flex items-center rounded-b-xl bg-[rgba(0,0,0,0.6)] px-2 py-4 sm:w-full sm:py-2">
          <h3 className="max-w-[100px] truncate font-medium transition-all duration-300 group-hover:text-secondary sm:ml-0 sm:max-w-[80px] sm:text-xs">
            {title || name}
          </h3>
          <Star
            score={score || parseFloat(sort).toFixed(1)}
            className="justify-end flex-grow sm:text-xs"
          ></Star>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default memo(MovieCard);
