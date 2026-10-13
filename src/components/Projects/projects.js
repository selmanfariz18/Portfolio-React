import React from "react";
import { LuArrowRight, LuGithub, LuArrowUpRight } from "react-icons/lu";
import { spotlightProjects, projects, profile } from "../../data";
import "./projects.css";

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <div className="section-head reveal">
        <h2>
          <span className="star">★</span> Project Spotlight <span className="star">★</span>
        </h2>
        <span className="kicker">BUILT BY ME</span>
      </div>

      <div className="spotlight-list">
        {spotlightProjects.map((p, i) => (
          <article
            key={p.name}
            className={`spotlight paper paper--lg reveal ${i % 2 ? "tilt-r" : "tilt-l"}`}
          >
            <span className="tape" />
            <header className="spotlight-top">
              <span className="spotlight-num pixel">0{i + 1}</span>
              <span className="spotlight-domain">{p.domain}</span>
            </header>

            <div className="spotlight-body">
              <a
                className="spotlight-shot"
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.name}`}
              >
                <span className="shot-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
              </a>

              <div className="spotlight-text">
                <p className="spotlight-name">{p.name}</p>
                <h3 className="pixel">
                  {p.headline[0]} <span className="accent">{p.headline[1]}</span>
                </h3>
                <p className="spotlight-desc">{p.description}</p>
                <ul className="stack-list">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="spotlight-actions">
                  <a className="btn btn--dark" href={p.live} target="_blank" rel="noopener noreferrer">
                    {p.cta} <LuArrowRight size={16} />
                  </a>
                  <a className="btn btn--light btn--sm" href={p.code} target="_blank" rel="noopener noreferrer">
                    <LuGithub size={14} /> Code
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <h3 className="more-title pixel reveal">More from the workbench</h3>

      <div className="project-grid">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className={`pcard paper paper--plain reveal ${i % 2 ? "tilt-r" : "tilt-l"}`}
            style={{ "--delay": `${(i % 3) * 90}ms` }}
          >
            <span className={`tape ${i % 2 ? "tape--right" : "tape--left"}`} />
            <div className="pcard-img">
              <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
            </div>
            <div className="pcard-body">
              <h4 className="pixel">{p.name}</h4>
              <p>{p.blurb}</p>
              <ul className="stack-list stack-list--sm">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="pcard-links">
                <a href={p.code} target="_blank" rel="noopener noreferrer" className="link-pixel">
                  <LuGithub size={13} /> Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="link-pixel">
                    Live <LuArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}

        <a
          className="pcard pcard--more reveal tilt-r"
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="pixel">See everything on GitHub</span>
          <LuArrowUpRight size={28} />
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
