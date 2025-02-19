import React from "react";
import "../assets/sass/Components/Header.scss";
import { NavLink } from "react-router-dom";
import kasaLogo from "../assets/images/kasa-logo.svg";

function Header() {
  return (
    <nav className="header">
      <NavLink to="/">
        <div className="logo">
          <img src={kasaLogo} alt="logo de kasa" />
        </div>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav-link">
          A propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
