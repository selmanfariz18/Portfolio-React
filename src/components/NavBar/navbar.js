import React, { useState } from "react";
import "./navbar.css";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <a href="/" className="logo">
            Fariz.deb
          </a>
          <ul className={`navMenu ${isActive ? "active" : ""}`}>
            <li onClick={removeActive}>
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/certificates" className="navLink">
                Certificates
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/projects" className="navLink">
                Projects
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/achievements" className="navLink">
                Achievements
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/contact" className="navLink">
                Contact
              </a>
            </li>
          </ul>
          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleActiveClass}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
