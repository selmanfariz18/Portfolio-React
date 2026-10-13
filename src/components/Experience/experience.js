import React from "react";
import { experience } from "../../data";
import Icon from "../Icon";
import "./experience.css";

const Experience = () => (
  <section id="work" className="section">
    <div className="container">
      <div className="section-head reveal">
        <h2>
          <span className="star">★</span> Work Log <span className="star">★</span>
        </h2>
        <span className="kicker">WHERE I'VE BEEN</span>
      </div>

      <ol className="xp-list">
        {experience.map((xp, i) => (
          <li key={xp.company} className="xp-item">
            <span className="xp-pin" aria-hidden="true" />
            <article
              className={`xp-card paper paper--lg reveal ${i % 2 ? "tilt-r" : "tilt-l"}`}
            >
              {i === 0 && <span className="tape" />}
              <header className="xp-top">
                <div className="xp-meta">
                  <span className={`tag tag--${xp.tagColor}`}>{xp.tag}</span>
                  <span className="xp-period pixel">{xp.period}</span>
                </div>
                <span className="xp-company">{xp.company}</span>
              </header>

              <h3 className="xp-headline pixel">
                {xp.headline[0]} <span className={`accent accent--${xp.tagColor}`}>{xp.headline[1]}</span>
              </h3>
              <p className="xp-role">{xp.role}</p>
              <p className="xp-summary">{xp.summary}</p>

              {xp.features && (
                <div className="feature-grid xp-features">
                  {xp.features.map((f) => (
                    <div key={f.title} className="feature">
                      <Icon name={f.icon} size={18} />
                      <h4>{f.title}</h4>
                      <p>{f.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
