import { combineReducers } from 'redux';
import allIds from './gifs/allIds';
import byId from './gifs/byId';
import searches from './gifs/searches';
import trending from './gifs/trending';

export default combineReducers({
  allIds,
  byId,
  searches,
  trending,
});
