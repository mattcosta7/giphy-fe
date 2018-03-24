import { FETCHED_TRENDING } from '../constants/TrendingConstants';
import { NEW_SEARCH, FETCHED_SEARCH_RESULTS } from '../constants/SearchConstants';
import { NEXT_DIRECTION } from '../constants/SearchDirectionConstants';

const initialState = {
  byId: {},
  allIds: [],
  trending: [],
  searches: {},
};
export default function gifReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_TRENDING:
      return Object.assign({}, state, {
        byId: {
          ...state.byId,
          ...action.payload.data.reduce(
            (acc, item) => Object.assign({}, acc, { [item.id]: item }),
            {}
          ),
        },
        allIds:
          action.payload.direction === NEXT_DIRECTION
            ? [...new Set([...state.allIds, ...action.payload.data.map(gif => gif.id)])]
            : [...new Set([...action.payload.data.map(gif => gif.id), ...state.allIds])],
        trending:
          action.payload.direction === NEXT_DIRECTION
            ? [...new Set([...state.trending, ...action.payload.data.map(gif => gif.id)])]
            : [...new Set([...action.payload.data.map(gif => gif.id), ...state.trending])],
      });
    case NEW_SEARCH:
      if (state.searches[action.payload.term]) return state;
      return Object.assign({}, state, {
        searches: {
          ...state.searches,
          [action.payload.term]: [],
        },
      });
    case FETCHED_SEARCH_RESULTS:
      return Object.assign({}, state, {
        byId: {
          ...state.byId,
          ...action.payload.data.reduce(
            (acc, item) => Object.assign({}, acc, { [item.id]: item }),
            {}
          ),
        },
        allIds:
          action.payload.direction === NEXT_DIRECTION
            ? [...new Set([...state.allIds, ...action.payload.data.map(gif => gif.id)])]
            : [...new Set([...action.payload.data.map(gif => gif.id), ...state.allIds])],
        searches: {
          ...state.searches,
          [action.payload.term]:
            action.payload.direction === NEXT_DIRECTION
              ? [
                ...new Set([
                  ...state.searches[action.payload.term],
                  ...action.payload.data.map(gif => gif.id),
                ]),
              ]
              : [
                ...new Set([
                  ...action.payload.data.map(gif => gif.id),
                  ...state.searches[action.payload.term],
                ]),
              ],
        },
      });
    default:
      return state;
  }
}
