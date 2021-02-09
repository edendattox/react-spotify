import React, { useReducer, createContext } from "react";
import "./MusicPlayer.styles.scss";
import Content from "../Content/Content.component";
import Playbar from "../Playbar/Playbar.component";
import Sidebar from "../Sidebar/Sidebar.component";
import Topbar from "../Topbar/Topbar.component";
import media from "../../media.json";

export const StoreContext = createContext(null);

const DEFAULT_PLAYLIST = "home";

const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  media,
  playlists: {
    home: new Set(media.ids),
    favorites: new Set(),
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYLIST":
      return {
        ...state,
        playlists: { ...state.playlists, [action.playlist]: new Set() },
      };
    case "SET_PLAYLIST":
      return { ...state, currentPlaylist: action.playlist };
    case "ADD_FAVORITE":
      state.playlists.favorites.add(action.songId);
      return { ...state };
  }

  return state;
};

const MusicPlayer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className="music-player">
        <Playbar />
        <Sidebar />
        <Content />
        <Topbar />
      </div>
    </StoreContext.Provider>
  );
};

export default MusicPlayer;
