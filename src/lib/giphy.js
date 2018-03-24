import { get } from '../api';

const HOST = 'https://api.giphy.com';

const SEARCH_URL = `${HOST}/v1/gifs/search`;
const TRENDING_URL = `${HOST}/v1/gifs/trending`;

function search({
  term,
  limit = 25,
  offset = 0,
  rating = undefined,
  lang = 'en',
  fmt = 'json',
} = {}) {
  return get(SEARCH_URL, {
    query: {
      api_key: process.env.GIPHY_API_KEY,
      q: term,
      limit,
      offset,
      rating,
      lang,
      fmt,
    },
  });
}

function getTrending({
  limit = 25, offset = 0, rating = undefined, fmt = 'json',
} = {}) {
  return get(TRENDING_URL, {
    query: {
      api_key: process.env.GIPHY_API_KEY,
      limit,
      offset,
      rating,
      fmt,
    },
  });
}

export default { search, getTrending };
