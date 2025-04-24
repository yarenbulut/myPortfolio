import React from "react";
import { Link } from "react-router-dom";
import "./Headermain.css";

export default function Headermain() {
  return (
    <header className="header-main">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
