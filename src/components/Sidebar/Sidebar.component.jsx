import React, { useState } from "react";
import "./Sidebar.styles.scss";
import logo from "../../images/spotify-white.png";
import Modal from "../Modal/Modal.component";

const Sidebar = () => {
  const [state, setState] = useState({
    currentPlaylist: "home",
    Modal: false,
    playlists: {
      home: null,
      favorites: null,
    },
  });

  const playlists = Object.keys(state.playlists);

  return (
    <ul className="sidebar-container">
      <img src={logo} alt="spotify" />

      <li className="library">library</li>

      {playlists.map((list) => (
        <li
          keys={list}
          className={list === state.currentPlaylist ? "active" : ""}
          onClick={() => setState({ ...state, currentPlaylist: list })}
        >
          {list}
        </li>
      ))}

      <li
        className="new-playlist"
        onClick={() => setState({ ...state, Modal: true })}
      >
        <i className="fa fa-plus-circle" />
        <span>New Playlist</span>
      </li>
      <Modal
        show={state.Modal}
        close={() => setState({ ...state, Modal: false })}
      >
        yo sup dude
      </Modal>
    </ul>
  );
};

export default Sidebar;
