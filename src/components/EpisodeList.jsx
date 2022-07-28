import React from "react";
import { NavLink, useParams } from "react-router-dom";
import IconEye from "./icons/IconEye";
import IconFilter from "./icons/IconFilter";
import PropTypes from "prop-types";

const EpisodeList = ({ episodeVo, episodeIndex }) => {
  const { id } = useParams();
  return (
    <>
      {episodeVo.length > 1 && (
        <div className="select-none">
          <div className="rounded-lg bg-[#3F3F3F] py-2 pl-1">
            <div className="relative inline-block mb-4">
              <input
                type="number"
                id="filter"
                className="w-full max-w-[220px] rounded-lg bg-[#5F5F5F] py-1 pl-2 pr-9 text-sm font-medium outline-none"
                placeholder="Go to episode..."
              />
              <label
                htmlFor="filter"
                className="absolute inline-block w-5 h-5 -translate-y-1/2 cursor-pointer top-1/2 right-2"
              >
                <IconFilter></IconFilter>
              </label>
            </div>
            <div className="episode-list grid max-h-[400px] grid-cols-7 overflow-y-auto lg:grid-cols-5 md:grid-cols-4 sm:max-h-[260px] sm:grid-cols-3">
              {episodeVo &&
                episodeVo.reverse().map((item) => (
                  <NavLink
                    to={`/watch/tv/${id}?episode=${item.seriesNo}`}
                    key={item.seriesNo}
                    className="inline-block mb-2 mr-2"
                  >
                    <div
                      className={`flex h-[90px] w-full cursor-pointer items-center justify-center gap-[6px] rounded-xl transition-all duration-300 hover:bg-slate-600 sm:h-16 ${
                        episodeIndex === item.seriesNo
                          ? "bg-slate-600"
                          : "bg-primary"
                      }`}
                    >
                      <span className="text-sm font-medium sm:text-xs">
                        Episode {item.seriesNo}
                      </span>
                      <span className="w-4 h-4">
                        <IconEye></IconEye>
                      </span>
                    </div>
                  </NavLink>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

EpisodeList.propTypes = {
  episodeVo: PropTypes.array.isRequired,
  episodeIndex: PropTypes.number,
  children: PropTypes.any,
};
export default EpisodeList;
