import useSWR from "swr";
import TopSearchItem from "./TopSearchItem";
import Title from "./Title";
import Search from "./Search";
import React from "react";
import InfoUser from "./InfoUser";
import DarkMode from "./DarkMode";
import Button from "./Button";
import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import { getSearchLeader } from "../services/search";
import { categoryFilm } from "../utils/constants";

const TopSearches = ({ className = "" }) => {
  const navigate = useNavigate();
  const { data, error } = useSWR("home-search-0", getSearchLeader);
  const loading = !data && !error;
  const user = useStore((state) => state.user);
  return (
    <div
      className={`scrollbar-none fixed top-0 right-0 bottom-0 z-50 min-h-full w-[354px] overflow-y-auto border-l-2 border-l-secondary px-4 py-2 dark:border-l-transparent dark:bg-primary lg:hidden lg:w-[320px] md:translate-x-full ${className}`}
    >
      {!user ? (
        <div className={`my-4 flex justify-between`}>
          <DarkMode></DarkMode>
          <Button
            className={`select-none rounded-md bg-secondary text-sm font-semibold`}
            onClick={() => navigate("/login")}
          >
            Sign in
          </Button>
        </div>
      ) : (
        <InfoUser user={user}></InfoUser>
      )}
      <Search></Search>
      <Title>Top Searches</Title>
      <div className="flex flex-col gap-3">
        {data?.length > 0 &&
          data.map((item) => (
            <TopSearchItem
              loading={loading}
              key={item.id}
              data={item}
              onClick={() =>
                navigate(
                  `/${
                    item.domainType === categoryFilm.TV ? "tv" : "movie"
                  }/${Number(item.id)}`
                )
              }
            ></TopSearchItem>
          ))}
      </div>
    </div>
  );
};

export default React.memo(TopSearches);
