import React from "react";
import "./miniopen.css";
import { Link } from "react-router-dom";

function MiniOpen() {
  return (
    <div className="animate__animated animate__zoomIn">
      <ul className="mini">
        <li className="mini--lis">
          <a className="mini--links" href="/">
            Home
          </a>
        </li>
        <li className="mini--lis">
          <Link className="mini--links" to="/">
            Figma
          </Link>
        </li>
        <li className="mini--lis">
          <Link className="mini--links" to="/About">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MiniOpen;
