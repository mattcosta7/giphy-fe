import { FETCHED_TRENDING } from '../constants/TrendingConstants';

const DEFAULT_PAGINATION_SHAPE = {
  count: 0,
  offset: 0,
  total_count: 0,
};

const initialState = {
  trending: {
    ...DEFAULT_PAGINATION_SHAPE,
  },
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_TRENDING:
      return {
        ...state,
        trending: {
          count: action.payload.pagination.count,
          offset: action.payload.pagination.offset,
          total_count: action.payload.pagination.total_count,
        },
      };
    default:
      return state;
  }
}
