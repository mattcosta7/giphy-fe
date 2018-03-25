import { TOGGLE_NAV_MENU, CLOSE_NAV_MENU } from '../constants/AppConstants';
import { NEW_SEARCH } from '../constants/SearchConstants';

const initialState = {
  showNavMenu: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV_MENU:
      return {
        ...state,
        showNavMenu: !state.showNavMenu,
      };
    case NEW_SEARCH:
    case CLOSE_NAV_MENU:
      return {
        ...state,
        showNavMenu: false,
      };
    default:
      return state;
  }
}
