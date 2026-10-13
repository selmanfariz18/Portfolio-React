import React from "react";
import { LuArrowUp } from "react-icons/lu";
import { navLinks, profile } from "../../data";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <nav className="footer-nav" aria-label="Footer">
        {[...navLinks.left, ...navLinks.right].map((l) => (
          <a key={l.id} href={`#${l.id}`}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.fullName} · built with React &amp; a lot of chai
        </span>
        <a href="#home" className="footer-top pixel">
          Back to top <LuArrowUp size={12} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
