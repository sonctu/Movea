import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useAddBookmark(data) {
  const [addBookmark, setAddBookmark] = useState(false);
  useEffect(() => {
    try {
      if (addBookmark) {
        const bookmarked = JSON.parse(localStorage.getItem("bookmarked")) || [];
        const {
          category,
          imageUrl,
          id,
          score,
          title,
          coverVerticalUrl,
          name,
          domainType,
          sort,
        } = data;
        const bookmarkData = {
          score: score || parseFloat(sort).toFixed(1),
          title: title || name,
          imageUrl: imageUrl || coverVerticalUrl,
          category: category ?? domainType,
          id,
          createdAt: Timestamp.fromDate(new Date(Date.now())),
        };
        const check = bookmarked.some((item) => item.id === id);
        if (check) {
          const index = bookmarked.findIndex((item) => item.id === id);
          bookmarked[index].createdAt = Timestamp.fromDate(
            new Date(Date.now())
          );
        } else {
          bookmarked.push(bookmarkData);
        }
        localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
        toast.success("Add movie to success bookmark");
        console.log(addBookmark);
      }
    } catch (error) {
      toast.error("Error");
      console.log(error);
    }
  }, [addBookmark, data]);
  return {
    addBookmark,
    setAddBookmark,
  };
}
