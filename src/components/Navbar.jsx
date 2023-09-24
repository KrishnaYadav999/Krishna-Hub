import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ setSearchTerm }) {
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Krishna-<span style={{ color: "green" }}>Hub</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                JoinUs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/Singin">
                    SingIn
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Login">
                    LogIn
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearchInputChange}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
