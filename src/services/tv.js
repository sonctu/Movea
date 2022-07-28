import axios from "../utils/axios";
import { getMediaInfo } from "./preview";

export const getTVDetail = async (id, episodeIndex) => {
  const response = await axios.get("movieDrama/get", {
    params: {
      id,
      category: 1,
    },
  });
  const data = response.data.data;
  const mediaUrl = await Promise.all(
    data.episodeVo[episodeIndex].definitionList.map((quality) =>
      getMediaInfo(1, id, data, quality, episodeIndex)
    )
  );
  const sources = mediaUrl
    .map((url, index) => ({
      quality: Number(
        data.episodeVo[episodeIndex].definitionList[index].description
          .toLowerCase()
          .replace("p", "")
      ),
      url,
    }))
    .sort((a, b) => b.quality - a.quality);
  const subtitles = data.episodeVo[episodeIndex].subtitlingList
    .map((sub) => ({
      lang: sub.languageAbbr,
      language: sub.language,
      url: sub.subtitlingUrl,
    }))
    .filter((sub) => sub.lang === "en" || sub.lang === "vi");
  return { data, sources, subtitles };
};
