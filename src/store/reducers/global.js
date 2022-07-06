export const GLOBAL_DEFAULT_STATE = {
  global: []
};

export default (state = GLOBAL_DEFAULT_STATE, payload) => {
  const { type } = payload;

  switch (type) {
    default:
      return state;
  }
};