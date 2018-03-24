import { FETCHED_TRENDING } from '../../constants/TrendingConstants';
import { DEFAULT_PAGINATION_SHAPE } from '../../constants/PaginationConstants';

const initialState = {
  ...DEFAULT_PAGINATION_SHAPE,
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_TRENDING:
      return {
        count: action.payload.pagination.count,
        offset:
          action.payload.pagination.offset > state.offset
            ? action.payload.pagination.offset
            : state.offset,
        total_count: action.payload.pagination.total_count,
      };
    default:
      return state;
  }
}
