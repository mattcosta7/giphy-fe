import { FETCHED_TRENDING } from '../../constants/TrendingConstants';
import { FETCHED_SEARCH_RESULTS } from '../../constants/SearchConstants';

export default function gifAllIdsReducer(state = [], action) {
  switch (action.type) {
    case FETCHED_TRENDING:
    case FETCHED_SEARCH_RESULTS:
      return [...new Set([...state, ...action.payload.data.map(gif => gif.id)])];
    default:
      return state;
  }
}
