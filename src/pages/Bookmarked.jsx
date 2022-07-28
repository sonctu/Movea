import React from "react";
import useHandleLocalStorage from "../hooks/useHandleLocalStorage";
import LibLayout from "../layouts/LibLayout";
import MainLayout from "../layouts/MainLayout";

const Bookmarked = () => {
  const { data, handleClearAll, handleDelete } =
    useHandleLocalStorage("bookmarked");
  return (
    <MainLayout>
      <LibLayout
        handleClearAll={handleClearAll}
        data={data}
        handleDelete={handleDelete}
        textFound={"You currently do not have a bookmarked movie list"}
      ></LibLayout>
    </MainLayout>
  );
};

export default Bookmarked;
