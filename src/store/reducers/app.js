import {CHANGE_URL_SUCCESS, COLOR_THEME_CHANGE} from "store/glossary";

export const APP_DEFAULT_STATE = {
  theme: 'dark',
  url: ''
};

export default (state = APP_DEFAULT_STATE, payload) => {
  const { data, type } = payload;

  switch (type) {
    case CHANGE_URL_SUCCESS:
      return {
        ...state,
        url: data
      }
    case COLOR_THEME_CHANGE:
      return {
        ...state,
        theme: data
      };
    default:
      return state;
  }
};