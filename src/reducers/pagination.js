import { combineReducers } from 'redux';
import trending from './pagination/trending';
import searches from './pagination/searches';

export default combineReducers({
  trending,
  searches,
});
