import React from "react";
import "./Login.styles.scss";

function Login() {
  return (
    <div className="login-container">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify"
        style={{ borderRadius: "10em" }}
      />
      <a className="login-button"> Login With Spotify</a>
    </div>
  );
}

export default Login;
