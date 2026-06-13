import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constants/index";
import "./Navbar.css";
import close from "../assets/close.png"
import hamburger from "../assets/hamburger.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen]= useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  }
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Trippy</h1>
      </div>

      <div className="navbar-menu-toggle">
        <button onClick={handleMenuToggle}>
          <img src={isMenuOpen ? close : hamburger} alt="Menu" />
        </button>
      </div>

      <div className={`navbar-links-container ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          {navLinks.map((l) => (
            <li key={l.title}>
              <NavLink
                to={l.url}
                onClick={() => setIsMenuOpen(false)}
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
