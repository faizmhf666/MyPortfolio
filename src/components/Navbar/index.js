import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [showBar, setShowBar] = useState(false);
  const [color, setColor] = useState(false);
  const onClickHam = () => setShowBar(!showBar);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const navHeading = "<MyPortfolio />  ;";

  return (
    <nav className={color ? "header header-bg" : "header"}>
      <Link to="/" className="web-link">
        <h1 style={{ color: "#f8d90f" }}>{navHeading}</h1>
      </Link>

      <ul className={showBar ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <div className="ham-menu" onClick={onClickHam}>
        {showBar ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
