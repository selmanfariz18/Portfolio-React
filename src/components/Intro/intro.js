import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
// import btnImg from "../../assets/hireme.png";
// import { Link } from "react-router-dom";
// import resume from "../../assets/Resume_Selman.pdf";

const Intro = () => {
  return (
    <section id="intro">
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
