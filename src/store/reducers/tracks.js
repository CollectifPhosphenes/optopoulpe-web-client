import { FETCH_DATA_SUCCESS } from "store/glossary";

export const TRACKS_DEFAULT_STATE = [];

export default (state = TRACKS_DEFAULT_STATE, payload) => {
  const { data, type } = payload;

  switch (type) {
    case FETCH_DATA_SUCCESS:
      return data.tracks;
    default:
      return state;
  }
};