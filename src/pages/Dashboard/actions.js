import axios from 'axios';
import {COLOR_THEME_CHANGE, FETCH_DATA_SUCCESS} from "store/glossary";

// DATA FETCHING
export const fetchDataSuccess = payload => ({
  type: FETCH_DATA_SUCCESS,
  data: payload
});

export const fetchData = () => dispatch => {
  axios.get('https://1449-89-3-105-179.ngrok.io/parse', {'Content-type': 'application/json'})
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