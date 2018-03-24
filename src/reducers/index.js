import { combineReducers } from 'redux';
import searches from './searches';
import gifs from './gifs';
import pagination from './pagination';

export default combineReducers({
  searches,
  gifs,
  pagination,
});
