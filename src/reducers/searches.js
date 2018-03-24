import { NEW_SEARCH } from '../constants/SearchConstants';

const initialState = [];

export default function searchesReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_SEARCH:
      return [...new Set([action.payload.term, ...state])];
    default:
      return state;
  }
}
