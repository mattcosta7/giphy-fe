import { FETCHED_TRENDING } from '../constants/TrendingConstants';
import { FETCHED_SEARCH_RESULTS, NEW_SEARCH } from '../constants/SearchConstants';

const DEFAULT_PAGINATION_SHAPE = {
  count: 0,
  offset: 0,
  total_count: 0,
};

const initialState = {
  trending: {
    ...DEFAULT_PAGINATION_SHAPE,
  },
  searches: {},
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_TRENDING:
      return {
        ...state,
        trending: {
          count: action.payload.pagination.count,
          offset:
            action.payload.pagination.offset > state.trending.offset
              ? action.payload.pagination.offset
              : state.trending.offset,
          total_count: action.payload.pagination.total_count,
        },
      };
    case NEW_SEARCH:
      if (state.searches[action.payload.term]) return state;
      return {
        ...state,
        searches: {
          ...state.searches,
          [action.payload.term]: {
            ...DEFAULT_PAGINATION_SHAPE,
          },
        },
      };
    case FETCHED_SEARCH_RESULTS:
      return {
        ...state,
        searches: {
          ...state.searches,
          [action.payload.term]: {
            count: action.payload.pagination.count,
            offset:
              action.payload.pagination.offset > state.searches[action.payload.term].offset
                ? action.payload.pagination.offset
                : state.searches[action.payload.term].offset,
            total_count: action.payload.pagination.total_count,
          },
        },
      };
    default:
      return state;
  }
}
