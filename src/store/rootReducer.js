import { combineReducers } from 'redux';

import {
  AppReducer,
  GlobalReducer,
  TracksReducer,
  LogsReducer
} from './reducers';

export default combineReducers({
  app: AppReducer,
  global: GlobalReducer,
  logs: LogsReducer,
  tracks: TracksReducer
});