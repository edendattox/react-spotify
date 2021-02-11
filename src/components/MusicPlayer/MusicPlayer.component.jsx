import React from "react";
import "./MusicPlayer.styles.scss";

import Content from "../Content/Content.component";
import Playbar from "../Playbar/Playbar.component";
import Sidebar from "../Sidebar/Sidebar.component";

const MusicPlayer = ({ spotify }) => {
  return (
    <div className="music-player">
      <Playbar />
      <Sidebar />
      <Content />
    </div>
  );
};

export default MusicPlayer;
