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

export function fetchTrending({ direction = 'next' } = {}) {
  return (dispatch, getState) => {
    const trendingPagination = getState().pagination.trending;
    dispatch(fetchingTrending());
    const offset = direction === 'prev' ? 0 : trendingPagination.offset + trendingPagination.count;

    return Giphy.getTrending({ offset }).then((res) => {
      dispatch(fetchedTrending(res));
    });
  };
}
