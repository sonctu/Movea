import React from "react";
import HeroItem from "./HeroItem";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import Title from "./Title";
import WatchAll from "./WatchAll";

const Hero = ({ data }) => {
  const movies = data?.recommendContentVOList;
  return (
    <div className="w-full md:mt-16">
      <div className="flex justify-between">
        <Title>Trending now</Title>
        <WatchAll></WatchAll>
      </div>
      <div className="hero-list h-[300px] w-full md:h-[320px] md:pt-3 sm:h-[200px] sm:pt-0">
        <Swiper
          spaceBetween={20}
          className="h-full rounded-xl"
          grabCursor={true}
          breakpoints={{
            1280: {
              slidesPerView: 1.3,
            },
            425: {
              height: 200,
              slidesPerView: 1,
            },
            0: {
              height: 160,
              slidesPerView: 1,
            },
          }}
        >
          {movies?.length > 0 &&
            movies.slice(0, 20).map((movie) => {
              if (!movie.title) return null;
              return (
                <SwiperSlide key={movie.id}>
                  <HeroItem movie={movie}></HeroItem>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};
Hero.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Hero;
