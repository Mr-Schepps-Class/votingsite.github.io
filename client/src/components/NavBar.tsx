import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header-default">
      <nav>
        <ul className="header-list">
          <li className="header-item" id="header-logo">
            <Link className="header-link" id="link-logo" to="/">
              WEB PORTAL
            </Link>
          </li>
          <li className="header-item" id="upload-item">
            <Link id="upload-link" className="header-link" to="/upload-project">
              Upload Project
            </Link>
          </li>
          <li className="header-item">
            <Link className="header-link" to="/login-signup">
              Login/Signup
            </Link>
          </li>
          <li className="header-item">
            <Link className="header-link" to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
