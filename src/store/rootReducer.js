import { combineReducers } from 'redux';

import { GlobalReducer, TracksReducer } from './reducers';

export default combineReducers({
  global: GlobalReducer,
  tracks: TracksReducer
});