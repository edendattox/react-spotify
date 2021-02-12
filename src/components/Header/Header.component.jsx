import React from "react";
import "./Header.styles.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../DataLayer";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs," type="text" />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="ed" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;