import React from "react";
import { stats, skills } from "../../data";
import Icon from "../Icon";
import "./about.css";

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <div className="section-head reveal">
        <h2>
          <span className="star">★</span> About Me <span className="star">★</span>
        </h2>
        <span className="kicker">WHO I AM</span>
      </div>

      <div className="about-grid">
        <article className="about-note paper reveal tilt-l">
          <span className="tape tape--left" />
          <p className="about-file pixel">README.md</p>
          <p>
            I'm a backend-leaning <strong>full-stack developer</strong> from Kerala. My day job is
            the part of e-commerce nobody sees but everybody feels — <strong>payments, orders and
            the APIs</strong> that hold them together.
          </p>
          <p>
            Before that I <strong>co-founded a small software startup</strong> in college, led the
            TinkerHub tech community on campus, and built websites for whatever event needed one
            that week.
          </p>
          <p>
            These days I'm into clean database design, reliable integrations, and poking at things
            from a <strong>security</strong> angle.
          </p>
        </article>

        <div className="about-stats">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stat paper paper--plain reveal ${i % 2 ? "tilt-r" : "tilt-l"}`}
              style={{ "--delay": `${i * 90}ms` }}
            >
              <span className="stat-value pixel">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="toolbox reveal">
        <div className="toolbox-head">
          <span className="pixel">~/toolbox</span>
          <span className="toolbox-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="toolbox-body">
          {skills.map((g) => (
            <div key={g.group} className="toolbox-row">
              <span className="toolbox-group pixel">{g.group}</span>
              <ul>
                {g.items.map((item) => (
                  <li key={item} className="skill">
                    <Icon name={item} size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
