import mock from 'assets/mock.json';
import {FETCH_DATA_SUCCESS} from "store/glossary";

export const fetchDataSuccess = payload => ({
  type: FETCH_DATA_SUCCESS,
  data: payload
});

export const fetchData = () => dispatch => {
  const mockedData = JSON.parse(JSON.stringify(mock)).state;
  dispatch(fetchDataSuccess(mockedData));
};