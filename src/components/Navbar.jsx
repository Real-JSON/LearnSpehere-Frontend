import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar Component/Navbar.css";

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <i className="ri-donut-chart-fill"></i>
          <span>LearnSphere</span>
        </Link>
        {/* Mobile Backdrop Overlay */}
        <div
          className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={closeMenu}
        ></div>

        {/* Navigation Drawer */}
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          {/* Mobile Close Button inside drawer */}
          <button
            className="drawer-close-btn"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <i className="ri-close-line"></i>
          </button>

          {/* Navigation Links */}
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <Link to="/courses" className="nav-link" onClick={closeMenu}>
                Courses
              </Link>
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

          {/* Mobile Auth Buttons inside drawer */}
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

        {/* Desktop Auth Buttons & Mobile Hamburger Toggle */}
        <div className="header-actions">
          <div className="nav-auth-desktop">
            <Link to="/signin" className="btn btn-outline">
              <i className="ri-user-line"></i> Sign In
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </div>

          {/* Hamburger Toggle */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Open navigation menu"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
