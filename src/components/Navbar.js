import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      {/* Left Logo Section */}
      <div className="nav-left">
        <img src={logo} alt="Happy Coaching Logo" className="logo" />
        <span className="brand">Happy Coaching</span>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        className="hamburger"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Center Navigation */}
      <div className="nav-center">
        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li>
            <Link to="/home" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/" onClick={closeMenu}>Services</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About Us</Link>
          </li>
          <li>
            <Link to="/extra-sales" onClick={closeMenu}>
              Extra Salespage
            </Link>
          </li>

          <li className="nav-cta">
            <Link to="/free-guide" onClick={closeMenu}>
              <button className="nav-btn">
                Get your free guide now
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
