import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LeafAI</div>
      <ul className="navbar-links">
        <li><a href="#upload">Upload</a></li>
        <li><a href="#output">Output</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
