import {
  LOG_BPM,
  LOG_CURRENT_TRACK,
  LOG_KILL_ALL_TRACK,
  LOG_SAVE_STATE,
  LOG_STROBE_SPEED,
  LOG_TRACK
} from 'store/glossary';

export const LOGS_DEFAULT_STATE = [];

export default (state = LOGS_DEFAULT_STATE, payload) => {
  const { message, type } = payload;

  switch (type) {
    case LOG_BPM:
      return [...state, message];
    case LOG_CURRENT_TRACK:
      return [...state, message];
    case LOG_KILL_ALL_TRACK:
      return [...state, message];
    case LOG_STROBE_SPEED:
      return [...state, message];
    case LOG_SAVE_STATE:
      return [...state, message];
    case LOG_TRACK:
      return [...state, ...message];
    default:
      return state;
  }
};