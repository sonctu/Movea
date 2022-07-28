import axios from "../utils/axios";

export const getPreviewVideo = async () => {
  const response = await axios.get("recommendPool/getVideoFromRecommondPool", {
    params: {
      page: 0,
    },
  });
  return response.data.data;
};

export const getMediaInfo = async (
  category,
  id,
  data,
  quality,
  episodeIndex = 0
) => {
  const response = await axios.get("media/previewInfo", {
    params: {
      category,
      contentId: id,
      episodeId: data.episodeVo[episodeIndex].id,
      definition: quality.code,
    },
  });
  return response.data.data.mediaUrl;
};
