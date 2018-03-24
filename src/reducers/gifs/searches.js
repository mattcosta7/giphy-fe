import { NEW_SEARCH, FETCHED_SEARCH_RESULTS } from '../../constants/SearchConstants';
import { NEXT_DIRECTION } from '../../constants/SearchDirectionConstants';

export default function searchGifReducer(state = {}, action) {
  switch (action.type) {
    case NEW_SEARCH:
      if (state[action.payload.term]) return state;
      return Object.assign({}, state, {
        [action.payload.term]: [],
      });
    case FETCHED_SEARCH_RESULTS:
      return Object.assign({}, state, {
        [action.payload.term]:
          action.payload.direction === NEXT_DIRECTION
            ? [
              ...new Set([
                ...state[action.payload.term],
                ...action.payload.data.map(gif => gif.id),
              ]),
            ]
            : [
              ...new Set([
                ...action.payload.data.map(gif => gif.id),
                ...state[action.payload.term],
              ]),
            ],
      });
    default:
      return state;
  }
}
