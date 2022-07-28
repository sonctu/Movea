import useWindowDimensions from "../hooks/useWindowDimensions";
import useAddBookmark from "../hooks/useAddBookmark";
import Title from "./Title";
import TagList from "./TagList";
import slugify from "slugify";
import React, { memo, useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import Introduction from "./Introduction";
import Header from "./Header";
import EpisodeList from "./EpisodeList";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { categoryFilm, resizeImage } from "../utils/constants";

const Detail = ({ data }) => {
  const navigate = useNavigate();
  const {
    coverHorizontalUrl,
    coverVerticalUrl,
    name,
    introduction,
    tagNameList,
    likeList,
    id,
    category,
    score,
    episodeVo,
  } = data;
  useEffect(() => {
    document.title = slugify(name, {
      replacement: " ",
      trim: true,
      strict: true,
    });
  }, [name]);
  const dataBookmark = useMemo(() => {
    return {
      category,
      id,
      coverVerticalUrl,
      name,
      score,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, category]);
  const { setAddBookmark } = useAddBookmark(dataBookmark);
  const cate = useMemo(
    () => (Number(category) === categoryFilm.MOVIE ? "movie" : "tv"),
    [category]
  );
  const headerRef = useRef(null);
  const { width } = useWindowDimensions();
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= headerRef.current.offsetHeight) {
        headerRef.current.classList.remove(
          "!bg-transparent",
          "!shadow-none",
          "dark:bg-transparent"
        );
      } else {
        headerRef.current.classList.add(
          "!bg-transparent",
          "!shadow-none",
          "dark:bg-transparent"
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full min-h-screen bg-white dark:bg-primary">
      <Header ref={headerRef}></Header>
      <div
        style={{
          backgroundImage: `url(${resizeImage(
            coverHorizontalUrl?.replaceAll(" ", "%20"),
            `${width <= 425 ? "500" : "1000"}`
          )})`,
        }}
        className="backdrop-image relative h-screen w-full bg-cover bg-center bg-repeat md:pb-8 sm:h-[380px]"
      >
        <div className="relative left-1/2 top-[180px] flex h-[440px] max-w-[980px] -translate-x-1/2 gap-8 lg:top-[320px] lg:left-0 lg:h-full lg:max-w-full lg:-translate-x-0 lg:flex-col lg:gap-3 lg:px-24 md:top-[280px] md:px-11 sm:top-[160px] sm:px-8">
          <div className="relative h-full w-[280px] flex-shrink-0 rounded-xl lg:mx-auto lg:hidden">
            <LazyLoadImage
              src={resizeImage(coverVerticalUrl?.replaceAll(" ", "%20"), "300")}
              alt="img"
              className="object-cover w-full h-full select-none rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex-grow">
              <h1 className="w-full text-5xl font-semibold text-truncate-2 text-secondary lg:text-center lg:text-4xl sm:text-3xl">
                {name}
              </h1>
              <TagList
                className="lg:justify-center sm:gap-x-2"
                tagNameList={tagNameList}
              ></TagList>
              <Introduction
                className="sm:hidden"
                introduction={introduction}
              ></Introduction>
            </div>
            <div className="flex gap-4">
              <Button
                className="w-full max-w-[200px] border border-transparent bg-secondary lg:mx-auto"
                onClick={() =>
                  navigate(
                    `/watch/${cate}/${Number(id)}${
                      cate === "tv" ? "?episode=1" : ""
                    }`
                  )
                }
              >
                Watch now
              </Button>
              <Button
                className="w-full max-w-[200px] border border-transparent bg-secondary transition-all hover:border-secondary hover:bg-transparent hover:text-secondary hover:shadow-[#0D90F3_0px_0px_8px_0px] lg:mx-auto"
                onClick={() => setAddBookmark(true)}
              >
                Add bookmarked
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 pb-16 lg:mt-[60px] lg:pb-8 md:mt-[80px] md:px-6 sm:mt-[40px] sm:px-4">
        <div className="my-8">
          <Introduction
            className="hidden sm:block"
            introduction={introduction}
          ></Introduction>
          <EpisodeList episodeVo={episodeVo}></EpisodeList>
        </div>
        <div>
          <Title>Related movies</Title>
          <Swiper
            spaceBetween={20}
            breakpoints={{
              1280: {
                slidesPerView: "auto",
              },
              1024: {
                slidesPerView: "auto",
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
            {likeList &&
              likeList?.length > 0 &&
              likeList.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieCard movie={movie}></MovieCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
Detail.propTypes = {
  data: PropTypes.object.isRequired,
};
export default memo(Detail);
