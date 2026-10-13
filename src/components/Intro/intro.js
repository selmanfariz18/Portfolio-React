import React, { useEffect, useState } from "react";
import { LuArrowRight, LuDownload, LuMapPin } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import photo from "../../assets/image.png";
import resume from "../../assets/Resume_Selman.pdf";
import { profile } from "../../data";
import "./intro.css";

const today = () =>
  new Date()
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();

const Intro = () => {
  const name = profile.firstName;
  const [typed, setTyped] = useState("");

  // type the name out once, retro-terminal style
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setTyped(name);
      return undefined;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(name.slice(0, i));
      if (i >= name.length) clearInterval(id);
    }, 140);
    return () => clearInterval(id);
  }, [name]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <article className="hero-card paper paper--lg">
          <header className="hero-top">
            <span className="pixel hero-handle">★ {profile.handle}</span>
            <span className="pixel hero-date">{today()}</span>
          </header>

          <div className="hero-main">
            <h1 className="hero-title pixel">
              <span className="hero-hi">HI,</span>
              <span className="hero-hi">I'M</span>
              <span className="hero-name" aria-label={name}>
                <span aria-hidden="true">{typed}</span>
                <span className="cursor" aria-hidden="true" />
              </span>
            </h1>

            <figure className="polaroid">
              <span className="tape" />
              <div className="polaroid-img">
                <img src={photo} alt="Selmanul Farizy" width="653" height="1294" />
              </div>
            </figure>
          </div>

          <div className="hero-chips">
            <a className="chip" href={profile.github} target="_blank" rel="noopener noreferrer">
              <SiGithub size={16} /> {profile.githubHandle}
            </a>
            <span className="chip chip--pink pixel">{profile.role.toUpperCase()}</span>
          </div>

          <p className="hero-bio">
            Selman is a <strong>Programmer Analyst at Systalent</strong>, building payment
            integrations and shopping features for a Qatar-based e-commerce platform with{" "}
            <strong>TypeScript, Node.js and PostgreSQL</strong>. CS engineer by degree,
            ex-startup co-founder, security-curious, and a <strong>vibe-coder</strong> by nature.
          </p>

          <p className="hero-loc">
            <LuMapPin size={16} /> {profile.location}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn--dark">
              View Projects <LuArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn--light">
              Contact Me
            </a>
          </div>

          <a className="hero-resume" href={resume} target="_blank" rel="noopener noreferrer">
            <LuDownload size={14} /> Grab my résumé (PDF)
          </a>
        </article>
      </div>
    </section>
  );
};

export default Intro;
