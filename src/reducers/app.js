import { TOGGLE_MENU } from '../constants/AppConstants';
import { NEW_SEARCH } from '../constants/SearchConstants';

const initialState = {
  showNavMenu: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        showNavMenu: !state.showNavMenu,
      };
    case NEW_SEARCH:
      return {
        ...state,
        showNavMenu: false,
      };
    default:
      return state;
  }
}
