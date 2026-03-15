import React, { useEffect, useRef } from "react";
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
  "https://img.shields.io/badge/Node.js-white?style=for-the-badge&logo=node.js&logoColor=black",
  "https://img.shields.io/badge/Next.js-white?style=for-the-badge&logo=next.js&logoColor=black",
  "https://img.shields.io/badge/PostgreSQL-white?style=for-the-badge&logo=postgresql&logoColor=black",
  "https://img.shields.io/badge/mySQL-white?style=for-the-badge&logo=mysql&logoColor=black",
  "https://img.shields.io/badge/Oracle-white?style=for-the-badge&logo=oracle&logoColor=black",
  "https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=black",
  "https://img.shields.io/badge/TypeScript-white?style=for-the-badge&logo=typescript&logoColor=black"
];

const Intro = () => {
  const containerRef = useRef(null);
  const badgeRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize physics state for each badge
    const badgePhysics = badges.map(() => ({
      x: Math.random() * (container.clientWidth - 150), // Initial X (avoiding right edge overflow)
      y: Math.random() * (container.clientHeight - 40), // Initial Y
      vx: (Math.random() - 0.5) * 1.5, // Velocity X (-0.75 to 0.75 pixels per frame)
      vy: (Math.random() - 0.5) * 1.5, // Velocity Y
    }));

    let animationFrameId;

    const updatePhysics = () => {
      badgePhysics.forEach((badge, index) => {
        const el = badgeRefs.current[index];
        if (!el) return;

        // Update positions
        badge.x += badge.vx;
        badge.y += badge.vy;

        // Collision logic (bouncing off walls)
        const rect = el.getBoundingClientRect();
        // Fallbacks if getBoundingClientRect is ready yet
        const width = rect.width || 120;
        const height = rect.height || 28;

        if (badge.x <= 0) {
          badge.x = 0;
          badge.vx *= -1;
        } else if (badge.x + width >= container.clientWidth) {
          badge.x = container.clientWidth - width;
          badge.vx *= -1;
        }

        if (badge.y <= 0) {
          badge.y = 0;
          badge.vy *= -1;
        } else if (badge.y + height >= container.clientHeight) {
          badge.y = container.clientHeight - height;
          badge.vy *= -1;
        }

        // Apply new position
        el.style.transform = `translate(${badge.x}px, ${badge.y}px)`;
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    // Start loop
    animationFrameId = requestAnimationFrame(updatePhysics);

    // Cleanup
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="intro">
      <div className="floating-badges" ref={containerRef}>
        {badges.map((badge, index) => (
          <img
            key={index}
            src={badge}
            alt={`badge-${index}`}
            className="floating-badge"
            ref={(el) => (badgeRefs.current[index] = el)}
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
