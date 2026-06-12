import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constants/index";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Trippy</h1>
      </div>

      <div className="navbar-links-container">
        <ul className="navbar-links">
          {navLinks.map((l) => (
            <li key={l.title}>
              <NavLink
                to={l.url}
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
              >
                {l.icon && <img src={l.icon} alt={l.title} />}
                {l.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
