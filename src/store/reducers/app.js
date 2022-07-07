import { COLOR_THEME_CHANGE } from "store/glossary";

export const APP_DEFAULT_STATE = {
  theme: 'dark',
};

export default (state = APP_DEFAULT_STATE, payload) => {
  const { data, type } = payload;

  switch (type) {
    case COLOR_THEME_CHANGE:
      return {
        ...state,
        theme: data
      };
    default:
      return state;
  }
};