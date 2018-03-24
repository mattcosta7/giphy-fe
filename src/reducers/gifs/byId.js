import { FETCHED_TRENDING } from '../../constants/TrendingConstants';
import { FETCHED_SEARCH_RESULTS } from '../../constants/SearchConstants';

export default function gifByIdReducer(state = {}, action) {
  switch (action.type) {
    case FETCHED_TRENDING:
      return Object.assign({}, state, {
        ...state,
        ...action.payload.data.reduce(
          (acc, item) => Object.assign({}, acc, { [item.id]: item }),
          {}
        ),
      });
    case FETCHED_SEARCH_RESULTS:
      return Object.assign({}, state, {
        ...state,
        ...action.payload.data.reduce(
          (acc, item) => Object.assign({}, acc, { [item.id]: item }),
          {}
        ),
      });
    default:
      return state;
  }
}
