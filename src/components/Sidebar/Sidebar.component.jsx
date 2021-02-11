import React from "react";
import "./Sidebar.styles.scss";
import SidebarOption from "../SidebarOption/SidebarOption.component";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
        className="sidebar_logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title"> PLAYLISTS</strong>
      <hr />

      <SidebarOption title="HIP HOP" />
      <SidebarOption title="HIP HOP 1" />
      <SidebarOption title="HIP HOP 2" />
    </div>
  );
};

export default Sidebar;
