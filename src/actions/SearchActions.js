import { NEW_SEARCH } from '../constants/SearchConstants';

export function addTerm(term) {
  return {
    type: NEW_SEARCH,
    payload: {
      term,
    },
  };
}

export function search(term) {
  return (dispatch) => {
    dispatch(addTerm(term));
    // TODO: Add giphy search async
    // Giphy.search(term)
    //      .then()
    return Promise.resolve();
  };
}
