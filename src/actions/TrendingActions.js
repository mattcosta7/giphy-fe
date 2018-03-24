import { FETCHING_TRENDING, FETCHED_TRENDING } from '../constants/TrendingConstants';
import Giphy from '../lib/giphy';

export function fetchingTrending() {
  return {
    type: FETCHING_TRENDING,
  };
}

export function fetchedTrending(data) {
  return {
    type: FETCHED_TRENDING,
    payload: data,
  };
}

export function fetchTrending() {
  return (dispatch, getState) => {
    // const trendingPagination = getState().pagination.trending;
    // console.log(trendingPagination);
    dispatch(fetchingTrending());
    Giphy.getTrending().then((res) => {
      console.log(res);
      dispatch(fetchedTrending(res));
    });
  };
}
