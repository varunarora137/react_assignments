import { useState } from "react";
import "./Header.css";

function Header({ text, setMode }) {
  const [circleMove, setCircleMove] = useState(false);
  return (
    <div className="header">
      <div className="headerHeadings">
        <p className="heading">TextUtils</p>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div
        className="modeChange"
        onClick={() => setMode((e) => (e === "light" ? "dark" : "light"))}
      >
        <div className="toggle" onClick={() => setCircleMove((e) => !e)}>
          <div
            className={circleMove ? "circle moveRight" : "circle moveLeft"}
          ></div>
        </div>
        <p>Enable {text === "light" ? "dark" : "light"} Mode</p>
      </div>
    </div>
  );
}

export default Header;
