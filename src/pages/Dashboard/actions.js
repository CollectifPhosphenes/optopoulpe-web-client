import axios from 'axios';
import {
  COLOR_THEME_CHANGE,
  FETCH_DATA_SUCCESS,
  CHANGE_URL_SUCCESS,
  LOG_BPM,
  LOG_CURRENT_TRACK,
  LOG_KILL_ALL_TRACK,
  LOG_SAVE_STATE,
  LOG_STROBE_SPEED,
  LOG_TRACK
} from "store/glossary";

// LOGS
const logDispatcher = (type, message) => ({ type, message });

const logGlobalChanges = newPayload => (dispatch, getState) => {
  const currentGlobalState = getState().global;

  if (currentGlobalState.bpm !== newPayload.bpm) {
    dispatch(logDispatcher(
      LOG_BPM,
      `[BPM] ${currentGlobalState.bpm} => ${newPayload.bpm}.`
    ));
  }

  if (currentGlobalState.current_selected_track_index !== newPayload.current_selected_track_index) {
    dispatch(logDispatcher(
      LOG_CURRENT_TRACK,
      `[ACTIVE TRACK] Track ${newPayload.current_selected_track_index} selected.`
    ));
  }

  if (currentGlobalState.kill_all_tracks_enabled !== newPayload.kill_all_tracks_enabled) {
    if (newPayload.kill_all_tracks_enabled) {
      dispatch(logDispatcher(
        LOG_KILL_ALL_TRACK,
        '[KILL ALL TRACKS] Killed all tracks'
      ));
    }
  }

  if (currentGlobalState.strobe_speed !== newPayload.strobe_speed) {
    dispatch(logDispatcher(
      LOG_STROBE_SPEED,
      `[STROBE SPEED] ${currentGlobalState.strobe_speed} => ${newPayload.strobe_speed}.`
    ));
  }

  if (currentGlobalState.used_save !== newPayload.used_save) {
    dispatch(logDispatcher(
      LOG_SAVE_STATE,
      `[SAVED STATE] Loaded ${newPayload.used_save}.`
    ));
  }
};

const logTracksChanges = newPayload => (dispatch, getState) => {
  const currentTracksState = getState().tracks;
  if (Object.values(currentTracksState || [])?.length) {
    const tracksChanged = Object.values(newPayload).reduce((prev, track, index) =>
      JSON.stringify(track) !== JSON.stringify(currentTracksState[index]) ? [...prev, index] : prev, []);

    const changesLogs = tracksChanged.reduce((prev, current) => {
      const {
        modulation: newModulation,
        mask: newMask,
        slicer: newSlicer,
        feedback: newFeedback,
        strobe: newStrobe
      } = newPayload[current];

      const {
        modulation,
        mask,
        slicer,
        feedback,
        strobe
      } = currentTracksState[current];

      const newMessages = [];

      if (modulation.enabled !== newModulation.enabled) {
        newMessages.push(
          `[TRACK ${current+1}] MODULATION ${newModulation ? 'ENABLED' : 'DISABLED'}`
        );
      }

      if (mask.enabled !== newMask.enabled) {
        newMessages.push(
          `[TRACK ${current+1}] MASK ${newMask ? 'ENABLED' : 'DISABLED'}`
        );
      }

      if (slicer.enabled !== newSlicer.enabled) {
        newMessages.push(
          `[TRACK ${current+1}] SLICER ${newSlicer ? 'ENABLED' : 'DISABLED'}`
        );
      }

      if (feedback.enabled !== newFeedback.enabled) {
        newMessages.push(
          `[TRACK ${current+1}] FEEDBACK ${newFeedback ? 'ENABLED' : 'DISABLED'}`
        );
      }

      if (strobe.enabled !== newStrobe.enabled) {
        newMessages.push(
          `[TRACK ${current+1}] STROBE ${newStrobe ? 'ENABLED' : 'DISABLED'}`
        );
      }

      return [...prev, ...newMessages];
    }, []);

    dispatch(logDispatcher(
      LOG_TRACK,
      changesLogs
    ));
  }
};

// DATA FETCHING
export const fetchDataSuccess = payload => ({
  type: FETCH_DATA_SUCCESS,
  data: payload
});

export const fetchData = url => (dispatch, getState) => {
  axios.get(url, {'Content-type': 'application/json'})
    .then(response => {
      dispatch(logGlobalChanges(response.data.state));
      dispatch(logTracksChanges(response.data.state.tracks));
      dispatch(fetchDataSuccess(response.data.state))
    })
};

// DARK MODE / LIGHT MODE
export const colorModeSwitchSuccess = payload => ({
  type: COLOR_THEME_CHANGE,
  data: payload
});

export const colorModeSwitch = theme => dispatch => {
  dispatch(colorModeSwitchSuccess(theme));
};

// CHANGE URL
export const changeUrlSuccess = payload => ({
  type: CHANGE_URL_SUCCESS,
  data: payload
});

export const changeUrl = url => dispatch => {
  dispatch(changeUrlSuccess(url));
};