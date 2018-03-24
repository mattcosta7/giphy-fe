import { FETCHED_SEARCH_RESULTS, NEW_SEARCH } from '../../constants/SearchConstants';
import { DEFAULT_PAGINATION_SHAPE } from '../../constants/PaginationConstants';

export default function paginationReducer(state = {}, action) {
  switch (action.type) {
    case NEW_SEARCH:
      if (state[action.payload.term]) return state;
      return {
        ...state,
        [action.payload.term]: {
          ...DEFAULT_PAGINATION_SHAPE,
        },
      };
    case FETCHED_SEARCH_RESULTS:
      return {
        ...state,
        [action.payload.term]: {
          count: action.payload.pagination.count,
          offset:
            action.payload.pagination.offset > state[action.payload.term].offset
              ? action.payload.pagination.offset
              : state[action.payload.term].offset,
          total_count: action.payload.pagination.total_count,
        },
      };
    default:
      return state;
  }
}
