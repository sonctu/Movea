import React from "react";
import Skeleton from "react-loading-skeleton";

const WatchViewSkeleton = () => {
  return (
    <div className="flex justify-between gap-10 lg:flex-col lg:gap-0">
      <div className="w-[900px] lg:w-full">
        <Skeleton className="h-[400px] sm:h-[200px]"></Skeleton>
        <Skeleton className="h-[30px] my-4"></Skeleton>
        <Skeleton className="h-[80px]"></Skeleton>
      </div>
      <div className="w-[354px] flex-grow lg:pb-12 sm:w-full">
        <Skeleton className="h-[30px] mb-4 lg:mt-4"></Skeleton>
        <div className="flex flex-col gap-3 max-h-[600px] overflow-auto scrollbar-none">
          {[...new Array(6).fill(0)].map((_, index) => (
            <div className="flex gap-3 cursor-pointer" key={index}>
              <div className="w-[100px] h-[50px] rounded-lg flex-shrink-0">
                <Skeleton className="h-[50px]"></Skeleton>
              </div>
              <div className="font-medium text-base leading-6 text-truncate-2 flex-grow">
                <Skeleton></Skeleton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchViewSkeleton;
