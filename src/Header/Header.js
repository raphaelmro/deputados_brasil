import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Link to="/">
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <div className="title is-4 header-is-white">
              DEPUTADOS DO BRASIL
            </div>
          </div>
        </div>
      </nav>
    </Link>
  );
};

export default Header;
