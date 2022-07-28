import React from "react";
import MainLayout from "../layouts/MainLayout";

const Pornhub = () => {
  return (
    <MainLayout>
      <div className="h-[600px] w-full px-6 py-10">
        <video controls autoPlay className="w-full h-full">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </MainLayout>
  );
};

export default Pornhub;
