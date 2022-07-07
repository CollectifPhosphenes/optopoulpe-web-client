import {CHANGE_URL_SUCCESS} from "store/glossary";

// CHANGE URL
export const changeUrlSuccess = payload => ({
  type: CHANGE_URL_SUCCESS,
  data: payload
});

export const changeUrl = url => dispatch => {
  dispatch(changeUrlSuccess(url));
};