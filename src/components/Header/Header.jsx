import React from "react";
import logo from '../../assets/images/logo.png'
import './Header.css'
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-lg">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                    START BOOST
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                    CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                JOBS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                FAQ
                </a>
              </li>
            </ul>
          </div>
          <button className="loginbtn">
            <a href="/">LOG IN</a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
