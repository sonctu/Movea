import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useHandleLocalStorage(nameStorage) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem(nameStorage)) || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClearAll = () => {
    localStorage.removeItem(nameStorage);
    setData([]);
    toast.info("Delete all movies in success mark");
  };
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    localStorage.setItem(nameStorage, JSON.stringify(newData));
    setData(newData);
    toast.info("Remove movie from success bookmark", {
      className: "text-sm text-slate-600",
    });
  };
  return {
    handleClearAll,
    handleDelete,
    data,
    setData,
  };
}
