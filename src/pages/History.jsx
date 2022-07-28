import React from "react";
import useHandleLocalStorage from "../hooks/useHandleLocalStorage";
import LibLayout from "../layouts/LibLayout";
import MainLayout from "../layouts/MainLayout";

const History = () => {
  const { data, handleClearAll, handleDelete } =
    useHandleLocalStorage("history");

  return (
    <MainLayout>
      <LibLayout
        textFound={"No watch history found"}
        handleClearAll={handleClearAll}
        handleDelete={handleDelete}
        data={data}
      ></LibLayout>
    </MainLayout>
  );
};

export default History;
