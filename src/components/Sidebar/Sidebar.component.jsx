import React, { useState, useRef, useContext } from "react";
import "./Sidebar.styles.scss";
import logo from "../../images/spotify-white.png";
import Modal from "../Modal/Modal.component";
import Toast from "../Toast/Toast.component";
import { StoreContext } from "../MusicPlayer/MusicPlayer.component";

const Sidebar = () => {
  const [sidebarState, setState] = useState({
    modal: false,
    toast: "",
  });

  const { state, dispatch } = useContext(StoreContext);

  const playlistRef = useRef(null);

  const playlists = Object.keys(state.playlists);

  const addPlaylist = (e) => {
    e.preventDefault();
    const list = playlistRef.current.value;
    console.log(list);

    dispatch({ type: "ADD_PLAYLIST", playlist: list });

    setState({
      ...sidebarState,
      modal: false,
      toast: "Your playlist was created successfully!",
    });
  };

  const handelModel = () => {
    setState({ ...sidebarState, modal: !sidebarState.modal });
  };

  return (
    <ul className="sidebar-container">
      <img src={logo} alt="spotify" />

      <li className="library">library</li>

      {playlists.map((list) => (
        <li
          key={list}
          className={list === state.currentPlaylist ? "active" : ""}
          onClick={() => {
            dispatch({ type: "SET_PLAYLIST", playlist: list });
          }}
        >
          {list}
        </li>
      ))}

      <li
        className="new-playlist"
        onClick={() => setState({ ...sidebarState, modal: true })}
      >
        <i className="fa fa-plus-circle" />
        <span>New Playlist</span>
      </li>
      <Modal show={sidebarState.modal} close={handelModel}>
        <form onSubmit={addPlaylist}>
          <div className="title">New Playlist</div>

          <div className="content-wrap">
            <input
              type="text"
              placeholder="My Playlist"
              required
              ref={playlistRef}
            />
            <br />
            <button type="submit">Create</button>
          </div>
        </form>
      </Modal>
      <Toast
        toast={sidebarState.toast}
        close={() => setState({ ...sidebarState, toast: "" })}
      />
    </ul>
  );
};

export default Sidebar;
