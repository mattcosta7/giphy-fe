import { combineReducers } from 'redux';
import searches from './searches';
import gifs from './gifs';

export default combineReducers({
  searches,
  gifs,
});
