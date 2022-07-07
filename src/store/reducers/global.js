import {FETCH_DATA_SUCCESS} from "store/glossary";

export const GLOBAL_DEFAULT_STATE = {
  bpm: null,
  current_selected_track_index: null,
  kill_all_tracks_enabled: false,
  strobe_speed: null,
  used_save: ''
};

export default (state = GLOBAL_DEFAULT_STATE, payload) => {
  const { data, type } = payload;

  switch (type) {
    case FETCH_DATA_SUCCESS:
      return {
        bpm: data.bpm,
        strobe_speed: data.strobe_speed,
        current_selected_track_index: data.current_selected_track_index,
        kill_all_tracks_enabled: data.kill_all_tracks_enabled,
        used_save: data.used_save
      };
    default:
      return state;
  }
};