export const LOGS_DEFAULT_STATE = [];

export default (state = LOGS_DEFAULT_STATE, payload) => {
  const { data, type } = payload;

  switch (type) {
    default:
      return state;
  }
};