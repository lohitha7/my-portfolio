import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="top-menu">
      <span className="portfolio-title">My Portfolio</span>
      <div className="menu-links">
        <Link to="/">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
