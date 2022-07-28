import axios from "../utils/axios";

export const getHome = async (page = 0) => {
  const response = await axios.get("homePage/getHome", {
    params: {
      page: page,
    },
  });
  return response.data.data.recommendItems.filter(
    (item) => !item.bannerProportion
  );
};
