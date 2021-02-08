import React, { useContext } from "react";
import "./Content.styles.scss";
import { StoreContext } from "../MusicPlayer/MusicPlayer.component";

const Content = () => {
  const { state } = useContext(StoreContext);

  return <div className="content-container">{state.currentPlaylist}</div>;
};

export default Content;
