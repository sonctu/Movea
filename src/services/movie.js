import axios from "../utils/axios";
import { getMediaInfo } from "./preview";

export const getMovieDetail = async (id) => {
  const response = await axios.get("movieDrama/get", {
    params: {
      id,
      category: 0,
    },
  });
  const data = response.data.data;
  const mediaUrl = await Promise.all(
    data.episodeVo[0].definitionList.map((quality) =>
      getMediaInfo(0, id, data, quality, 0)
    )
  );
  const sources = mediaUrl
    .map((url, index) => ({
      quality: Number(
        data.episodeVo[0].definitionList[index].description
          .toLowerCase()
          .replace("p", "")
      ),
      url,
    }))
    .sort((a, b) => b.quality - a.quality);
  const subtitles = data.episodeVo[0].subtitlingList
    .map((sub) => ({
      lang: sub.languageAbbr,
      language: sub.language,
      url: sub.subtitlingUrl,
    }))
    .filter((sub) => sub.lang === "en" || sub.lang === "vi");
  return { data, sources, subtitles };
};
