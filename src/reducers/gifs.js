import { FETCHED_TRENDING } from '../constants/TrendingConstants';

const initialState = {
  byId: {},
  allIds: [],
};
export default function gifReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_TRENDING:
      return action.payload.data.reduce(
        (acc, item) =>
          Object.assign({}, acc, {
            byId: {
              ...acc.byId,
              [item.id]: {
                ...item,
              },
            },
            allIds: [...new Set([...acc.allIds, item.id])],
          }),
        { byId: {}, allIds: [] }
      );
    default:
      return state;
  }
}
