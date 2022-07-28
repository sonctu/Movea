import React, { useMemo } from "react";
import PropTypes from "prop-types";
import ButtonPlus from "./ButtonPlus";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { categoryFilm, resizeImage } from "../utils/constants";

const HeroItem = ({ movie }) => {
  const navigate = useNavigate();
  const { title, imageUrl, id, category, score } = movie;
  const dataBookmark = useMemo(() => {
    return {
      category,
      imageUrl,
      id,
      title,
      score,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, category]);
  if (!movie) return null;
  return (
    <div
      style={{
        backgroundImage: `url(${resizeImage(
          imageUrl.replaceAll(" ", "%20"),
          "400"
        )})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
      className="w-full h-full rounded-xl relative cursor-pointer"
    >
      <ButtonPlus
        className="top-3 right-6 w-11 h-11 sm:right-3 sm:top-2"
        data={dataBookmark}
      ></ButtonPlus>
      <div className="flex justify-between bg-[rgba(0,0,0,0.6)] rounded-b-xl items-center px-6 py-3 absolute bottom-0 left-0 right-0 sm:px-3 sm:py-2 ">
        <div className="flex flex-col gap-2 max-w-[240px] flex-shrink-0 sm:max-w-[60%]">
          <h2
            className="text-3xl truncate font-medium text-white transition-all hover:text-secondary sm:text-base"
            onClick={() =>
              navigate(
                `/${category === categoryFilm.MOVIE ? "movie" : "tv"}/${id}`
              )
            }
          >
            {title}
          </h2>
          <span className="sm:text-xs">2022</span>
        </div>
        <Button
          className="bg-secondary flex-shrink-0"
          onClick={() =>
            navigate(
              `/watch/${
                category === categoryFilm.MOVIE ? "movie" : "tv"
              }/${id}${category === categoryFilm.MOVIE ? "" : "?episode=1"}`
            )
          }
        >
          Watch now
        </Button>
      </div>
    </div>
  );
};
HeroItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default HeroItem;
