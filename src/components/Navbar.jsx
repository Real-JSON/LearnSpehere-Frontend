import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <i className="ri-donut-chart-fill"></i>
          <span>LearnSphere</span>
        </a>

        {/* Mobile Backdrop Overlay */}
        <div
          className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={closeMenu}
        ></div>

        {/* Navigation Links */}
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#home" className="nav-link active" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#courses" className="nav-link" onClick={closeMenu}>
                Courses
              </a>
            </li>
            <li>
              <a href="#tutor" className="nav-link" onClick={closeMenu}>
                Become a Tutor
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                Contact Us
              </a>
            </li>
          </ul>

          {/* Auth buttons included inside mobile menu drawer for smaller screens */}
          <div className="nav-auth-mobile">
            <Link to="/signin" className="btn btn-outline" onClick={closeMenu}>
              <i className="ri-user-line"></i> Sign In
            </Link>
            <Link
              to="/register"
              className="btn btn-primary"
              onClick={closeMenu}
            >
              Register
            </Link>
          </div>
        </nav>

        {/* Desktop Auth Buttons & Mobile Toggle */}
        <div className="header-actions">
          <div className="nav-auth-desktop">
            <Link to="/signin" className="btn btn-outline">
              <i className="ri-user-line"></i> Sign In
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </div>

          {/* Toggle Button */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
