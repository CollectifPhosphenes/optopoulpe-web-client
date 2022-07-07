import mock from 'assets/mock.json';
import {COLOR_THEME_CHANGE, FETCH_DATA_SUCCESS} from "store/glossary";

// DATA FETCHING
export const fetchDataSuccess = payload => ({
  type: FETCH_DATA_SUCCESS,
  data: payload
});

export const fetchData = () => dispatch => {
  const mockedData = JSON.parse(JSON.stringify(mock)).state;
  dispatch(fetchDataSuccess(mockedData));
};

// DARK MODE / LIGHT MODE
export const colorModeSwitchSuccess = payload => ({
  type: COLOR_THEME_CHANGE,
  data: payload
});

export const colorModeSwitch = theme => dispatch => {
  dispatch(colorModeSwitchSuccess(theme));
};