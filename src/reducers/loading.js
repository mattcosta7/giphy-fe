import { FETCHING_TRENDING, FETCHED_TRENDING } from '../constants/TrendingConstants';
import { NEW_SEARCH, FETCHED_SEARCH_RESULTS } from '../constants/SearchConstants';
import searchesLoadingReducer from './loading/searches';

const initialState = {
  trending: false,
  searches: {},
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_TRENDING:
      return {
        ...state,
        trending: true,
      };
    case FETCHED_TRENDING:
      return {
        ...state,
        trending: false,
      };
    case NEW_SEARCH:
    case FETCHED_SEARCH_RESULTS:
      return {
        ...state,
        searches: searchesLoadingReducer(state.searches, action),
      };
    default:
      return state;
  }
}
