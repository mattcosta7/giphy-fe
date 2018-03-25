import { NEW_SEARCH, FETCHED_SEARCH_RESULTS } from '../../constants/SearchConstants';

export default function loadingReducer(state = {}, action) {
  switch (action.type) {
    case NEW_SEARCH:
      return {
        ...state,
        [action.payload.term]: true,
      };
    case FETCHED_SEARCH_RESULTS:
      return {
        ...state,
        [action.payload.term]: false,
      };
    default:
      return state;
  }
}
