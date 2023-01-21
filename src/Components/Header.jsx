import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Coin"} className="nav-link" href="#">
                  Coins
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Exchange"} className="nav-link" href="#">
                  Exchange
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
