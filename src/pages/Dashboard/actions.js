import axios from 'axios';
import {COLOR_THEME_CHANGE, FETCH_DATA_SUCCESS} from "store/glossary";

// DATA FETCHING
export const fetchDataSuccess = payload => ({
  type: FETCH_DATA_SUCCESS,
  data: payload
});

export const fetchData = url => dispatch => {
  axios.get(url, {'Content-type': 'application/json'})
    .then(response => dispatch(fetchDataSuccess(response.data.state)))
    .catch(error => console.log(error, 'error'))
};

// DARK MODE / LIGHT MODE
export const colorModeSwitchSuccess = payload => ({
  type: COLOR_THEME_CHANGE,
  data: payload
});

export const colorModeSwitch = theme => dispatch => {
  dispatch(colorModeSwitchSuccess(theme));
};