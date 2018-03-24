import { NEW_SEARCH, FETCHED_SEARCH_RESULTS } from '../constants/SearchConstants';
import { NEXT_DIRECTION, PREVIOUS_DIRECTION } from '../constants/SearchDirectionConstants';
import Giphy from '../lib/giphy';

export function addTerm(term) {
  return {
    type: NEW_SEARCH,
    payload: {
      term,
    },
  };
}

export function fetchedSearchResults({ data, direction, term }) {
  return {
    type: FETCHED_SEARCH_RESULTS,
    payload: {
      ...data,
      direction,
      term,
    },
  };
}

export function search({ term, direction = NEXT_DIRECTION }) {
  return (dispatch, getState) => {
    const termPagination = getState().pagination.searches[term];
    dispatch(addTerm(term));
    const offset =
      !termPagination || direction === PREVIOUS_DIRECTION
        ? 0
        : termPagination.offset + termPagination.count;
    return Giphy.search({ term, offset }).then((res) => {
      dispatch(fetchedSearchResults({ data: res, term, direction }));
    });
  };
}
