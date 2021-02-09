import React, { useContext } from "react";
import "./Content.styles.scss";
import { StoreContext } from "../MusicPlayer/MusicPlayer.component";

const Content = () => {
  const { state, dispatch } = useContext(StoreContext);
  const currentPlaylist = state.currentPlaylist;
  const songIds = Array.from(state.playlists[currentPlaylist]);

  return (
    <div className="content-container">
      <div className="playlist-title">{currentPlaylist}</div>

      {songIds.length <= 0 ? (
        <p>Your playlist is empty. Start by adding some songs!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <td />
              <td> Title</td>
              <td>Artist</td>
              <td>Length</td>
            </tr>
          </thead>

          <tbody>
            {songIds.map((id) => {
              const { title, artist, length } = state.media[id];
              const isFavorite = state.playlists.favorites.has(id);

              return (
                <tr key={id}>
                  <td>
                    {isFavorite ? (
                      <i className="fa fa-heart" />
                    ) : (
                      <i
                        className="fa fa-heart-o"
                        onClick={() =>
                          dispatch({ type: "ADD_FAVORITE", songId: id })
                        }
                      />
                    )}
                  </td>
                  <td>{title}</td>
                  <td>{artist}</td>
                  <td>{length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Content;
