import TopSearchItem from "./TopSearchItem";
import Title from "./Title";
import TagList from "./TagList";
import Star from "./Star";
import slugify from "slugify";
import React, { useEffect } from "react";
import PageNotFound from "../pages/PageNotFound";
import Introduction from "./Introduction";
import HlsPlayer from "react-hls-player";
import EpisodeList from "./EpisodeList";
import { Timestamp } from "firebase/firestore";
import { Player } from "react-tuby";
import { Link, useNavigate } from "react-router-dom";
import { categoryFilm, subtitleProxy } from "../utils/constants";

const WatchView = ({ sources, data, subtitles, episodeIndex }) => {
  const navigate = useNavigate();
  const {
    name,
    tagNameList,
    year,
    coverVerticalUrl,
    episodeVo,
    likeList,
    score,
    introduction,
    category,
    id,
  } = data;
  useEffect(() => {
    document.title = slugify(name, {
      replacement: " ",
      trim: true,
      strict: true,
    });
  }, [name]);
  useEffect(() => {
    if (!data) return;
    const history = JSON.parse(localStorage.getItem("history")) || [];
    const historyData = {
      id: Number(id),
      coverVerticalUrl: coverVerticalUrl,
      name: name,
      score: score,
      category: category,
      createdAt: Timestamp.fromDate(new Date(Date.now())),
    };
    if (history.some((item) => item.id === historyData.id)) {
      const index = history.findIndex((item) => item.id === historyData.id);
      history[index].createdAt = Timestamp.fromDate(new Date(Date.now()));
    } else {
      history.push(historyData);
    }
    localStorage.setItem("history", JSON.stringify(history));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (!data || !sources) return <PageNotFound></PageNotFound>;
  return (
    <div className="flex justify-between gap-10 lg:flex-col lg:gap-0">
      <div className="w-[900px] lg:w-full">
        <Player
          src={sources}
          subtitles={
            subtitles.map((subtitle) => ({
              ...subtitle,
              url: subtitleProxy(subtitle.url),
            })) || []
          }
          primaryColor="#0D90F3"
          poster={coverVerticalUrl}
        >
          {(ref, props) => <HlsPlayer playerRef={ref} {...props} />}
        </Player>
        <Title className="cursor-pointer hover:text-secondary">
          <Link
            to={`/${categoryFilm.MOVIE === category ? "movie" : "tv"}/${id}`}
          >
            {name}
          </Link>
        </Title>
        <div className="flex items-center gap-3">
          <Star score={score}></Star>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-primary dark:text-white">{year}</span>
          </div>
        </div>
        <TagList tagNameList={tagNameList}></TagList>
        <Introduction introduction={introduction}></Introduction>
        <div className="mb-10">
          <EpisodeList
            episodeVo={episodeVo}
            episodeIndex={episodeIndex}
          ></EpisodeList>
        </div>
      </div>
      <div className="w-[354px] flex-grow lg:pb-12 sm:w-full">
        <Title className="mt-0 mb-8 sm:mb-3">Recommended</Title>
        <div className="scrollbar-none flex max-h-[600px] flex-col gap-3 overflow-auto">
          {likeList.map((item) => (
            <TopSearchItem
              key={item.id}
              onClick={() =>
                navigate(
                  `/${
                    item.category === categoryFilm.TV ? "tv" : "movie"
                  }/${Number(item.id)}`
                )
              }
              data={item}
            ></TopSearchItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchView;
