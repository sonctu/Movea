import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";

const ListSkeleton = () => {
  const data = new Array(10).fill(0);
  return (
    <div>
      <Skeleton className="h-8 !w-[100px] my-5"></Skeleton>
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
        {data?.length > 0 &&
          data.map((_, index) => (
            <SwiperSlide key={index}>
              <Skeleton className="card-container"></Skeleton>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ListSkeleton;
