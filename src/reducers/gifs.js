import { FETCHED_TRENDING } from '../constants/TrendingConstants';

const initialState = {
  byId: {},
  allIds: [],
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
        allIds: [...new Set([...state.allIds, ...action.payload.data.map(gif => gif.id)])],
      });
    default:
      return state;
  }
}
