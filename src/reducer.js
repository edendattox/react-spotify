export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished developing...
  // token:
  //   "BQCwdsRh92QFfuaYgGhGErJ7FZCxhFeUxAkZH2NTbHS2Lm-C8VHI6kytt_RGpya3edkhE2l9ATacuwTKPeA1Nr6tvmIMj6bcbDmpHQ7Sc-v1cUSQAeuO2tPpI9FTBSAyHPCyykRgVNfv_9iFE07PDY0fxFyY_V0",
};

const reducer = (state, action) => {
  console.log(action);

  // action --> type, payload

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
