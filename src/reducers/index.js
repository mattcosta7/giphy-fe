import { combineReducers } from 'redux';
import searches from './searches';
import gifs from './gifs';
import pagination from './pagination';
import loading from './loading';
import app from './app';

export default combineReducers({
  searches,
  gifs,
  pagination,
  loading,
  app,
});
