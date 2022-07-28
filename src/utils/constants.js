export const categoryFilm = {
  MOVIE: 0,
  TV: 1,
};

export const PROXY = "https://ezexpress.tk/";

export const subtitleProxy = (url) =>
  `https://srt-to-vtt.vercel.app?url=${encodeURIComponent(url)}`;

export const screenWidth = {
  XL: 1279,
  LG: 1023,
  MD: 767,
  SM: 425,
};

export const resizeImage = (url, width = "", height = "") =>
  url.startsWith("https://graph.facebook.com/")
    ? url
    : `https://images.weserv.nl/?url=${encodeURIComponent(
        url
      )}&w=${width}&h=${height}&fit=outside`;
