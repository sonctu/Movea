import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import Title from "./Title";
import PropTypes from "prop-types";
import WatchAll from "./WatchAll";

const MovieList = ({ data }) => {
  const movies = data?.recommendContentVOList;
  return (
    <div>
      <div className="flex justify-between">
        <Title>{data?.homeSectionName}</Title>
        <WatchAll></WatchAll>
      </div>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          1440: {
            slidesPerView: 3.5,
          },
          1280: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3.5,
          },
          425: {
            slidesPerView: 3.5,
          },
          0: {
            slidesPerView: 2,
          },
        }}
        grabCursor={true}
      >
        {movies?.length > 0 &&
          movies.slice(0, 10).map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
MovieList.propTypes = {
  data: PropTypes.object.isRequired,
};
export default MovieList;
