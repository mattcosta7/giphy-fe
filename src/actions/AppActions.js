import { TOGGLE_NAV_MENU, CLOSE_NAV_MENU } from '../constants/AppConstants';

export function toggleShowNavMenu() {
  return {
    type: TOGGLE_NAV_MENU,
  };
}

export function closeNavMenu() {
  return {
    type: CLOSE_NAV_MENU,
  };
}
