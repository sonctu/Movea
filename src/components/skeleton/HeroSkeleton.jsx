import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";

const HeroSkeleton = () => {
  return (
    <div className="md:mt-16 w-full">
      <Skeleton className="h-8 !w-[100px] my-5"></Skeleton>
      <div className="hero-list">
        <Swiper
          spaceBetween={20}
          className="h-full rounded-xl"
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
          grabCursor={true}
        >
          {[...new Array(10).fill(0)].map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <Skeleton className="h-[300px] !rounded-xl md:!w-full sm:h-full"></Skeleton>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSkeleton;
