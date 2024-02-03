import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/SMEC_LOGO.png";
import "../assets/css/style.css";

const Header = () => {
  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <Link to="/" className="logo">
            <img src={logoImage} width="80" height="60" alt="SMEC logo" />
          </Link>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <Link to="/" className="logo">
                <img src={logoImage} width="20%" height="60" alt="SMEC logo" />
              </Link>
            </div>

            <ul className="navbar-list">
              <li>
                <Link to="/" className="navbar-link hover-1" data-nav-toggler>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/" className="navbar-link hover-1" data-nav-toggler>
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/" className="navbar-link hover-1" data-nav-toggler>
                  Competitions
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      to="/"
                      className="navbar-link hover-1"
                      data-nav-toggler
                    >
                      GEEKS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="navbar-link hover-1"
                      data-nav-toggler
                    >
                      E-Games
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="navbar-link hover-1"
                      data-nav-toggler
                    >
                      General Games
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/" className="navbar-link hover-1" data-nav-toggler>
                  Previous Events
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      to="/"
                      className="navbar-link hover-1"
                      data-nav-toggler
                    >
                      2022-23
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="navbar-link hover-1"
                      data-nav-toggler
                    >
                      2023-24
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/" className="navbar-link hover-1" data-nav-toggler>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <Link to="/Register" className="btn btn-primary">
            Register
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
