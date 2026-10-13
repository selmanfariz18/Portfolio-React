import React, { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { navLinks, profile } from "../../data";
import "./navbar.css";

const allLinks = [...navLinks.left, ...navLinks.right];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // highlight the section currently in view
  useEffect(() => {
    const sections = allLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const renderLink = (l) => (
    <li key={l.id}>
      <a
        href={`#${l.id}`}
        className={`nav-link ${active === l.id ? "is-active" : ""}`}
        onClick={() => setOpen(false)}
      >
        {l.label}
      </a>
    </li>
  );

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <div className="nav-strip nav-strip--back" aria-hidden="true" />
        <div className="nav-strip nav-strip--front">
          <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
            {profile.handle}
          </a>
          <ul className="nav-list nav-list--left">{navLinks.left.map(renderLink)}</ul>
          <div className="nav-clip-space" aria-hidden="true" />
          <ul className="nav-list nav-list--right">{navLinks.right.map(renderLink)}</ul>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>
        <div className="nav-clip" aria-hidden="true">
          <span className="nav-clip-ring" />
          <span className="nav-clip-body">
            <span className="nav-clip-hole" />
          </span>
        </div>
      </nav>

      <div className={`nav-drawer ${open ? "is-open" : ""}`}>
        <ul className="paper">
          {allLinks.map((l, i) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                <span className="nav-drawer-num">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
