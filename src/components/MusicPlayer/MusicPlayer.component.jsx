import React, { useReducer, createContext } from "react";
import "./MusicPlayer.styles.scss";
import Content from "../Content/Content.component";
import Playbar from "../Playbar/Playbar.component";
import Sidebar from "../Sidebar/Sidebar.component";
import Topbar from "../Topbar/Topbar.component";

export const StoreContext = createContext(null);

const DEFAULT_PLAYLIST = "home";

const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  playlists: {
    home: new Set(),
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
