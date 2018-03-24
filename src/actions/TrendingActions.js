import { FETCHING_TRENDING, FETCHED_TRENDING } from '../constants/TrendingConstants';
import { NEXT_DIRECTION, PREVIOUS_DIRECTION } from '../constants/SearchDirectionConstants';
import Giphy from '../lib/giphy';

export function fetchingTrending() {
  return {
    type: FETCHING_TRENDING,
  };
}

export function fetchedTrending({ data, direction }) {
  return {
    type: FETCHED_TRENDING,
    payload: {
      ...data,
      direction,
    },
  };
}

export function fetchTrending({ direction = NEXT_DIRECTION } = {}) {
  return (dispatch, getState) => {
    const trendingPagination = getState().pagination.trending;
    dispatch(fetchingTrending());
    const offset =
      direction === PREVIOUS_DIRECTION ? 0 : trendingPagination.offset + trendingPagination.count;
    return Giphy.getTrending({ offset }).then((res) => {
      dispatch(fetchedTrending({ data: res, direction }));
    });
  };
}
