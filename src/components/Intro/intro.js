import React, { useMemo } from "react";
import "./intro.css";
import bg from "../../assets/image.png";
// import btnImg from "../../assets/hireme.png";
// import { Link } from "react-router-dom";
// import resume from "../../assets/Resume_Selman.pdf";

const badges = [
  "https://img.shields.io/badge/HTML-white?style=for-the-badge&logo=html5&logoColor=black",
  "https://img.shields.io/badge/CSS-white?&style=for-the-badge&logo=css3&logoColor=black",
  "https://img.shields.io/badge/Tailwind_CSS-white?style=for-the-badge&logo=tailwind-css&logoColor=black",
  "https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap&logoColor=black",
  "https://img.shields.io/badge/JavaScript-white?style=for-the-badge&logo=javascript&logoColor=black",
  "https://img.shields.io/badge/React-white?style=for-the-badge&logo=react&logoColor=black",
  "https://img.shields.io/badge/Vue.js-white?style=for-the-badge&logo=vue.js&logoColor=black",
  "https://img.shields.io/badge/Django-white?style=for-the-badge&logo=django&logoColor=black",
  "https://img.shields.io/badge/Python-white?style=for-the-badge&logo=python&logoColor=black",
  "https://img.shields.io/badge/Flutter-white?style=for-the-badge&logo=flutter&logoColor=black",
  "https://img.shields.io/badge/Dart-white?style=for-the-badge&logo=dart&logoColor=black",
  "https://img.shields.io/badge/Amazon_AWS-white?style=for-the-badge&logo=amazon-aws&logoColor=black",
];

const Intro = () => {
  // Generate random positions, durations, and delays only on mount
  const badgeStyles = useMemo(() => {
    return badges.map(() => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      animationDuration: `${Math.random() * 15 + 10}s`, // Between 10s and 25s
      animationDelay: `-${Math.random() * 10}s`, // Start randomly within the animation cycle
    }));
  }, []);

  return (
    <section id="intro">
      <div className="floating-badges">
        {badges.map((badge, index) => (
          <img 
            key={index} 
            src={badge} 
            alt={`badge-${index}`} 
            className="floating-badge"
            style={badgeStyles[index]} 
          />
        ))}
      </div>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Selman</span>
          <br />
          Developer
        </span>
        <p className="introPara">
          A CS Engineer by degree <br />
          A Software Developer at <strong>Systalent</strong> by profession<br />
          A vibe-coder by nature
          {/* I craft clean, creative software solutions with a flow-state
          mindset — where great code meets great instinct. From building full-stack applications to
          exploring the edges of cybersecurity, I turn ideas into real, working products that speak
          for themselves. */}
        </p>
        {/* <div className="buttonsContainer">
          <Link to="/contact">
            <button className="btn">
              <img src={btnImg} alt="Hire Me" className="btnImg" />
              Hire Me
            </button>
          </Link>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="btn">Resume</button>
          </a>
        </div> */}
      </div>
      <div className="imageDiv">
        <img
          src={bg}
          alt="profile"
          className="bg"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Intro;
