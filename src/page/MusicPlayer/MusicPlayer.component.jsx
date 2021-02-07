import React from "react";
import "./MusicPlayer.styles.scss";
import Content from "../../components/Content/Content.component";
import Playbar from "../../components/Playbar/Playbar.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import Topbar from "../../components/Topbar/Topbar.component";

const MusicPlayer = () => (
  <div className="music-player">
    <Sidebar />
    <Content />
    <Topbar />
    <Playbar />
  </div>
);

export default MusicPlayer;
