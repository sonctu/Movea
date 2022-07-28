import axios from "../utils/axios";

export const getSearchLeader = async () => {
  const response = await axios.get("search/v1/searchLeaderboard");
  return response.data.data.list;
};

export const getSearchKeyWord = async (keyword) => {
  const response = await axios.post("search/v1/searchWithKeyWord", {
    searchKeyWord: keyword,
    size: 50,
    sort: "",
    searchType: "",
  });
  return response.data.data.searchResults;
};

export const getTopSearchKeyword = async (keyword) => {
  const response = await axios.post("search/searchLenovo", {
    searchKeyWord: keyword,
    size: 10,
  });
  return response.data.data.searchResults;
};

export const getSearchConfig = async () => {
  const response = await axios.get("search/list");
  return response.data.data;
};

export const advancedSearch = async (params, configs, key) => {
  const response = await axios.post(`search/v1/search`, {
    size: key,
    params,
    ...configs,
  });
  return response.data.data.searchResults;
};
