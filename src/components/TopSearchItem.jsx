import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import { resizeImage } from "../utils/constants";

const TopSearchItem = ({ data, loading, ...props }) => {
  const { cover, title, coverVerticalUrl, coverHorizontalUrl, name } = data;
  if (loading)
    return (
      <div className="flex gap-3 cursor-pointer">
        <div className="h-[50px] w-[100px] flex-shrink-0 rounded-lg">
          <Skeleton className="h-[50px]"></Skeleton>
        </div>
        <div className="flex-grow text-base font-medium leading-6 text-truncate-2">
          <Skeleton></Skeleton>
        </div>
      </div>
    );
  return (
    <div className="flex gap-3 cursor-pointer group" {...props}>
      <div className="h-[50px] w-[100px] flex-shrink-0 rounded-lg">
        <LazyLoadImage
          src={resizeImage(
            cover || coverVerticalUrl || coverHorizontalUrl,
            "150"
          )}
          alt="img"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex-grow text-base font-medium leading-6 transition-all text-truncate-2 text-primary group-hover:text-secondary dark:text-white sm:text-sm">
        {title || name}
      </div>
    </div>
  );
};

export default TopSearchItem;
