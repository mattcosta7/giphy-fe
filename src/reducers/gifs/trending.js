import { FETCHED_TRENDING } from '../../constants/TrendingConstants';
import { NEXT_DIRECTION } from '../../constants/SearchDirectionConstants';

export default function trendingGifReducer(state = [], action) {
  switch (action.type) {
    case FETCHED_TRENDING:
      return action.payload.direction === NEXT_DIRECTION
        ? [...new Set([...state, ...action.payload.data.map(gif => gif.id)])]
        : [...new Set([...action.payload.data.map(gif => gif.id), ...state])];
    default:
      return state;
  }
}
