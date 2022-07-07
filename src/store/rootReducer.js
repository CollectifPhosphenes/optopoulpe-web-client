import { combineReducers } from 'redux';

import {AppReducer, GlobalReducer, TracksReducer} from './reducers';

export default combineReducers({
  app: AppReducer,
  global: GlobalReducer,
  tracks: TracksReducer
});