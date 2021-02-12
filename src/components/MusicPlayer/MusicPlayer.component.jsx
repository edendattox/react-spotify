import React from "react";
import "./MusicPlayer.styles.scss";

import Content from "../Content/Content.component";
import Playbar from "../Playbar/Playbar.component";
import Sidebar from "../Sidebar/Sidebar.component";

const MusicPlayer = ({ spotify }) => {
  return (
    <div className="music-player">
      <div className="player__body">
        <Sidebar />
        <Content spotify={spotify} />
      </div>
      <Playbar />
    </div>
  );
};

export default MusicPlayer;
