import { FETCHED_TRENDING } from '../../constants/TrendingConstants';
import { FETCHED_SEARCH_RESULTS } from '../../constants/SearchConstants';
import { NEXT_DIRECTION } from '../../constants/SearchDirectionConstants';

export default function gifAllIdsReducer(state = [], action) {
  switch (action.type) {
    case FETCHED_TRENDING:
      return action.payload.direction === NEXT_DIRECTION
        ? [...new Set([...state, ...action.payload.data.map(gif => gif.id)])]
        : [...new Set([...action.payload.data.map(gif => gif.id), ...state])];
    case FETCHED_SEARCH_RESULTS:
      return action.payload.direction === NEXT_DIRECTION
        ? [...new Set([...state, ...action.payload.data.map(gif => gif.id)])]
        : [...new Set([...action.payload.data.map(gif => gif.id), ...state])];
    default:
      return state;
  }
}
