export const TRACKS_DEFAULT_STATE = {
 tracks: []
};

export default (state = TRACKS_DEFAULT_STATE, payload) => {
  const { type } = payload;

  switch (type) {
    default:
      return state;
  }
};