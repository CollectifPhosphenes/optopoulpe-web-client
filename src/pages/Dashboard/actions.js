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
      `[GLOBAL - BPM] Change from ${currentGlobalState.bpm} to ${newPayload.bpm}.`
    ));
  }

  if (currentGlobalState.current_selected_track_index !== newPayload.current_selected_track_index) {
    dispatch(logDispatcher(
      LOG_CURRENT_TRACK,
      `[GLOBAL - ACTIVE TRACK] Track ${newPayload.bpm} is now active.`
    ));
  }

  if (currentGlobalState.kill_all_tracks_enabled !== newPayload.kill_all_tracks_enabled) {
    if (newPayload.kill_all_tracks_enabled) {
      dispatch(logDispatcher(
        LOG_KILL_ALL_TRACK,
        '[GLOBAL - KILL ALL TRACKS] Killed all tracks'
      ));
    }
  }

  if (currentGlobalState.strobe_speed !== newPayload.strobe_speed) {
    dispatch(logDispatcher(
      LOG_STROBE_SPEED,
      `[GLOBAL - STROBE SPEED] Change from ${currentGlobalState.strobe_speed} to ${newPayload.strobe_speed}.`
    ));
  }

  if (currentGlobalState.used_save !== newPayload.used_save) {
    dispatch(logDispatcher(
      LOG_SAVE_STATE,
      `[GLOBAL - SAVED STATE] Change from ${currentGlobalState.used_save} to ${newPayload.used_save}.`
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
          `[TRACK - MODULATION] ${newModulation ? 'Enabled' : 'Disabled'} on track ${current+1}`
        );
      }

      if (mask.enabled !== newMask.enabled) {
        newMessages.push(
          `[TRACK - MASK] ${newMask ? 'Enabled' : 'Disabled'} on track ${current+1}`
        );
      }

      if (slicer.enabled !== newSlicer.enabled) {
        newMessages.push(
          `[TRACK - SLICER] ${newSlicer ? 'Enabled' : 'Disabled'} on track ${current+1}`
        );
      }

      if (feedback.enabled !== newFeedback.enabled) {
        newMessages.push(
          `[TRACK - FEEDBACK] ${newFeedback ? 'Enabled' : 'Disabled'} on track ${current+1}`
        );
      }

      if (strobe.enabled !== newStrobe.enabled) {
        newMessages.push(
          `[TRACK - STROBE] ${newStrobe ? 'Enabled' : 'Disabled'} on track ${current+1}`
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