import MusicPlayer from "./components/MusicPlayer/MusicPlayer.component";
import Login from "./components/Login/Login.component";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "../src/components/Login/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // run cose based on a given condition
  const [{ user, token }, dispatch] = useDataLayerValue();
  //DataLayer.user = {user}

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // using this no one can see the token;
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token); //( it's giving access to use spotify services);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    console.log("I HAVE A TOKEN", token);
  }, []);

  console.log("hi", user);
  console.log("hello", token);

  return (
    <div className="App">
      {token ? <MusicPlayer spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

// c076717c11ea4d25b2cb7134ba0d183cs
