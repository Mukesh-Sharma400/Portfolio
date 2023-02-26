import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg shadow fixed-top">
      <div className="container container-fluid">
        <Link to="/">
          <button
            type="button"
            className="btn navbar-brand text-white fw-bold text-uppercase m-0 p-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            Mukesh Sharma
          </button>
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/skills" className="nav-link text-white">
                <button
                  type="button"
                  className="btn text-white m-0 p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                >
                  Skills
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link text-white">
                <button
                  type="button"
                  className="btn text-white m-0 p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                >
                  Projects
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/education" className="nav-link text-white">
                <button
                  type="button"
                  className="btn text-white m-0 p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                >
                  Education
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className="nav-link text-white">
                <button
                  type="button"
                  className="btn text-white m-0 p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                >
                  Experience
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                <button
                  type="button"
                  className="btn text-white m-0 p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                >
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
